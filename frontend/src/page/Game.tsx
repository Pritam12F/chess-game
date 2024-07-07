import { Footer } from "../components/Footer";
import { Navbar } from "../components/navbar";

export const Game = () => {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#1a1a1a] text-white">
      <Navbar />
      <main>Main content</main>
      <Footer />
    </div>
  );
};
