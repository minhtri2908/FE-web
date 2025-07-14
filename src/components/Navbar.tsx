import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2"; // hamburger & close

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }, // thêm vào menu mobile luôn
];

export default function Navbar() {
  const location = useLocation();
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // toggle hamburger
  const commandText = "TriMinhPham";

  useEffect(() => {
    if (index < commandText.length) {
      const timeoutId = setTimeout(() => {
        setText((prev) => prev + commandText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [index]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 px-4 md:px-12 lg:px-20 z-10 h-20 backdrop-blur-sm">
      <div className="flex items-center justify-between h-full w-full">
        {/* Left: Logo */}
        <div className="justify-self-start">
          <a
            href="/"
            className="font-mono font-bold text-lg text-black px-2 py-1 rounded-md"
          >
            <span className="text-green-400">{">"}</span> {text}
            <span className={cursorVisible ? "text-green-400" : "invisible"}>
              |
            </span>
          </a>
        </div>

        {/* Center: Nav (desktop only) */}
        <nav className="hidden md:flex justify-center gap-8 items-center text-lg font-semibold">
          {links.slice(0, 3).map((link) => {
            const isActive =
              location.pathname === link.href || location.hash === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`hover:text-[#8b49d8] ${
                  isActive ? "text-[#8b49d8]" : ""
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Contact icon (desktop) + Hamburger (mobile) */}
        <div className="justify-self-end flex items-center gap-4">
          {/* Desktop contact icon */}
          <a href="/contact" className="hover:text-pink-500 hidden md:inline">
            <HiOutlineChatBubbleOvalLeftEllipsis size={24} />
          </a>

          {/* Hamburger menu icon (mobile only) */}
          <button
            className="md:hidden text-3xl text-[#8b49d8] justify-self-end"
            onClick={toggleMenu}
          >
            {menuOpen ? <HiXMark /> : <HiBars3BottomRight />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md py-4 px-6 z-20 md:hidden">
          <nav className="flex flex-col gap-4 text-lg font-semibold">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)} // auto close
                className={`hover:text-[#8b49d8] ${
                  location.pathname === link.href || location.hash === link.href
                    ? "text-[#8b49d8]"
                    : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
