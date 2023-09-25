import React, { useRef, useState, useEffect } from "react"
import { BiGithub } from "../assets/icons/GithubIcon"
import { MaterialSymbolsCallSharp } from "../assets/icons/CallIcon"
import { SimpleIconsGmail } from "../assets/icons/GmailIcon"
import { JamInstagram } from "../assets/icons/InstagramIcon"
import { FaceBook } from "../assets/icons/FaceBook"
import { LogosVisualStudioCode } from "../assets/icons/LogosVisualStudioCode"
import { DeviconIntellij } from "../assets/icons/DeviconIntellij"
import { SkillIconsMysqlDark } from "../assets/icons/SkillIconsMysqlDark"
import { DeviconFigma } from "../assets/icons/DeviconFigma"
import { LogosPostmanIcon } from "../assets/icons/LogosPostmanIcon"
import { DeviconPutty } from "../assets/icons/DeviconPutty"
import { TeenyiconsGitSolid } from "../assets/icons/TeenyiconsGitSolid"
import { GameIconsSharkFin } from "../assets/icons/GameIconsSharkFin"
import { GameIconsGuitarHead } from "../assets/icons/GameIconsGuitarHead"
import { RightArrow } from "../assets/icons/RightArrow"
import { DownArrow } from "../assets/icons/DownArrow"
import { LeftArrow } from "../assets/icons/LeftArrow"
import { UpArrow } from "../assets/icons/UpArrow"
import { HomeIcon } from "../assets/icons/HomeIcon"
import { BirthIcon } from "../assets/icons/BirthIcon"
import { PersonIcon } from "../assets/icons/PersonIcon"
import { AIIcon } from "../assets/icons/AIIcon"
import { ArtIcon } from "../assets/icons/ArtIcon"
import { WebIcon } from "../assets/icons/WebIcon"
import { AppIcon } from "../assets/icons/AppIcon"
import { GameIcon } from "../assets/icons/GameIcon"
import { DesignIcon } from "../assets/icons/DesignIcon"
import { CameraIcon } from "../assets/icons/CameraIcon"
import { useInView } from "react-intersection-observer"
import "animate.css"
import { Link, Outlet } from "react-router-dom"
function Home() {
  const toolsElment = useRef(null)
  const aboutElement = useRef(null)
  const experienceElement = useRef(null)
  const activityElement = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [animate, setAnimate] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the element comes into view
    threshold: 0.1, // Percentage of the element's visibility needed to trigger
  })
  if (inView && !animate) {
    setAnimate(true)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    })
  }

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToElement = (elementRef) => {
    if (elementRef && elementRef.current) {
      elementRef.current.scrollIntoView({
        behavior: "smooth", // Add smooth scrolling animation
        block: "start", // Scroll to the top of the element
      })
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <div className="w-full">
      <div>
        <button
          className={`scroll-to-top hover:fill-white ${
            isVisible ? "visible" : ""
          }`}
          onClick={scrollToTop}
        >
          <UpArrow className="text-black" />
        </button>
      </div>
      <div className="w-full h-screen bg-gray-100 flex flex-col items-end justify-center ">
        <div className="navbar absolute top-5 right-12 space-x-10 md:block hidden">
          <button>Home</button>
          <button onClick={() => scrollToElement(aboutElement)}>
            About me
          </button>
          <button onClick={() => scrollToElement(toolsElment)}>Tools</button>
          <button onClick={() => scrollToElement(experienceElement)}>
            Experience
          </button>
          <button onClick={() => scrollToElement(activityElement)}>
            Activity
          </button>
        </div>
        <div className="w-full text-black flex justify-center items-end md:text-9xl text-6xl flex-col p-12">
          <div className="animate__animated animate__fadeIn text-end space-y-8">
            <h1>HELLO</h1>
            <h1>I'M CHONTICHA</h1>
          </div>

          <div className="flex gap-2 text-xl mt-10">
            <button
              className="text-xl hover:bg-black hover:text-white duration-500 text-black px-3 py-2 mr-3 animate-bounce rounded-xl border-black border"
              onClick={() => scrollToElement(aboutElement)}
            >
              Say Hello!
              <DownArrow className="inline-block ml-2" />
            </button>
          </div>
        </div>
        <div className="w-full text-black flex justify-center items-start text-xl flex-col p-12 absolute bottom-0">
          <h2>Welcome to My</h2>
          <h2>Portfolio</h2>
          <h2>Show case;</h2>
        </div>
      </div>
      <div className="w-full">
        <div className="md:max-w-7xl max-w-9xl mx-auto pt-10 p-20" ref={aboutElement}>
          <h1 className="text-3xl font-semibold ">About me</h1>
          <div className="text-start md:w-3/5 mt-14">
            <h2 className="text-xl font-semibold py-3">
              Hi there, I'm Chonticha
            </h2>
            <p>
              I am currently enrolled in the School of Information Technology at
              King Mongkut's University of Technology Thonburi. I am interested
              in creating a website. I enjoy writing code and seeing the results
              as a website for others to use. So, I am interested in working as
              a frontend developer or a full stack developer.
            </p>
          </div>
        </div>
        <div className="gradient text-white py-4 w-full">
          <div className=" px-20 md:flex md:items-center md:justify-between gap-5  md:max-w-7xl max-w-9xl mx-auto md:flex-row grid grid-cols-1">
            <div className="flex items-center">
              <MaterialSymbolsCallSharp className="inline-block mr-2" />
              <a href="tel:+66925996241">092-599-6241</a>
            </div>
            <div className="flex items-center">
              <SimpleIconsGmail className="inline-block mr-2" />
              <a href="mailto:chonticha.licha@gmail.com">
                chonticha.licha@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <BiGithub className="inline-block mr-2" />
              <a href="https://github.com/sealbb">sealbb</a>
            </div>
            <div className="flex items-center">
              <JamInstagram className="inline-block mr-2" />
              <a href="https://www.instagram.com/sealb.b/">sealb.b</a>
            </div>
          </div>
        </div>
        <div className="md:max-w-7xl max-w-9xl mx-auto text-start pt-10 px-20">
          <h1 className="text-xl font-semibold ">Education</h1>
          <div className="flex md:justify-center justify-start mt-5 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M128 98a30 30 0 1 0 30 30a30 30 0 0 0-30-30Zm0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18Z"
              />
            </svg>
          </div>
          <div className="md:grid md:grid-cols-2 w-full">
            <div className=" border-r-2 text-right px-8"></div>
            <div className="border-l-2 ml-4 md:ml-0 md:border-l-0 px-8">
              <p>2015-2021</p>
              <p>High School</p>
              <p>Suksanari School</p>
            </div>
          </div>
          <div className="flex md:justify-center justify-start mt-5 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M128 98a30 30 0 1 0 30 30a30 30 0 0 0-30-30Zm0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18Z"
              />
            </svg>
          </div>
          <div className="grid md:grid-cols-2 w-full mt-5">
            <div className=" md:border-r-2 text-right px-8"></div>
            <div className="border-l-2 ml-4 md:ml-0 md:border-l-0 px-8">
              <p>2021-Present</p>
              <p>School of Information Technology (SIT)</p>
              <p>King Mongkut's University of Technology Thonburi</p>
            </div>
          </div>
        </div>
        <div className="md:max-w-7xl max-w-9xl mx-auto text-start pt-10 px-20">
          <div className=" gap-8 my-20">
            <div>
              <h1 className="text-xl font-semibold text-center py-10 border-t">
                Personal Details
              </h1>
              <div className="flex justify-between md:flex-row flex-col gap-8 pl-6 md:pl-0 md:gap-0 mt-5 border-b pb-16 border-gray-300">
                <div className="font-semibold text-gray-600 flex items-center">
                  <PersonIcon className="inline-block mr-2 text-5xl" />
                  <div>
                    <p>Chonticha Li</p>
                    <p>Pui</p>
                  </div>
                </div>
                <div className="font-semibold text-gray-600 flex items-center">
                  <HomeIcon className="inline-block mr-2 text-5xl" />
                  <div>
                    <p>107 Pracha Uthit Rd. Thung Khru</p>
                    <p>10140</p>
                  </div>
                </div>
                <div className="font-semibold text-gray-600 flex items-center">
                  <BirthIcon className="inline-block mr-2 text-5xl" />
                  <div>
                    <p>27 November 2002</p>
                    <p>20 years </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-center py-10">
                My interest
              </h1>
              <div className="flex flex-wrap justify-center gap-5 mt-5 drop-shadow-lg border-b pb-16">
                <div className="bg-gray-200 rounded-md w-fit p-3 flex flex-col items-center">
                  <GameIconsGuitarHead className="inline-block  text-2xl text-gray-800" />
                  <p>Guitar</p>
                </div>
                <div className="bg-gray-200 rounded-md w-fit p-3 flex flex-col items-center">
                  <WebIcon className="inline-block  text-2xl text-gray-800" />
                  <p>Web Develop</p>
                </div>
                <div className="bg-gray-200 rounded-md w-fit p-3 flex flex-col items-center">
                  <AppIcon className="inline-block  text-2xl text-gray-800" />
                  <p>Mobile Develop</p>
                </div>
                <div className="bg-gray-200 rounded-md w-fit p-3 flex flex-col items-center">
                  <AIIcon className="inline-block  text-2xl text-gray-800" />
                  <p>AI</p>
                </div>
                <div className="bg-gray-200 rounded-md w-fit p-3 flex flex-col items-center">
                  <ArtIcon className="inline-block  text-2xl text-gray-800" />
                  <p>Arts</p>
                </div>
                <div className="bg-gray-200 rounded-md w-fit p-3 flex flex-col items-center">
                  <CameraIcon className="inline-block  text-2xl text-gray-800" />
                  <p>Film camera</p>
                </div>
                <div className="bg-gray-200 rounded-md w-fit p-3 flex flex-col items-center">
                  <GameIcon className="inline-block  text-2xl text-gray-800" />
                  <p>Game Develop</p>
                </div>
                <div className="bg-gray-200 rounded-md w-fit p-3 flex flex-col items-center">
                  <DesignIcon className="inline-block  text-2xl text-gray-800" />
                  <p>Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="w-full max-w-7xl mx-auto">
        <div>
          <div ref={toolsElment} className="pt-10 p-20">
            <h1 className="text-3xl font-semibold">TOOLS</h1>
            <div
              ref={ref}
              className={`fade-in-element tools grid md:grid-cols-4 gap-5 mt-10 grid-cols-2 ${
                animate ? "animate__animated animate__fadeIn" : ""
              }`}
            >
              <div className="bg-gray-200 md:px-8 px-5 py-4 rounded-lg flex justify-center items-center shadow-lg flex-col md:flex-row">
                <LogosVisualStudioCode className="inline-block mr-2 text-2xl " />
                Visual Studio Code
              </div>
              <div className="bg-gray-200 md:px-8 px-5 py-4 rounded-lg flex justify-center items-center shadow-lg flex-col md:flex-row">
                <DeviconIntellij className="inline-block mr-2 text-2xl " />
                IntelliJ IDEA
              </div>
              <div className="bg-gray-200 md:px-8 px-5 py-4 rounded-lg flex justify-center items-center shadow-lg flex-col md:flex-row">
                <SkillIconsMysqlDark className="inline-block mr-2 text-2xl " />
                MySQL Workbench
              </div>
              <div className="bg-gray-200 md:px-8 px-5 py-4 rounded-lg flex justify-center items-center shadow-lg flex-col md:flex-row">
                <DeviconFigma className="inline-block mr-2 text-2xl " />
                Figma
              </div>
              <div className="bg-gray-200 md:px-8 px-5 py-4 rounded-lg flex justify-center items-center shadow-lg flex-col md:flex-row">
                <LogosPostmanIcon className="inline-block mr-2 text-2xl " />
                Postman
              </div>
              <div className="bg-gray-200 md:px-8 px-5 py-4 rounded-lg flex justify-center items-center shadow-lg flex-col md:flex-row">
                <DeviconPutty className="inline-block mr-2 text-2xl " />
                PuTTy
              </div>
              <div className="bg-gray-200 md:px-8 px-5 py-4 rounded-lg flex justify-center items-center shadow-lg flex-col md:flex-row">
                <TeenyiconsGitSolid className="inline-block mr-2 text-2xl text-orange-600" />
                Git
              </div>
              <div className="bg-gray-200 md:px-8 px-5 py-4 rounded-lg flex justify-center items-center shadow-lg flex-col md:flex-row">
                <GameIconsSharkFin className="inline-block mr-2 text-2xl text-blue-800" />
                Wireshark
              </div>
            </div>
            <h1 className="text-3xl font-semibold my-10 mt-16 uppercase">
              Technical Skills
            </h1>
            <div
              ref={ref}
              className={`fade-in-element tools grid md:grid-cols-4 gap-5 mt-10 grid-cols-2  ${
                animate ? "animate__animated animate__fadeIn" : ""
              }`}
            >
              <div className=" px-8 py-4 rounded-lg border border-black/50 shadow-lg">
                Vue.js
              </div>
              <div className=" px-8 py-4 rounded-lg border border-black/50 shadow-lg">
                React.js
              </div>
              <div className=" px-8 py-4 rounded-lg border border-black/50 shadow-lg">
                Spring Boot
              </div>
              <div className=" px-8 py-4 rounded-lg border border-black/50 shadow-lg">
                SQL
              </div>
              <div className=" px-8 py-4 rounded-lg border border-black/50 shadow-lg">
                Docker
              </div>
              <div className=" px-8 py-4 rounded-lg border border-black/50 shadow-lg">
                Java
              </div>
              <div className=" px-8 py-4 rounded-lg border border-black/50 shadow-lg">
                JavaScript
              </div>
              <div className="px-8 py-4 rounded-lg border border-black/50 shadow-lg">
                HTML CSS
              </div>
              <div className=" px-8 py-4 rounded-lg border border-black/50 shadow-lg">
                Tailwind CSS
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div ref={experienceElement} className="pt-5 p-20">
            <h1 className="text-3xl font-semibold uppercase my-10">
              Experience
            </h1>
            <div className={`experience grid md:grid-cols-3 gap-5`}>
              <div
                ref={ref}
                className={`space-y-9 border shadow-lg border-black/50 rounded-xl p-8 text-start flex flex-col justify-end ${
                  animate ? "animate__animated animate__fadeIn" : ""
                }`}
              >
                <h1 className="text-xl font-semibold pt-10">lnwtrivia quiz</h1>
                <p>
                  An online quiz that combines interesting quizzes that can
                  played in different categories.
                </p>
                <a href="https://lnwtrivia.vercel.app/" target="_blank">
                  <button className="flex items-center group relative">
                    <p className=" relative z-10">visit website</p>
                    <span className="absolute w-full h-[1px] bg-black/70 bottom-0 left-0 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                    <RightArrow className="inline-block ml-2" />
                  </button>
                </a>
              </div>
              <div
                ref={ref}
                className={`flex shadow-lg flex-col justify-end space-y-9 border border-black/50 rounded-xl p-8 text-start ${
                  animate ? "animate__animated animate__fadeIn" : ""
                }`}
              >
                <h1 className="text-xl font-semibold pt-10">blogtopia</h1>
                <p>
                  A blog simulation website where you can read blogs by category
                  or search using keywords. Additionally, you can create your
                  own blog.
                </p>
                <div></div>
              </div>
              <div
                ref={ref}
                className={`flex shadow-lg flex-col justify-end space-y-9 border border-black/50 rounded-xl p-8 text-start ${
                  animate ? "animate__animated animate__fadeIn" : ""
                }`}
              >
                <h1 className="text-xl font-semibold pt-10">
                  SAS Announcement
                </h1>
                <p>
                  The User Announcement Management Website allows regular users
                  to read categorized and dated announcements, while
                  administrators can create, edit, and manage announcements for
                  effective communication.
                </p>
                <a
                  href="https://intproj22.sit.kmutt.ac.th/kk1/"
                  target="_blank"
                >
                  <button className="flex items-center group relative">
                    <p className=" relative z-10">visit website</p>
                    <span className="absolute w-full h-[1px] bg-black/70 bottom-0 left-0 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                    <RightArrow className="inline-block ml-2" />
                  </button>
                </a>
              </div>
              <div
                ref={ref}
                className={`flex shadow-lg flex-col justify-end space-y-9 border border-black/50 rounded-xl p-8 text-start ${
                  animate ? "animate__animated animate__fadeIn" : ""
                }`}
              >
                <h1 className="text-xl font-semibold pt-10">TWEET</h1>
                <p>
                  A simulated platform for communication, conversation, and
                  creative expression. Engage in interactive conversations and
                  connect with others freely to express your thoughts and ideas
                  in your own space.
                </p>
                <div></div>
              </div>
              <div
                ref={ref}
                className={`flex justify-end items-end ${
                  animate ? "animate__animated animate__fadeIn" : ""
                }`}
              >
                <Link to={`/experience`}>
                  <button className="flex items-center group relative">
                    <p className=" relative z-10">READ MORE</p>
                    <span className="absolute w-full h-[1px] bg-black/70 bottom-0 left-0 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                    <RightArrow className="inline-block ml-2" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="pt-5 p-20" ref={activityElement}>
            <h1 className="text-3xl font-semibold uppercase my-10">Activity</h1>
            <div
              ref={ref}
              className={`grid md:grid-cols-3 md:gap-5 gap-16 ${
                animate ? "animate__animated animate__fadeIn" : ""
              }`}
            >
              <div className="border border-t-black border-t-2 border-x-0 space-y-16">
                <div className="flex justify-between pt-3">
                  <h1 className="text-start text-2xl font-medium">
                    Hello World Fennec
                  </h1>
                  <div className="flex flex-col items-end">
                    <h1 className="text-4xl">29</h1>
                    <p>October</p>
                    <p>2022</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex gap-5 justify-end">
                    <button className="flex items-center gap-2">
                      <FaceBook /> <p className="text-xs">SIT HELLO WORLD</p>
                    </button>
                    <button className="flex items-center gap-2">
                      <JamInstagram />{" "}
                      <p className="text-xs">SIT HELLO WORLD</p>
                    </button>
                  </div>
                  <img src="/images/DSC_2490.jpg" alt="" />
                </div>
              </div>
              <div className="border border-t-black border-t-2 border-x-0 space-y-16">
                <div className="flex justify-between pt-3">
                  <h1 className="text-start text-2xl font-medium">
                    Hello World Fennec
                  </h1>
                  <div className="flex flex-col items-end">
                    <h1 className="text-4xl">29</h1>
                    <p>October</p>
                    <p>2022</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex gap-5 justify-end">
                    <button className="flex items-center gap-2">
                      <FaceBook /> <p className="text-xs">SIT HELLO WORLD</p>
                    </button>
                    <button className="flex items-center gap-2">
                      <JamInstagram />{" "}
                      <p className="text-xs">SIT HELLO WORLD</p>
                    </button>
                  </div>
                  <img src="/images/D9-Khing-Pan-282.jpg" alt="" />
                </div>
              </div>
              <div className="border border-t-black border-t-2 border-x-0 space-y-16">
                <div className="flex justify-between pt-3">
                  <h1 className="text-start text-2xl font-medium">
                    Hello World Fennec
                  </h1>
                  <div className="flex flex-col items-end">
                    <h1 className="text-4xl">29</h1>
                    <p>October</p>
                    <p>2022</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex gap-5 justify-end">
                    <button className="flex items-center gap-2">
                      <FaceBook /> <p className="text-xs">SIT HELLO WORLD</p>
                    </button>
                    <button className="flex items-center gap-2">
                      <JamInstagram />{" "}
                      <p className="text-xs">SIT HELLO WORLD</p>
                    </button>
                  </div>
                  <img src="/images/st1.jpg" alt="" />
                </div>
              </div>
            </div>
            <Link to={`/activity`} className="flex justify-end py-5">
              <button className="flex items-center group relative">
                <p className=" relative z-10">READ MORE</p>
                <span className="absolute w-full h-[1px] bg-black/70 bottom-0 left-0 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                <RightArrow className="inline-block ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
