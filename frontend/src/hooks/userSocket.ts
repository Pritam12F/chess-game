import { useEffect, useState } from "react";
import { WS_URL } from "../lib/message";

export const useSocket = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(WS_URL);

    ws.onopen = () => {
      console.log("Connected to websocket");
      setSocket(ws);
    };

    ws.onclose = () => {
      console.log("Disconnected");
    };

    return () => ws.close();
  }, []);

  return socket;
};
