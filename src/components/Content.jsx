import Windows from "/windows.png";
import Linux from "/linux.png";
import Html from "/html.png";
import Css from "/css.png";
import Tailwind from "/tailwind.png";
import Js from "/js.png";
import Ts from "/ts.png";
import ReactImg from "/react.png";
import ReduxImg from "/redux.png";
import Router from "/reactrouter.png";
import NextJs from "/nextjs.png";
import Mongodb from "/mongodb.png";
import Express from "/express.png";
import Node from "/nodejs.png";
import Figma from "/figma.png";
import Axios from "/axios.png";
import Cors from "/cors.png";
import Github from "/github.png";
import Trello from "/trello.png";
import Docker from "/docker.png";
import Aws from "/aws.png";
import Code from "/code.png";
import Bug from "/bug.png";
import Web from "/web.png";
import Deploy from "/deployment.png";
import Project1 from "/project1.png";
import Repo from "/repo.png";

function Content() {
  const skills = [
    { name: "Windows", icon: Windows },
    { name: "Linux", icon: Linux },
    { name: "HTML 5", icon: Html },
    { name: "CSS 3", icon: Css },
    { name: "Tailwind CSS", icon: Tailwind },
    { name: "JavaScript", icon: Js },
    { name: "TypeScript", icon: Ts },
    { name: "React.Js", icon: ReactImg },
    { name: "Redux", icon: ReduxImg },
    { name: "React Router", icon: Router },
    { name: "Next.js", icon: NextJs },
    { name: "MongoDB", icon: Mongodb },
    { name: "Express", icon: Express },
    { name: "Node.js", icon: Node },
    { name: "Figma", icon: Figma },
    { name: "Axios", icon: Axios },
    { name: "Cors", icon: Cors },
    { name: "Github", icon: Github },
    { name: "Trello", icon: Trello },
    { name: "Docker", icon: Docker },
    { name: "AWS Cloud", icon: Aws },
  ];

  return (
    <main className="flex flex-col text-white min-h-[calc(100vh-128px)] px-4 sm:px-8 md:px-16 lg:px-32 py-16">
      {/* Intro Section */}
      <section className="flex flex-col mb-16" aria-labelledby="intro-heading">
        <header>
          <h1 id="intro-heading" className="text-3xl sm:text-4xl font-bold">
            Ajinkya Deshmukh
          </h1>
          <h2 className="text-lg sm:text-xl font-bold text-purecyan mt-2">
            MERN STACK DEVELOPER | FRONTEND EXPERTISE
          </h2>
        </header>

        <div className="mt-6 text-sm sm:text-base leading-relaxed space-y-4 max-w-3xl">
          <p>
            I'm a{" "}
            <span className="font-semibold">
              Frontend-Focused Web Developer
            </span>{" "}
            based in India, passionate about building elegant, responsive
            interfaces and full-stack applications using the{" "}
            <span className="font-semibold">MERN stack</span>.
          </p>
          <p>
            I specialize in crafting intuitive user experiences through
            attention to <span className="font-semibold">UI/UX design</span>,{" "}
            <span className="font-semibold">accessibility</span>, and{" "}
            <span className="font-semibold">performance optimization</span>. My
            focus lies in delivering polished frontends that feel smooth and
            scalable.
          </p>
          <p>
            Beyond frontend, I’m proficient in{" "}
            <span className="font-semibold">Node.js</span>,{" "}
            <span className="font-semibold">Express</span>, and{" "}
            <span className="font-semibold">MongoDB</span>, enabling me to build
            robust backend systems and APIs that integrate seamlessly with
            client-facing applications.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="Skills" className="mb-16" aria-labelledby="skills-heading">
        <h3
          id="skills-heading"
          className="text-xl sm:text-2xl font-semibold text-purecyan mb-8"
        >
          PRIMARY TECHNOLOGIES
        </h3>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-y-10 gap-x-6">
          {skills.map((skill, index) => (
            <article key={index} className="flex flex-col items-center">
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <span className="mt-2 text-xs sm:text-sm text-center">
                {skill.name}
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section
        id="Services"
        className="mb-16"
        aria-labelledby="services-heading"
      >
        <header>
          <h1 id="services-heading" className="text-3xl sm:text-4xl font-bold">
            Services
          </h1>
          <h2 className="text-lg sm:text-xl font-bold text-purecyan mt-2">
            WHAT I CAN DO FOR YOU
          </h2>
        </header>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="py-6">
            <img src={Code} className="w-8 h-8" />
            <h3 className="text-xl font-semibold mb-2 text-white leading-tight">
              <span className="block">Web</span>
              <span className="block">Development</span>
            </h3>

            <p className="text-sm leading-relaxed text-gray-300 space-y-2 flex flex-col">
              <span>Create custom landing page for your business.</span>
              <span>Custom full stack app as per your requirement.</span>
              <span>Integrate API with your existing app.</span>
            </p>
          </div>

          <div className="py-6">
            <img src={Bug} className="w-8 h-8" />
            <h3 className="text-xl font-semibold mb-2 text-white leading-tight">
              <span className="block">Bug</span>
              <span className="block">Fixes</span>
            </h3>

            <p className="text-sm leading-relaxed text-gray-300 space-y-2 flex flex-col">
              <span>
                Identify and fix critical bugs across frontend and backend.
              </span>
              <span>Ensure smooth performance with thorough testing.</span>
              <span>Resolve UI/UX glitches for seamless user experience.</span>
            </p>
          </div>

          <div className="py-6">
            <img src={Web} className="w-8 h-8" />
            <h3 className="text-xl font-semibold mb-2 text-white leading-tight">
              <span className="block">UI/UX</span>
              <span className="block">Figma Design</span>
            </h3>

            <p className="text-sm leading-relaxed text-gray-300 space-y-2 flex flex-col">
              <span>Create user centric UI/UX design.</span>
              <span>Create prototype to demonstrate app flow.</span>
              <span>Rewamp & Optimize existing UI/UX design.</span>
            </p>
          </div>

          <div className="py-6">
            <img src={Deploy} className="w-8 h-8" />
            <h3 className="text-xl font-semibold mb-2 text-white leading-tight">
              <span className="block">App</span>
              <span className="block">Deployment</span>
            </h3>

            <p className="text-sm leading-relaxed text-gray-300 space-y-2 flex flex-col">
              <span>End-to-end deployment of mern stack web app on aws.</span>
              <span>Troobleshoot & fix deployment issues.</span>
              <span>Configure domain on aws cloud.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="Projects"
        className="mb-16"
        aria-labelledby="portfolio-heading"
      >
        <header>
          <h1 id="services-heading" className="text-3xl sm:text-4xl font-bold">
            Projects
          </h1>
          <h2 className="text-lg sm:text-xl font-bold text-purecyan mt-2">
            PROOF OF WORK
          </h2>
        </header>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <img src={Project1} alt="Project" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "8px",
              }}
            >
              <span>Event Participation Full Stack App</span>
              <img
                src={Repo}
                alt="Icon"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          </div>
          <div>
            <img src={Project1} alt="Project" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "8px",
              }}
            >
              <span>AI Assistant</span>
              <img
                src={Repo}
                alt="Icon"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          </div>
          <div>
            <img src={Project1} alt="Project" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "8px",
              }}
            >
              <span>Portfolio Template</span>
              <img
                src={Repo}
                alt="Icon"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="Contact" className="" aria-labelledby="portfolio-heading">
        <header>
          <h1 id="services-heading" className="text-3xl sm:text-4xl font-bold">
            Contact
          </h1>
          <h2 className="text-lg sm:text-xl font-bold text-purecyan mt-2">
            LET'S CONNECT
          </h2>
        </header>
        <div className="mb-16 mt-6 p-16 font-bold border border-white rounded-2xl">
          <p className="text-xl sm:text-3xl font-bold">Ajinkya Deshmukh</p>
          <p className="text-md sm:text-lg font-bold text-purecyan mt-2">
            Web Developer | Freelancer
          </p>
          <div className="grid grid-cols-[20%_80%] gap-y-4 pt-6">
            <p className="text-purecyan">Email</p>
            <p className="text-white">ajinkya.deshmukh.webdev@gmail.com</p>

            <p className="text-purecyan">Phone</p>
            <p className="text-white">+91-9371995977</p>

            <p className="text-purecyan">Residence</p>
            <p className="text-white">India</p>
          </div>
        </div>
        <div className="text-black flex flex-col gap-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter Name"
              className="w-1/2 p-2 rounded-lg border border-white/10 bg-content focus:outline-none focus:border-purecyan"
            />
            <input
              type="text"
              placeholder="Enter Email"
              className="w-1/2 p-2 rounded-lg border border-white/10 bg-content focus:outline-none focus:border-purecyan"
            />
          </div>

          <textarea
            placeholder="Write Your Query"
            className="p-2 w-full h-60 resize-none rounded-lg border border-white/10 bg-content focus:outline-none focus:border-purecyan"
          />

          <div className="flex justify-end">
            <button className="border border-purecyan text-white p-2 w-48 rounded-lg">
              Send
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Content;
