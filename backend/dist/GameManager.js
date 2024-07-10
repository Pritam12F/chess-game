"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
const Game_1 = require("./Game");
const message_1 = require("./message");
class GameManager {
    constructor() {
        this.games = [];
        this.pendingUsers = null;
        this.users = [];
    }
    addUser(socket) {
        this.users.push(socket);
        this.addHandler(socket);
    }
    removeUser(socket) {
        this.users = this.users.filter((user) => user !== socket);
    }
    addHandler(socket) {
        socket.on("message", (data) => {
            const message = JSON.parse(data.toString());
            if (message.type === message_1.INIT_MESSAGE) {
                if (this.pendingUsers) {
                    const newGame = new Game_1.Game(this.pendingUsers, socket);
                    this.games.push(newGame);
                    this.pendingUsers = null;
                }
                else {
                    this.pendingUsers = socket;
                }
            }
            else if (message.type === message_1.MOVE_MESSAGE) {
                const findGame = this.games.find((game) => game.player1 === socket || game.player2 === socket);
                if (findGame) {
                    findGame.makeMove(socket, message.move);
                }
            }
        });
    }
}
exports.GameManager = GameManager;
