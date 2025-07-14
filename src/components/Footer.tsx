
const Footer = () => {
  return (
    <footer className="bg-[#fafafa] px-4 md:px-10 lg:px-20 py-4 flex flex-col md:flex-row items-center justify-between border-t border-[#ececec] gap-4 text-sm text-gray-500 my-2 ">
      <div>
        <a className="text-xl font-semibold">Interested in working together?</a>
        <div className="flex p-0 sm:text-base gap-4 items-center sm:justify-start text-xs pt-4">
          <a
            href="/contact"
            className="bg-[#8b49d8] text-white px-3 py-2 md:px-5 rounded-md font-semibold shadow-sm hover:bg-[#472f6c] transition"
          >
            Get In Touch
          </a>
          <a
            href="/"
            className="border-2 border-[#1c1325] text-[#1c1325] px-3 py-2  md:px-5 rounded-md font-semibold hover:bg-[#1c1325] hover:text-white transition"
          >
            Browse Projects
          </a>
        </div>
      </div>
      <div>
        <div>
          2025 Tan Son Hoa - HCMC.<br></br> Made with{" "}
          <span className="text-[#8b49d8] text-3xl">&#9829;</span> by{" "}
          <a
            href="/"
            rel="noreferrer"
            className="underline hover:text-[#8b49d8]"
          >
            Pham Minh Tri
          </a>
        </div>

        <div className="flex gap-4">
          <a href="https://github.com/minhtri2908" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-gray-500"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>

          <a href="https://www.facebook.com/minhtri.pham.2001/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-facebook-icon lucide-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/minh-trí-phạm-5b0753252"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-linkedin-icon lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
