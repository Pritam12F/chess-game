import { WebSocket } from "ws";
import { Game } from "./Game";
import { INIT_MESSAGE, MOVE_MESSAGE } from "./message";

export class GameManager {
  private games: Game[];
  private pendingUsers: WebSocket | null;
  private users: WebSocket[];

  constructor() {
    this.games = [];
    this.pendingUsers = null;
    this.users = [];
  }

  addUser(socket: WebSocket) {
    this.users.push(socket);
    this.addHandler(socket);
  }

  removeUser(socket: WebSocket) {
    this.users = this.users.filter((user) => user !== socket);
  }

  private addHandler(socket: WebSocket) {
    socket.on("message", (data) => {
      const message = JSON.parse(data.toString());

      if (message.type === INIT_MESSAGE) {
        if (this.pendingUsers) {
          const newGame = new Game(socket, this.pendingUsers);
          this.games.push(newGame);
          this.pendingUsers = null;
        } else {
          this.pendingUsers = socket;
        }
      } else if (message.type === MOVE_MESSAGE) {
        const findGame = this.games.find(
          (game) => game.player1 === socket || game.player2 === socket
        );
        if (findGame) {
          findGame.makeMove(socket, message.move);
        }
      }
    });
  }
}
