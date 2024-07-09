import { Color, PieceSymbol, Square } from "chess.js";

export const Chessboard = ({
  board,
}: {
  board:
    | ({
        square: Square;
        type: PieceSymbol;
        color: Color;
      } | null)[][];
}) => {
  return (
    <div className="w-full h-full]">
      <div className="text-white-200">
        {board?.map((row, i) => {
          return (
            <div key={i} className="flex">
              {row.map((col, j) => {
                return (
                  <div
                    className={"w-16 h-16 border-2 ".concat(
                      (i + j) % 2 == 0 ? "bg-black" : "bg-slate-300"
                    )}
                  ></div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
