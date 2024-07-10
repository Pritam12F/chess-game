import { WebSocket } from "ws";
import { Chess } from "chess.js";
import { GAME_OVER, INIT_MESSAGE, MOVE_MESSAGE } from "./message";

export class Game {
  public player1: WebSocket;
  public player2: WebSocket;
  private board: Chess;
  private startTime: Date;
  private movesCount: number;

  constructor(player1: WebSocket, player2: WebSocket) {
    this.player1 = player1;
    this.player2 = player2;
    this.board = new Chess();
    this.startTime = new Date();
    this.movesCount = 0;
    this.player1.send(
      JSON.stringify({
        message: INIT_MESSAGE,
        payload: {
          color: "white",
        },
      })
    );
    this.player2.send(
      JSON.stringify({
        message: INIT_MESSAGE,
        payload: {
          color: "black",
        },
      })
    );
  }

  makeMove(
    socket: WebSocket,
    move: {
      from: string;
      to: string;
    }
  ) {
    if (this.movesCount % 2 === 0 && socket !== this.player1) {
      console.log("Early return 1");
      return;
    }
    if (this.movesCount % 2 !== 0 && socket !== this.player2) {
      console.log("Early return 2");
      return;
    }
    try {
      this.board.move(move);
      this.movesCount++;
      console.log("Moved!!");
    } catch {
      console.log("Error");
      return {
        error: "Illegal move",
      };
    }

    //Check if game is over

    if (this.board.isGameOver()) {
      this.player1.send(
        JSON.stringify({
          message: GAME_OVER,
          payload: {
            winner: this.board.turn() === "b" ? "white" : "black",
          },
        })
      );

      this.player2.send(
        JSON.stringify({
          message: GAME_OVER,
          payload: {
            winner: this.board.turn() === "b" ? "white" : "black",
          },
        })
      );

      return;
    }

    this.player1.send(
      JSON.stringify({
        message: MOVE_MESSAGE,
        payload: move,
      })
    );

    this.player2.send(
      JSON.stringify({
        message: MOVE_MESSAGE,
        payload: move,
      })
    );
  }
}
