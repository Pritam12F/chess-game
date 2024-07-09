import { Chessboard } from "../components/chessboard";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/navbar";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";
import { useSocket } from "../hooks/userSocket";
import { GAME_OVER, INIT_MESSAGE, MOVE_MESSAGE } from "../lib/message";
import { Chess } from "chess.js";

export const Game = () => {
  const socket = useSocket();
  const [chess, setChess] = useState<Chess>(new Chess());
  const [board, setBoard] = useState(chess.board());

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.onmessage = (event) => {
      const dataParsed = JSON.parse(event.data);
      console.log(dataParsed);

      switch (dataParsed.message) {
        case INIT_MESSAGE: {
          setChess(new Chess());
          setBoard(chess.board());
          console.log("Game started!");
          break;
        }
        case MOVE_MESSAGE: {
          chess.move(dataParsed.move);
          setBoard(chess.board());
          console.log("Piece moved successfully");
          break;
        }
        case GAME_OVER: {
          alert(`Game over!! ${dataParsed.payload.winner} wins`);
          break;
        }
      }
    };
  }, [socket]);

  if (!socket) {
    return <div>Connecting</div>;
  }

  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#1a1a1a] text-white">
      <Navbar />
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-[#242424] pb-16">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col items-center justify-center">
                <div className="w-full max-w-[700px] aspect-square bg-[#333] rounded-lg flex items-center justify-center">
                  <div className="text-2xl font-bold">
                    <Chessboard board={board} />
                  </div>
                </div>
                <div className="mt-6">
                  <Button
                    onClick={() => {
                      socket.send(
                        JSON.stringify({
                          type: INIT_MESSAGE,
                        })
                      );
                    }}
                  >
                    Play Now
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-8">
                  <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    Experience the Thrill of Chess
                  </h1>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    Engage in captivating chess matches and hone your strategic
                    skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
