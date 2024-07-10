import { Color, PieceSymbol, Square } from "chess.js";
import { useState } from "react";
import { MOVE_MESSAGE } from "../lib/message";

type ChessboardProps = {
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][];
  socket: WebSocket | null;
};

export const Chessboard = ({ board, socket }: ChessboardProps) => {
  const [from, setFrom] = useState<string | null>(null);

  return (
    <div className="w-full h-full]">
      <div className="text-white-200">
        {board?.map((row, i) => {
          return (
            <div key={i} className="flex">
              {row.map((square, j) => {
                const squareRepresentation =
                  String.fromCharCode(97 + (j % 8)) + "" + (8 - i);
                return (
                  <div
                    className={"w-16 h-16 border-2 flex justify-center items-center ".concat(
                      (i + j) % 2 == 0 ? "bg-black" : "bg-slate-300"
                    )}
                    key={j}
                    onClick={() => {
                      if (!from) {
                        setFrom(square?.square as string);
                      } else {
                        socket?.send(
                          JSON.stringify({
                            type: MOVE_MESSAGE,
                            move: {
                              from,
                              to: squareRepresentation,
                            },
                          })
                        );
                        setFrom(null);
                      }
                    }}
                  >
                    {square ? (
                      <img
                        className="w-8 h-10"
                        src={`/${
                          square?.color === "b"
                            ? square?.type
                            : `${square?.type?.toUpperCase()} copy`
                        }.png`}
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
