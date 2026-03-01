import Windows from "/windows.png";
import Linux from "/linux.png";
import Html from "/html.png";
import Css from "/css.png";
import Tailwind from "/tailwind.png";
import Mui from "/mui.png";
import Js from "/js.png";
import Ts from "/ts.png";
import ReactImg from "/react.png";
import ReduxImg from "/redux.png";
import NextJs from "/nextjs.png";
import Node from "/nodejs.png";
import Jwt from "/jwt.png";
import Figma from "/figma.png";
import Axios from "/axios.png";
import Google from "/google.png";
import Github from "/github.png";
// import Code from "/code.png";
// import Bug from "/bug.png";
// import Web from "/web.png";
import Demo from "/external.png";
import Node_Package_Analyzer from "/npa.png";
import Quickblog from "/quickblog.png";
import Express from "/express.png";
import MongoDB from "/mongodb.png";
import Stripe from "/stripe.png";
import AWS from "/aws.png";
import Cloudrive from "/cloudrive.png";
import AI from "/ai.png";

function Content() {
  const skills = [
    { name: "Linux", icon: Linux },
    { name: "HTML 5", icon: Html },
    { name: "CSS 3", icon: Css },
    { name: "Tailwind CSS", icon: Tailwind },
    { name: "Material UI", icon: Mui },
    { name: "JavaScript", icon: Js },
    { name: "TypeScript", icon: Ts },
    { name: "React.Js", icon: ReactImg },
    { name: "Redux", icon: ReduxImg },
    { name: "Next.js", icon: NextJs },
    { name: "Node.js", icon: Node },
    { name: "Axios", icon: Axios },
    { name: "Express.js", icon: Express },
    { name: "MongoDB", icon: MongoDB },
    { name: "Github", icon: Github },
    { name: "Figma", icon: Figma },
    { name: "JWT Auth", icon: Jwt },
    { name: "Google OAuth", icon: Google },
    { name: "AI Integration", icon: AI },
    { name: "Payment", icon: Stripe },
    { name: "S3", icon: AWS },
  ];

  return (
    <main className="flex flex-col text-white">
      {/* Intro Section */}
      <section className="flex flex-col mb-12 md:mb-16">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Ajinkya Deshmukh
          </h1>

          <h2 className="text-lg sm:text-xl font-bold text-purecyan mt-3 sm:mt-4">
            FRONTEND DEVELOPER | REACT SPECIALIST
          </h2>

          {/* Resume Button */}
          <div className="mt-5">
            <a
              href=" /ad-portfolio/ajinkya_deshmukh_frontend_engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-purecyan text-purecyan px-5 py-2 rounded-lg text-sm font-semibold hover:bg-purecyan hover:text-black transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </header>

        <div className="mt-6 text-sm sm:text-base leading-relaxed space-y-5 max-w-3xl">
          <p>
            I’m a <span className="font-semibold">front-end specialist</span>{" "}
            with expertise in <span className="font-semibold">React.js</span>{" "}
            and its modern ecosystem, including{" "}
            <span className="font-semibold">Next.js</span>,{" "}
            <span className="font-semibold">Tailwind CSS</span>, and more. I
            build clean, responsive, and high-performance interfaces that turn
            complex product requirements into intuitive, user-friendly digital
            experiences.
          </p>

          <p>
            My core focus is{" "}
            <span className="font-semibold">
              scalable and maintainable front-end architecture
            </span>
            , with a strong emphasis on{" "}
            <span className="font-semibold">performance</span>,{" "}
            <span className="font-semibold">accessibility</span>, and{" "}
            <span className="font-semibold">pixel-perfect implementation</span>.
            I pay close attention to details that elevate usability and ensure
            consistency across devices and browsers.
          </p>

          <p>
            My goal is to deliver front-end solutions that are visually refined,
            highly interactive, and easy to maintain—creating meaningful user
            experiences while supporting long-term product growth.
          </p>
        </div>

      </section>

      {/* Skills Section */}
      <section id="Skills" className="mb-12 md:mb-16">
        <h3 className="text-xl sm:text-2xl font-semibold text-purecyan mb-8">
          PRIMARY TECHNOLOGIES
        </h3>

        <div
          className="grid gap-y-10 gap-x-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))" }}
        >
          {skills.map((skill, index) => (
            <article
              key={index}
              className="flex flex-col items-center space-y-2"
            >
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <span className="text-xs sm:text-sm text-center">
                {skill.name}
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* Services Section */}
      {/* <section id="Services" className="mb-12 md:mb-16 overflow-hidden">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">DELIVERABLES</h1>
          <h2 className="text-lg sm:text-xl font-bold text-purecyan mt-3 sm:mt-4">
            WHAT I CAN DO FOR YOU
          </h2>
        </header>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: Code,
              title: ["Web", "Development"],
              desc: [
                "Build custom static or dynamic web application",
                "API Integration",
                "Performance optimization",
              ],
            },
            {
              icon: Bug,
              title: ["Bug", "Fixes"],
              desc: [
                "Identify and fix critical bugs across frontend.",
                "Ensure smooth performance with thorough testing.",
                "Resolve UI/UX glitches for seamless user experience",
              ],
            },
            {
              icon: Web,
              title: ["UI/UX", "Figma Design"],
              desc: [
                "Create user centric UI/UX design",
                "Create prototype to demonstrate app flow.",
                "Rewamp & Optimize existing UI/UX design.",
              ],
            },
          ].map((service, i) => (
            <div key={i} className="py-6 px-2 sm:px-3">
              <img src={service.icon} className="w-8 h-8 mb-2" />
              <h3 className="text-xl font-semibold text-white leading-tight mb-2">
                {service.title.map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
              </h3>
              <div className="text-sm leading-relaxed text-gray-300 space-y-1 flex flex-col">
                {service.desc.map((d, j) => (
                  <span key={j}>{d}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Projects Section */}
      <section id="Projects" className="mb-12 md:mb-16 overflow-hidden">
        <header>
          {/* <h1 className="text-3xl sm:text-4xl font-bold">PROJECTS</h1> */}
          <h2 className="text-lg sm:text-xl font-bold text-purecyan mt-3 sm:mt-4">
            WORK SAMPLES
          </h2>
        </header>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Cloudrive - File Sharing App",
              link: "https://www.cloudriv.com/",
              img: Cloudrive,
            },
            {
              title: "QuickBlog - Blogging Platform",
              link: "https://blogging-template-one.vercel.app/login",
              img: Quickblog,
            }
          ].map((item, i) => (
            <div key={i}>
              <div className="w-full aspect-[16/9] overflow-hidden bg-white/5">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-center mt-3 sm:mt-4">
                <span className="text-sm sm:text-base">{item.title}</span>
                <div className="flex gap-4 items-center">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img src={Demo} alt="Demo" className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="Contact">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">Contact</h1>
          <h2 className="text-lg sm:text-xl font-bold text-purecyan mt-3 sm:mt-4">
            LET'S CONNECT
          </h2>
        </header>

        <div className="mb-16 mt-8 p-6 sm:p-10 border border-purecyan/10 rounded-2xl font-bold space-y-3 sm:space-y-4 ">
          <p className="text-xl sm:text-3xl">Ajinkya Deshmukh</p>
          <p className="text-md sm:text-lg text-purecyan">
            Web Developer | Freelancer
          </p>

          <div className="flex flex-col gap-4 pt-4 text-sm sm:text-base">
            {[
              { label: "Email", value: "deshmukhasb@gmail.com" },
              { label: "Phone", value: "+91-9730664391" },
              { label: "Location", value: "Nagpur, Maharashtra, India" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-wrap gap-x-4 w-full">
                <p className="text-purecyan w-[120px] shrink-0">{item.label}</p>
                <p className="text-white break-words overflow-hidden min-w-0">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/*         <div className="text-black flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4">
            <input
              type="text"
              placeholder="Enter Name"
              className="text-white w-full sm:w-1/2 p-3 rounded-lg border border-white/10 bg-content focus:outline-none focus:border-purecyan"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="text-white w-full sm:w-1/2 p-3 rounded-lg border border-white/10 bg-content focus:outline-none focus:border-purecyan"
            />
          </div>

          <textarea
            placeholder="Write Your Query"
            className="text-white p-3 sm:p-4 w-full h-60 resize-none rounded-lg border border-white/10 bg-content focus:outline-none focus:border-purecyan"
          />

          <div className="flex justify-end mt-2">
            <button className="mb-8 sm:mb-0 border border-purecyan text-white font-bold px-4 py-2 w-48 rounded-lg hover:bg-purecyan hover:text-black transition">
              Send
            </button>
          </div>
        </div> */}
      </section>
    </main>
  );
}

export default Content;
