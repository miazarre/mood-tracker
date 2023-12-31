import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Error from "./components/Error";
import Calendar from "./components/Calendar";

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen m-2">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
