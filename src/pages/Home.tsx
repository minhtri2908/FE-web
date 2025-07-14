import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const aboutData = {
  avatar: "/images/IMG_9261-3.jpg",
  name: "Tri Pham",
  title: "Fullstack Developer & Photographer",
  bio: "As a Frontend Developer and Freelancer Photographer in Vietnam, I don’t just build websites — I design experiences and tell stories through both code and camera.",
};
interface Position {
  title: string;
  start: string;   // hoặc Date
  end: string;     // hoặc Date
}
interface ExperienceItem {
  company: string;
  positions: Position[];
  desc: string[];
}
interface Skills {
  design: string[];
  frontend: string[];
  backend: string[];
  soft: string[];
}
const experience = [
  {
    company: "ClassIn’s Company",
    positions: [
      {
        title: "Technical Solutions Intern",
        start: "9/2021",
        end: "4/2024",
      },
    ],
    desc: [
      "Taking care and supporting customers using ClassIn’s App and dashboard system through Zalo groups",
      "Create articles on how to use the app and dashboard using Wordpress",
      "Make a video tutorial on how to use the ClassIn application using Camtasia software, Paint and post it to https://www.youtube.com/ @classinvietnam",
    ],
  },
  {
    company: "DOTB Software Co., Ltd",
    positions: [
      {
        title: "PHP Developer (Front-end)",
        start: "8/2023",
        end: "11/2023",
      },
    ],
    desc: [
      "Edit DOTB Edu CRM system interface.",
      "Support taking profile pictures for the website.",
      "Participate in website design using figma.",
      "Build website homepage using WordPress",
    ],
  },
];

const skills: Skills = {
  design: ["UI/UX Design", "Responsive Design", "User Research", "Figma"],
  frontend: ["Javascript", "ReactJS", "Tailwindcss", "Bootstrap"],
  backend: ["NodeJs", "MongoDB", "ExpressJS", "Vercel", "PostgreSQL"],
  soft: [
    "Effective communication",
    "Collaboration",
    "Commitment",
    "Leadership",
  ],
};

