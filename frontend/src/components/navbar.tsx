import { PuzzleIcon } from "./PuzzleIcon";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <div
        className="flex items-center justify-center cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        <PuzzleIcon className="h-6 w-6" />
        <span className="sr-only">Chess Website</span>
      </div>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <div
          className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer"
          onClick={() => {
            navigate("/game");
          }}
        >
          Games
        </div>
        <div className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer">
          Lessons
        </div>
        <div className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer">
          Community
        </div>
        <div className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer">
          About
        </div>
      </nav>
    </header>
  );
}
