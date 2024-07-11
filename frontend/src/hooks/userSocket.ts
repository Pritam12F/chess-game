import { useEffect, useState } from "react";
import { WS_URL } from "../lib/message";

export const useSocket = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(process.env.WS_URL ?? WS_URL);
    ws.onopen = () => {
      setSocket(ws);
    };

    ws.onclose = () => {
      setSocket(null);
    };

    return () => {
      ws.close();
    };
  }, []);

  return socket;
};