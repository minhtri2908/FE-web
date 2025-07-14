const aboutData = {
  avatar: "/images/IMG_9261-3.jpg",
  name: "Tri Pham",
  title: "Fullstack Developer & Photographer",
  bio: "As a Frontend Developer and Freelancer Photographer in Vietnam, I don’t just build websites — I design experiences and tell stories through both code and camera.",
};
const Contact = () => {
  return (
    <div className="bg-[#fafafa] py-20 px-6  md:px-12 lg:px-20 flex-1 flex flex-col w-full ">
      <section className="text-center my-10 " id="#contact">
        <div className="flex flex-col md:flex-row items-center gap-10 sm:px-6">
          {/* Left: Text */}
          <div className="flex-1 text-left md:text-left space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold">
              Get In Touch<span className="text-[#8b49d8]">.</span>
            </h1>
            <p className="text-sm sm:text-2xl text-gray-500 px-2 sm:px-0">
              Looking to partner or work together? Reach out through the form
              and I'll get back to you in the next 48 hours.
            </p>
            <div className="flex items-center gap-2 text-[#6b7280] text-lg">
              <div className=" border border-[#6b7280] rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>

              <span>minhtri.pmt2023@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-[#6b7280] text-lg">
              <div className=" border border-[#6b7280] rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </div>

              <span>+84 356 333 070</span>
            </div>
          </div>

          {/* Right: Avatar */}
          <div className="flex-1 flex justify-end">
            <div className="w-64 sm:w-52 sm:h-52 md:w-[30rem] md:h-[30rem] border border-[#8b49d8] rounded-full overflow-hidden flex items-center justify-center shadow-md p-10">
              <img
                src={aboutData.avatar}
                alt="Avatar"
                className="w-full h-full object-cover object-center rounded-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
