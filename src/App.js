import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/";

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen m-2">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
