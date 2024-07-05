import { WebSocket } from "ws";

export class GameManager {
  private games: Game[];
  private pendingUsers: WebSocket | null;
  private users: WebSocket[];

  constructor() {
    this.games = [];
    this.pendingUsers = null;
    this.users = [];
  }

  addUser(socket: WebSocket) {}

  removeUser(socket: WebSocket) {}
}
