import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Contact from "./pages/Contact.tsx";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} /> {/* Trang chủ */}
        <Route path="/contact" element={<Contact/>} /> {/* Trang liên hệ*/}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
