import { Route, Routes } from "react-router-dom";
import { Providers } from "./providers";
import { Game } from "./page/Game";
import { Landing } from "./page/Landing";

function App() {
  return (
    <Providers>
      <Routes>
        <Route path="/game" element={<Game />}></Route>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Providers>
  );
}

export default App;
