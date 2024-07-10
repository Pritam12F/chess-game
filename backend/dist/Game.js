"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const chess_js_1 = require("chess.js");
const message_1 = require("./message");
class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.board = new chess_js_1.Chess();
        this.startTime = new Date();
        this.movesCount = 0;
        this.player1.send(JSON.stringify({
            message: message_1.INIT_MESSAGE,
            payload: {
                color: "white",
            },
        }));
        this.player2.send(JSON.stringify({
            message: message_1.INIT_MESSAGE,
            payload: {
                color: "black",
            },
        }));
    }
    makeMove(socket, move) {
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
        }
        catch (_a) {
            console.log("Error");
            return {
                error: "Illegal move",
            };
        }
        //Check if game is over
        if (this.board.isGameOver()) {
            this.player1.send(JSON.stringify({
                message: message_1.GAME_OVER,
                payload: {
                    winner: this.board.turn() === "b" ? "white" : "black",
                },
            }));
            this.player2.send(JSON.stringify({
                message: message_1.GAME_OVER,
                payload: {
                    winner: this.board.turn() === "b" ? "white" : "black",
                },
            }));
            return;
        }
        this.player1.send(JSON.stringify({
            message: message_1.MOVE_MESSAGE,
            payload: move,
        }));
        this.player2.send(JSON.stringify({
            message: message_1.MOVE_MESSAGE,
            payload: move,
        }));
    }
}
exports.Game = Game;
