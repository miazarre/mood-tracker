import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen m-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