function Home() {
  // const [activeCompany, setActiveCompany] = useState(experience[0]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeCompany: ExperienceItem = experience[activeIndex];

  const next = () => {
    if (activeIndex < experience.length - 1) setActiveIndex((i) => i + 1);
  };

  const prev = () => {
    if (activeIndex > 0) setActiveIndex((i) => i - 1);
  };

  return (
    <div className="bg-[#fafafa] text-[#472f6c] min-h-screen flex flex-col">
      <main className="pt-20 px-6  md:px-12 lg:px-20 flex-1 flex flex-col w-full ">
        {/* Hero Section */}
        <section className="text-center my-10 " id="home">
          <div className="flex flex-col md:flex-row items-center gap-10 sm:px-6">
            {/* Left: Text */}
            <div className="flex-1 text-left md:text-left space-y-4">
              <h1 className="text-lg sm:text-2xl font-normal">
                Hey, I'm {aboutData.name}
                {""}
                <img
                  src="https://img.icons8.com/?size=100&id=1H52efUsDX7A&format=png&color=000000"
                  alt="Hello hand icon"
                  className="inline-block w-7 h-7 ml-2"
                />
              </h1>

              <h2 className="font-bold text-3xl sm:text-6xl md:text-[90px] ">
                <span className="bg-gradient-to-r from-[#a555a5] to-[#d22a2a]  text-transparent bg-clip-text">
                  Front
                </span>
                {"end Developer "}&{" "} 
                <span className="bg-gradient-to-r from-[#ff46e3] to-[#2a4bd2] italic text-transparent bg-clip-text">Photographer</span>
              </h2>
              <p className="text-sm sm:text-lg text-gray-500 px-2 sm:px-0">
                {aboutData.bio}
              </p>
              <div className="flex p-0 sm:text-base gap-4 items-center sm:justify-start text-xs ">
                <a
                  href="/contact"
                  className="bg-[#8b49d8] text-white px-3 py-2 md:px-5 rounded-md font-semibold shadow-sm hover:bg-[#472f6c] transition"
                >
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className="border-2 border-[#1c1325] text-[#1c1325] px-3 py-2  md:px-5 rounded-md font-semibold hover:bg-[#1c1325] hover:text-white transition"
                >
                  Browse Projects
                </a>
              </div>
            </div>

            {/* Right: Avatar */}
            <div className="flex-1 flex justify-end">
              <div className="w-64 sm:w-52 sm:h-52 md:w-auto md:h-[30rem] border border-[#8b49d8] rounded-full overflow-hidden flex items-center justify-center shadow-md p-10">
                <img
                  src={aboutData.avatar}
                  alt="Avatar"
                  className="w-full h-full object-cover object-center rounded-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}

        <section id="experience" className="mt-24">
          <h3 className="uppercase text-[#8b49d8] font-bold mb-8 tracking-wide text-5xl">
            Experience.
          </h3>
          <div className="flex flex-col md:flex-row gap-8">
            {/* LEFT: Company List */}
            <div className="hidden md:flex md:flex-col gap-4 md:basis-1/4 text-2xl font-semibold">
              {experience.map((exp, idx) => (
                <button
                  key={exp.company}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full block whitespace-nowrap text-left border-l-4 pl-4 py-1 transition-all ${
                    activeCompany.company === exp.company
                      ? "border-[#8b49d8] text-[#8b49d8] bg-[#f6f4fb]"
                      : "border-transparent text-gray-600 hover:text-[#8b49d8]"
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
            {/* RIGHT: Experience Details */}
            <AnimatePresence mode="wait">
              <motion.ul
                key={activeCompany.company} // Re-trigger lại toàn bộ danh sách
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: {},
                  visible: {},
                }}
                className="list-none mt-4 space-y-3 text-gray-700 text-lg w-full"
              >
                {/* Positions List */}
                {activeCompany.positions.map((pos, idx) => (
                  <div key={idx} className="mb-4">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + idx * 0.1, duration: 0.4 }}
                      className="font-bold text-[#472f6c] text-xl"
                    >
                      {pos.title}
                      <span className="text-[#8b49d8]">
                        {" "}
                        @ {activeCompany.company}
                      </span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + idx * 0.1, duration: 0.4 }}
                      className="text-sm text-gray-400 mt-1"
                    >
                      {pos.start} - {pos.end}
                    </motion.div>
                  </div>
                ))}

                {/* Description List */}
                <ul className="list-none mt-10 md:mt-40 space-y-2 text-gray-700 text-lg">
                  {activeCompany.desc.map((d, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1, duration: 0.3 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-[#8b49d8] mt-[2px]">✔️</span>
                      <span>{d}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.ul>
            </AnimatePresence>
          </div>
          {/* Arrow controls for mobile */}
          <div className="flex justify-between md:hidden mt-4 px-2">
            <button
              onClick={prev}
              className={`text-3xl text-[#8b49d8] ${activeIndex === 0 ? "invisible" : ""}`}
            >
              ←
            </button>
            <button
              onClick={next}
              className={`text-3xl text-[#8b49d8] ${activeIndex === experience.length - 1 ? "invisible" : ""}`}
            >
              →
            </button>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mt-24">
          <h3 className="uppercase text-[#8b49d8] font-bold mb-8 tracking-wide text-5xl">
            Skills.
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="mb-2 font-semibold">Web Design</h4>
              <ul className="text-gray-500 text-sm">
                {skills.design.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Frontend</h4>
              <ul className="text-gray-500 text-sm">
                {skills.frontend.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Backend</h4>
              <ul className="text-gray-500 text-sm">
                {skills.backend.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Soft Skills</h4>
              <ul className="text-gray-500 text-sm">
                {skills.soft.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
