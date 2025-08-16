import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TextShpere from "../components/TextShpere";

const AchievementsTable = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  const achievements = [
    {
      year: "2025",
      title: (
        <a
          href="https://www.linkedin.com/posts/gandhamkumarnslprakash_globalaibootcamp2025-aicommunity-artificialintelligence-activity-7302481659105361921-KdPf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFo1NHwBCv-ZxoBo84TQb1G0-yLAYvroscE"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 "
        >
          Global AI Summit at Microsoft Campus
        </a>
      ),
      description:
        "Gained hands-on exposure to cutting-edge AI technologies, including Generative AI, Copilot Studio, and real-time analytics. Engaged with industry leaders and explored real-world applications, enhancing my understanding of AI-driven innovation and product strategy.",
      technologies: [
        "Generative AI",
        "Microsoft Copilot Studio",
        "Prompt Engineering",
        "AI Chatbots",
      ],
    },

    {
      year: "2025",
      title: "Solved 300+ Coding Problems Across Platforms",
      description:
        "Solved over 300 problems across platforms like LeetCode, HackerRank, and GFG—focusing on data structures, algorithms, and competitive programming to build strong problem-solving foundations.",
      technologies: ["Python", "C++", "Java", "Problem Solving"],
    },

    {
      year: "2024",
      title: "Academic Excellence Recognition",
      description:
        "Honored by my college(VRSEC) with a scholarship and formal appreciation for consistently excelling in academics. This recognition highlights my commitment to academic excellence, strong work ethic, and top-ranking performance among peers.",
      technologies: [],
    },
    {
      year: "2022",
      title: "AP ECET – State Rank 24",
      description:
        "Secured 24th rank in the Andhra Pradesh Engineering Common Entrance Test (AP ECET), a competitive state-level examination for diploma holders seeking lateral entry into engineering programs.",

      technologies: [],
    },
  ];
  const videoData = [
    // {
    //   video:
    //     "https://res.cloudinary.com/dyny7wc0n/video/upload/v1731751142/Untitled_design_3_emrfn6.mp4",
    //   title: "3D Portfolio",
    //   description:
    //     "I learned how to integrate and maintain 3D models in a website, enhancing interactivity and user engagement. This project helped me understand the complexities of rendering 3D assets and optimizing their performance for seamless user experiences.",
    //   techStack: ["React", "Spline", "Tailwind CSS"],
    //   link: "https://github.com/AjayDattu/portfolio.git",
    // },

    {
      video:
        "https://res.cloudinary.com/dyny7wc0n/video/upload/v1731751165/Untitled_design_4_g60jom.mp4",
      title: "ShopIt Ecommerce",
      description:
        "Developed a full-stack e-commerce platform with a seamless and responsive user interface. This project taught me how to handle state management with Redux, implement secure user authentication, and design intuitive layouts for better user experiences.",
      techStack: ["MERN", "Redux", "Ant Design", "TailwindCSS"],
      // link: "https://www.shopitworld.in/",
    },

    {
      video:
        "https://res.cloudinary.com/dyny7wc0n/video/upload/v1731750106/xbrmgcrdbzucxcatqd3l.mp4",
      title: "Temp-Pad",
      description:
        "Built a secure file-sharing application that allows users to share files without requiring login credentials. Through this project, I gained insights into API integration, secure file handling, and maintaining user privacy while ensuring a smooth workflow.",
      techStack: ["React", "Express.js", "Tailwind CSS"],
      link: "https://github.com/gandhamprakashtech/temppad",
    },

    {
      video:
        "https://res.cloudinary.com/dqhrbaeqk/video/upload/v1750158409/a2g7pfd9yitvtcz24j64.mp4",
      title: "AttedanceTracker",
      description:
        "Designed and implemented an Attendance Tracker using Python and OpenCV that automates student check-ins through facial recognition. Developed a user-friendly admin interface with Tkinter to manage user registration and attendance logs securely, all without the need for manual input.",
      techStack: ["Python", "OpenCV", "Cascading Styles"],
      link: "https://github.com/gandhamprakashtech/AttendanceTracker",
    },

    {
      video:
        "https://res.cloudinary.com/dqhrbaeqk/video/upload/p880ngqat7zlc1b5ktm9.mp4",
      title: "Note-Locker",
      description:
        "Developed NotesLocker, a secure and user-friendly note-taking web application using HTML, CSS (with Bootstrap), and vanilla JavaScript. Implemented localStorage for client-side data management, enabling users to add, search, and delete notes with real-time updates. Integrated password protection for individual notes and timestamping for each entry — all without relying on any backend or external libraries.",
      techStack: [],
      link: "https://github.com/gandhamprakashtech/NoteLocker",
    },

    {
      video:
        "https://res.cloudinary.com/dqhrbaeqk/video/upload/ar_16:9,c_pad,b_black/ipnm4aslw7bobysrvy76.mp4",
      title:
        "Stumart: Campus Stationery Exchange Facilitating Student Collaboration",
      description:
        "Developed a cross-platform mobile application with React Native and Firebase, facilitating real-time resource sharing for 1000+ students across campus departments. Integrated real-time data synchronization, secure user authentication, and a scalable backend architecture to enhance usability and performance.",
      techStack: ["React Navtive", "Firebase"],
    },

    {
      video: "",
      title:
        "Advanced Satellite-Based Detection System for Comprehensive Airport Facility Identification",
      description:
        "Development of an airport facility detection project in collaboration with ISRO and ADRIN, using the YOLOv8 algorithm to deliver a 20% improvement in airport operational efficiency. Engineered a machine learning pipeline using Python and remote sensing data to detect critical airport infrastructure with 95% accuracy, exceeding initial project goals by 15%",
      techStack: ["Python", "YOLOv8 ML algorithm"],
    },

    // {
    //   video:
    //     "https://res.cloudinary.com/dyny7wc0n/video/upload/v1731752164/Untitled_design_6_ihgzn9.mp4",
    //   title: "Piclingo Translation",
    //   description:
    //     "Worked on a project that uses optical character recognition (OCR) to extract and translate text from images. This project enhanced my understanding of OCR, translation APIs, and creating accessible tools for better communication across languages.",
    //   techStack: ["React", "Tesseract.js", "Tailwind CSS"],
    //   link: "https://github.com/AjayDattu/PicLingo.git",
    // },

    // {
    //   video:
    //     "https://res.cloudinary.com/dyny7wc0n/video/upload/v1731753485/Untitled_design_8_rlsds3.mp4",
    //   title: "Interactive Designs",
    //   description:
    //     "Explored interactive web design concepts to create engaging user experiences. This project deepened my knowledge of advanced CSS techniques and leveraging tools like Spline for creating visually captivating and user-friendly designs.",
    //   techStack: ["React", "Tailwind CSS", "Spline"],
    //   link: "https://github.com/AjayDattu/",
    // },

    // {
    //   video:
    //     "https://res.cloudinary.com/dyny7wc0n/video/upload/v1731753490/Untitled_design_9_npsrzp.mp4",
    //   title: "Notes App",
    //   description:
    //     "Developed a real-time note syncing application with customizable themes. I learned how to manage data persistence using MongoDB, set up backend APIs with Node.js, and implement responsive UIs for a seamless user experience.",
    //   techStack: ["React", "Node.js", "MongoDB"],
    //   link: "https://github.com/AjayDattu/notesapp1.git",
    // },

    // {
    //   video:
    //     "https://res.cloudinary.com/dyny7wc0n/video/upload/v1731750787/Untitled_design_2_dyhlx9.mp4",
    //   title: "Next.js Dashboard",
    //   description:
    //     "Built a high-performance dashboard application leveraging Next.js for server-side rendering. I learned how to optimize data fetching, improve application performance, and design dashboards with responsive layouts and minimalistic designs.",
    //   techStack: ["Next.js", "Tailwind CSS"],
    //   link: "https://github.com/AjayDattu/Neina-Previously-Nexorand-.git",
    // },

    // {
    //   video:
    //     "https://res.cloudinary.com/dyny7wc0n/video/upload/v1731751734/Untitled_design_5_ghfevt.mp4",
    //   title: "New Design Concepts",
    //   description:
    //     "Discovered unique web design techniques to make web applications more interactive and visually appealing. This project allowed me to experiment with advanced CSS, utilize Figma for prototyping, and create clean, modern UI designs.",
    //   techStack: ["React", "CSS", "Figma"],
    //   link: "https://github.com/AjayDattu/",
    // },
  ];

  const experience = [
    {
      year: "Feb 2025 - May 2025",
      title: "Frontend Developer Intern",
      description:
        "Worked as a Frontend Developer Intern at Axis Intelligence Inc, where I developed and optimized user interfaces using React.js and TypeScript. Contributed to building responsive, user-friendly components and translated design specifications into clean, maintainable code while collaborating with cross-functional teams to enhance overall UI/UX.",
      technologies: ["React", "TypeScript", "CSS", "HTML", "JavaScript", "Git"],
    },

    {
      year: "Jun 2024 - Sep 2024",
      title: "Assistant C/C++ Developer Virtual Internship",
      description:
        "Completed a Virtual Internship as a C/C++ Developer at Amaravathi Software Innovations Pvt. Ltd from June to July 2024. Assisted in writing and debugging C/C++ code to improve application stability and performance. Worked with the development team to implement new features, fix issues, and support overall project development within set timelines.",
      technologies: ["C++", "C", "Git"],
    },
    // {
    //   year: "2023",
    //   title: "Java Developer Intern",
    //   description:
    //     "Worked as a Java developer intern at Henotic Technologies, building Java-based backend services and APIs. Additionally, focused on frontend development using JavaFX and Java Swing. Developed a Sudoku game project, gaining hands-on experience in desktop application development. Utilized backtracking algorithms to implement the solution for the Sudoku problem, enhancing problem-solving and backend development skills.",
    //   technologies: ["Java", "JavaFX", "Java Swing", "Backtracking"],
    // },
  ];

  const education = [
    {
      year: "2022-2025",
      title: "BTech in Computer Science",
      institution: (
        <a
          href="https://www.vrsiddhartha.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 "
        >
          VR Siddhartha Engineering College
        </a>
      ),
      location: "Vijayawada, Andhra Pradesh",
    },

    {
      year: "2019-2022",
      title: "Diploma in Engineering",
      institution: (
        <a
          href="https://aanm-vvrsrpolytechnic.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 "
        >
          AANM and VVSRS Polytechnic
        </a>
      ),
      location: "Gudlavalleru, Andhra Pradesh",
    },
    {
      year: "2018-2019",
      title: "SSC",
      institution: "ZP High School",
      location: "Kanchadam, Andhra Pradesh",
    },
  ];

  const skills = [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Java",
    "MySQL",
    "Solidity",
    "Ethereum",
    "Blockchain",
    "Web3",
    "Git",
    "JavaScript",
    "HTML5",
    "Next",
    "Gsap",
    "CSS3",
    "Tailwind CSS",
    "Redux",
    "TypeScript",
    "Python",
    "PyQt5",
    "LeetCode",
    "Problem Solving",
  ];

  const publications = [
    {
      year: "2024",
      title: "Crop Recommendation Using Supervised Learning Techniques",
      link: "https://ieeexplore.ieee.org/document/10922060",
      journal:
        "2024 International Conference on Computing and Intelligent Reality Technologies (ICCIRT)",
      description:
        "This research compares Naive Bayes, SVM, and Random Forest algorithms for crop recommendation using soil and climate parameters, highlighting their effectiveness in improving precision agriculture.",
    },
    {
      year: "2025",
      title:
        "Efficient Detection of Runways, Taxiways, and Aprons in Commercial Airports Using YOLOv8 and High-Resolution Satellite Imagery",
      link: "https://ieeexplore.ieee.org/document/10969333",
      journal:
        "2025 3rd International Conference on Intelligent Systems, Advanced Computing and Communication (ISACC)",
      description:
        "This project leverages high-resolution satellite imagery and deep learning models like YOLOv8 and Faster R-CNN to accurately detect key airport facilities, enhancing infrastructure management and operational efficiency.",
    },
  ];

  return (
    <div className="h-full flex flex-col p-4 md:p-6 lg:p-10 space-y-16 backdrop-blur-md">
      {/* Education Section */}
      <div id="work" className="h-auto pt-8">
        <h1 className="text-3xl md:text-3xl lg:text-5xl font-light mt-12 mb-6 text-center text-white">
          Projects
        </h1>
        <div className="relative space-y-6 md:space-y-8 ">
          {videoData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row lg:items-start sm:items-center gap-6 md:gap-10 p-4 md:p-6 rounded-lg"
            >
              {/* Video Section */}
              <div className="w-full sm:w-1/2" data-aos="fade-right">
                <video
                  className="w-full rounded-lg"
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

              {/* Project Information Section */}
              <div
                className="flex flex-col space-y-1 md:space-y-2 w-full text-center sm:text-left"
                data-aos="fade-left"
              >
                <div className="text-lg md:text-2xl font-light text-white">
                  {project.title}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {project.description}
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  {project.techStack.join(", ")}
                </div>
                <a
                  className="text-xs md:text-sm text-gray-400"
                  href={project.link}
                >
                  Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="skills" className="h-auto pt-8">
        <h1
          className="text-3xl md:text-3xl lg:text-5xl font-light mt-12 mb-6 text-center text-white"
          data-aos="zoom-out-down"
        >
          Skills
        </h1>
        <div className="relative space-y-6 md:space-y-8" data-aos="fade-left">
          {/* <div className="flex flex-wrap gap-6 justify-center sm:justify-start p-20">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="bg-neutral-800 text-white text-xs md:text-sm px-5 py-3 rounded-full border-2 border-transparent transition-all duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:scale-110 hover:shadow-2xl"
        >
          {skill}
        </span>
      ))}

    </div> */}
          <TextShpere />
        </div>
      </div>

      <div id="edu" className="h-auto pt-8">
        <h1
          className="text-3xl md:text-3xl lg:text-5xl font-light mt-12 mb-6 text-center text-white"
          data-aos="zoom-out-down"
        >
          Education
        </h1>
        <div className="relative space-y-6 md:space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10 p-4 md:p-6 rounded-sm"
            >
              <div
                className="text-sm md:text-lg font-semibold text-neutral-600 w-full sm:text-center"
                data-aos="fade-right"
              >
                {edu.year}
              </div>
              <div
                className="flex flex-col space-y-1 md:space-y-2 w-full text-center sm:text-left"
                data-aos="fade-left"
              >
                <div className="text-lg md:text-2xl font-light text-white">
                  {edu.title}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {edu.institution}
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  {edu.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="Exp" className="h-auto pt-8 backdrop-blur-sm">
        <h1
          className="text-3xl md:text-3xl lg:text-5xl font-light mt-12 mb-6 text-center text-white"
          data-aos="zoom-out-down"
        >
          Experience
        </h1>
        <div className="space-y-6 md:space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10 p-4 md:p-6 rounded-lg"
            >
              <div
                className="text-sm md:text-lg font-semibold text-neutral-600 w-full sm:text-center"
                data-aos="fade-right"
              >
                {exp.year}
              </div>
              <div
                className="flex flex-col space-y-1 md:space-y-2 w-full text-center sm:text-left"
                data-aos="fade-left"
              >
                <div className="text-lg md:text-2xl font-light text-white">
                  {exp.title}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {exp.description}
                </div>
                {exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-neutral-700 text-blue-100 text-xs md:text-sm px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div id="Ach" className="h-auto pt-8 backdrop-blur-lg">
        <h1
          className="text-3xl md:text-3xl lg:text-5xl font-light mt-12 mb-6 text-center text-white"
          data-aos="zoom-out-down"
        >
          Achievements
        </h1>
        <div className="relative space-y-6 md:space-y-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10 p-4 md:p-6 rounded-lg"
            >
              <div
                className="text-sm md:text-lg font-semibold text-neutral-600 w-full sm:text-center"
                data-aos="fade-right"
              >
                {achievement.year}
              </div>
              <div
                className="flex flex-col space-y-1 md:space-y-2 w-full text-center sm:text-left"
                data-aos="fade-left"
              >
                <div className="text-lg md:text-2xl font-light text-white">
                  {achievement.title}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {achievement.description}
                </div>
                {achievement.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {achievement.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-neutral-700 text-blue-100 text-xs md:text-sm px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Publications Section */}
      <div id="publications" className="h-auto pt-8 backdrop-blur-lg">
        <h1
          className="text-3xl md:text-3xl lg:text-5xl font-light mt-12 mb-6 text-center text-white"
          data-aos="zoom-out-down"
        >
          Publications
        </h1>
        <div className="relative space-y-6 md:space-y-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10 p-4 md:p-6 rounded-lg"
            >
              <div
                className="text-sm md:text-lg font-semibold text-neutral-600 w-full sm:text-center"
                data-aos="fade-right"
              >
                {pub.year}
              </div>
              <div
                className="flex flex-col space-y-1 md:space-y-2 w-full text-center sm:text-left"
                data-aos="fade-left"
              >
                <div className="text-lg md:text-2xl font-light text-white">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500"
                  >
                    {pub.title}
                  </a>
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {pub.journal}
                </div>
                <div className="text-sm md:text-base text-gray-400">
                  {pub.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsTable;
