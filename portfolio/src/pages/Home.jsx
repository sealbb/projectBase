import React, { useRef, useState, useEffect } from "react"
import { BiGithub } from "../assets/icons/GithubIcon"
import { MaterialSymbolsCallSharp } from "../assets/icons/CallIcon"
import { SimpleIconsGmail } from "../assets/icons/GmailIcon"
import { JamInstagram } from "../assets/icons/InstagramIcon"
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
import { UpArrow } from "../assets/icons/UpArrow"
import { HomeIcons } from "../assets/icons/HomeIcons"
import { CakeIcon } from "../assets/icons/CakeIcon"
import { FacebookHasBg } from "../assets/icons/FacebookHasBg"
import { PersonIcon } from "../assets/icons/PersonIcon"
import { AIIcon } from "../assets/icons/AIIcon"
import { ArtIcon } from "../assets/icons/ArtIcon"
import { WebIcon } from "../assets/icons/WebIcon"
import { AppIcon } from "../assets/icons/AppIcon"
import { GameIcon } from "../assets/icons/GameIcon"
import { DesignIcon } from "../assets/icons/DesignIcon"
import { CameraIcon } from "../assets/icons/CameraIcon"
import { useInView } from "react-intersection-observer"
import { LogosCss3 } from "../assets/icons/LogosCss3"
import { LogosDockerIcon } from "../assets/icons/LogosDockerIcon"
import { LogosHtml5 } from "../assets/icons/LogosHtml5"
import { LogosJava } from "../assets/icons/LogosJava"
import { LogosJavascript } from "../assets/icons/LogosJavascript"
import { LogosMysql } from "../assets/icons/LogosMysql"
import { LogosReact } from "../assets/icons/LogosReact"
import { LogosSpringIcon } from "../assets/icons/LogosSpringIcon"
import { LogosTailwindcssIcon } from "../assets/icons/LogosTailwindcssIcon"
import { LogosVue } from "../assets/icons/LogosVue"
import "animate.css"
import { Link } from "react-router-dom"
function Home() {
  const toolsElment = useRef(null)
  const aboutElement = useRef(null)
  const experienceElement = useRef(null)
  const activityElement = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [animate, setAnimate] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  if (inView && !animate) {
    setAnimate(true)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
        behavior: "smooth",
        block: "start",
      })
    }
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add("show")
      } else {
        entry.target.classList.remove("show")
      }
    })
  })

  const hiddenElements = document.querySelectorAll(".hiddens")

  hiddenElements.forEach((element) => {
    observer.observe(element)
  })

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
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
      <div className="w-full h-screen flex flex-col items-end justify-center ">
        <div className="navbar absolute top-5 md:right-12 space-x-10 md:block text-sm right-5">
          <button className="underline md:inline-block hidden">Home</button>
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
        <div
          className="hiddens md:max-w-7xl max-w-9xl mx-auto pt-10 p-20"
          ref={aboutElement}
        >
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
        <div className="bg-black/80 text-white py-4 w-full">
          <div className=" px-20 md:flex md:items-center md:justify-between gap-5  md:max-w-7xl max-w-9xl mx-auto md:flex-row grid grid-cols-1">
            <div className="flex items-center">
              <MaterialSymbolsCallSharp className="inline-block mr-2" />
              <a href="tel:+66925996241" target="_blank">
                092-599-6241
              </a>
            </div>
            <div className="flex items-center">
              <SimpleIconsGmail className="inline-block mr-2" />
              <a href="mailto:chonticha.licha@gmail.com" target="_blank">
                chonticha.licha@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <BiGithub className="inline-block mr-2" />
              <a href="https://github.com/sealbb" target="_blank">
                sealbb
              </a>
            </div>
            <div className="flex items-center">
              <JamInstagram className="inline-block mr-2" />
              <a href="https://www.instagram.com/sealb.b/" target="_blank">
                sealb.b
              </a>
            </div>
          </div>
        </div>
        <div className="md:max-w-7xl max-w-9xl mx-auto text-start pt-10 px-20">
          <h1 className="text-xl font-semibold ">Education</h1>
          <div className="flex md:justify-center justify-start mt-5 text-black/80">
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
            <div className=" border-r-2 border-black/60 text-right px-8"></div>
            <div className="border-l-2 ml-4 md:ml-0 md:border-l-0 px-8 ">
              <p>2018-2020</p>
              <p>High School</p>
              <p className="font-semibold">Suksanari School</p>
              <p>GPAX 3.84</p>
            </div>
          </div>
          <div className="flex md:justify-center justify-start mt-5 text-black/80">
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
            <div className=" md:border-r-2 border-black/60 text-right px-8"></div>
            <div className="border-l-2 ml-4 md:ml-0 md:border-l-0 px-8">
              <p>2021-Present</p>
              <p className="font-semibold">
                School of Information Technology (SIT)
              </p>
              <p>King Mongkut's University of Technology Thonburi</p>
              <p>GPAX 3.71</p>
            </div>
          </div>
        </div>
        <div className="md:max-w-7xl max-w-9xl mx-auto text-start pt-10 px-20">
          <div className=" gap-8 my-20">
            <div>
              <h1 className="text-xl font-semibold text-center py-10 border-t border-black/60">
                Personal Details
              </h1>
              <div className="flex justify-between md:flex-row flex-col gap-8 pl-6 md:pl-0 md:gap-0 mt-5 border-b pb-16 border-black/60">
                <div className="font-semibold text-black/80 flex items-center">
                  <PersonIcon className="inline-block md:mr-2 md:text-5xl text-4xl mr-4 " />
                  <div>
                    <p>Chonticha Li</p>
                    <p>(Pui)</p>
                  </div>
                </div>
                <div className="font-semibold text-black/80 flex items-center">
                  <HomeIcons className="inline-block md:text-4xl text-4xl mr-4" />
                  <div>
                    <p>107 Pracha Uthit Rd. Thung Khru</p>
                    <p>10140</p>
                  </div>
                </div>
                <div className="font-semibold text-black/80 flex items-center">
                  <CakeIcon className="inline-block mr-4 md:mr-2 md:text-5xl text-4xl " />
                  <div>
                    <p>27 November 2002</p>
                    <p>20 years </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hiddens">
              <h1 className="text-xl font-semibold text-center py-10">
                My interest
              </h1>
              <div className="inters flex flex-wrap justify-center gap-5 mt-5 drop-shadow-lg border-b pb-16 border-black/60">
                <div className="inter  hiddens div-bg rounded-md w-fit p-3 flex flex-col items-center">
                  <GameIconsGuitarHead className="inline-block  text-2xl text-gray-800" />
                  <p>Guitar</p>
                </div>
                <div className="inter hiddens div-bg rounded-md w-fit p-3 flex flex-col items-center">
                  <WebIcon className="inline-block  text-2xl text-gray-800" />
                  <p>Web development</p>
                </div>
                <div className="inter hiddens div-bg rounded-md w-fit p-3 flex flex-col items-center">
                  <AppIcon className="inline-block  text-2xl text-gray-800" />
                  <p>Mobile development</p>
                </div>
                <div className="inter hiddens div-bg rounded-md w-fit p-3 flex flex-col items-center">
                  <AIIcon className="inline-block  text-2xl text-gray-800" />
                  <p>AI </p>
                </div>
                <div className="inter hiddens div-bg rounded-md w-fit p-3 flex flex-col items-center">
                  <ArtIcon className="inline-block  text-2xl text-gray-800" />
                  <p>Arts</p>
                </div>
                <div className="inter hiddens div-bg rounded-md w-fit p-3 flex flex-col items-center">
                  <CameraIcon className="inline-block  text-2xl text-gray-800" />
                  <p>Film camera</p>
                </div>
                <div className="inter hiddens div-bg rounded-md w-fit p-3 flex flex-col items-center">
                  <GameIcon className="inline-block  text-2xl text-gray-800" />
                  <p>Game development</p>
                </div>
                <div className="inter hiddens div-bg rounded-md w-fit p-3 flex flex-col items-center">
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
            <div className="hiddens">
              <h1 className="text-3xl font-semibold">TOOLS</h1>
              <div
                ref={ref}
                className={`fade-in-element tools grid md:grid-cols-4 gap-5 mt-10 grid-cols-2 ${
                  animate ? "animate__animated animate__fadeIn" : ""
                }`}
              >
                <div className="inter hiddens div-bg md:px-8 px-5 py-4 rounded-lg flex justify-center items-center shadow-lg flex-col md:flex-row">
                  <LogosVisualStudioCode className="inline-block md:mr-2 text-2xl " />
                  Visual Studio Code
                </div>
                <div className="inter hiddens div-bg md:px-8 px-5 py-4 rounded-lg flex justify-center items-center shadow-lg flex-col md:flex-row">
                  <DeviconIntellij className="inline-block md:mr-2 text-2xl " />
                  IntelliJ IDEA
                </div>
                <div className="inter hiddens div-bg md:px-8 px-5 py-4 rounded-lg flex justify-center items-center shadow-lg flex-col md:flex-row">
                  <SkillIconsMysqlDark className="inline-block md:mr-2 text-2xl " />
                  MySQL Workbench
                </div>
                <div className="inter hiddens div-bg md:px-8 px-5 py-4 rounded-lg flex justify-center items-center shadow-lg flex-col md:flex-row">
                  <DeviconFigma className="inline-block md:mr-2 text-2xl " />
                  Figma
                </div>
                <div className="inter hiddens div-bg md:px-8 px-5 py-4 rounded-lg flex justify-center items-center shadow-lg flex-col md:flex-row">
                  <LogosPostmanIcon className="inline-block md:mr-2 text-2xl " />
                  Postman
                </div>
                <div className="inter hiddens div-bg md:px-8 px-5 py-4 rounded-lg flex justify-center items-center shadow-lg flex-col md:flex-row">
                  <DeviconPutty className="inline-block md:mr-2 text-2xl " />
                  PuTTy
                </div>
                <div className="inter hiddens div-bg md:px-8 px-5 py-4 rounded-lg flex justify-center items-center shadow-lg flex-col md:flex-row">
                  <TeenyiconsGitSolid className="inline-block md:mr-2 text-2xl text-orange-600" />
                  Git
                </div>
                <div className="inter hiddens div-bg md:px-8 px-5 py-4 rounded-lg flex justify-center items-center shadow-lg flex-col md:flex-row">
                  <GameIconsSharkFin className="inline-block md:mr-2 text-2xl text-blue-800" />
                  Wireshark
                </div>
              </div>
            </div>
            <div className="hiddens">
              <h1 className="text-3xl font-semibold my-10 mt-16 uppercase">
                Technical Skills
              </h1>
              <div
                ref={ref}
                className={` fade-in-element tools grid md:grid-cols-4 gap-5 mt-10 grid-cols-2  ${
                  animate ? "animate__animated animate__fadeIn" : ""
                }`}
              >
                <div className="inter hiddens md:px-8 px-5 py-4 rounded-lg flex justify-center items-center shadow-lg flex-col md:flex-row border border-black/50 gap-2">
                  <LogosVue />
                  Vue.js
                </div>
                <div className=" inter hiddens md:px-8 px-5 py-4 rounded-lg flex justify-center items-center shadow-lg flex-col md:flex-row border border-black/50 gap-2">
                  <LogosReact />
                  React.js
                </div>
                <div className="inter hiddens md:px-8 px-5 py-4 rounded-lg flex justify-center items-center shadow-lg flex-col md:flex-row border border-black/50 gap-2">
                  <LogosSpringIcon />
                  Spring Boot
                </div>
                <div className="inter hiddens md:px-8 px-5 py-4 rounded-lg flex justify-center items-center shadow-lg flex-col md:flex-row border border-black/50 gap-2">
                  <LogosTailwindcssIcon />
                  Tailwind CSS
                </div>
                <div className="inter hiddens md:px-8 px-5 py-4 rounded-lg flex justify-center items-center shadow-lg flex-col md:flex-row border border-black/50 gap-2">
                  <LogosDockerIcon />
                  Docker
                </div>
                <div className="inter hiddens md:px-8 px-5 py-4 rounded-lg flex justify-center items-center shadow-lg flex-col md:flex-row border border-black/50 gap-2">
                  <LogosJava className="text-xl" />
                  Java
                </div>
                <div className="inter hiddens md:px-8 px-5 py-4 rounded-lg flex justify-center items-center shadow-lg flex-col md:flex-row border border-black/50 gap-2">
                  <LogosJavascript />
                  JavaScript
                </div>
                <div className="inter hiddens md:px-8 px-5 py-4 rounded-lg flex justify-center items-center shadow-lg flex-col md:flex-row border border-black/50 gap-2">
                  <LogosMysql />
                  SQL
                </div>
                <div className="inter hiddens md:px-8 px-5 py-4 rounded-lg flex justify-center items-center shadow-lg flex-col md:flex-row border border-black/50 gap-2">
                  <LogosHtml5 />
                  HTML
                </div>
                <div className="inter hiddens md:px-8 px-5 py-4 rounded-lg flex justify-center items-center shadow-lg flex-col md:flex-row border border-black/50 gap-2">
                  <LogosCss3 />
                  CSS
                </div>
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
                className={`div-bg space-y-9  shadow-lg border-black/50 rounded-xl p-8 text-start flex flex-col justify-end ${
                  animate ? "animate__animated animate__fadeIn" : ""
                }`}
              >
                <h1 className="text-xl font-semibold pt-10">lnwtrivia quiz</h1>
                <p>
                  An online quiz that combines interesting quizzes that can
                  played in different categories.
                </p>
                <div>
                  <a href="https://lnwtrivia.vercel.app/" target="_blank">
                    <button className="flex items-center group relative">
                      <p className=" relative z-10">visit website</p>
                      <span className="absolute w-full h-[1px] bg-black/70 bottom-0 left-0 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                      <RightArrow className="inline-block ml-2" />
                    </button>
                  </a>
                  <a
                    href="https://github.com/Lostjerome/PROJECT1-SEC-1-KBPJJ"
                    target="_blank"
                  >
                    <button className="flex items-center group relative">
                      <p className=" relative z-10">github repository</p>
                      <span className="absolute w-full h-[1px] bg-black/70 bottom-0 left-0 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                      <RightArrow className="inline-block ml-2" />
                    </button>
                  </a>
                </div>
              </div>
              <div
                ref={ref}
                className={`div-bg flex shadow-lg flex-col justify-end space-y-9  border-black/50 rounded-xl p-8 text-start ${
                  animate ? "animate__animated animate__fadeIn" : ""
                }`}
              >
                <h1 className="text-xl font-semibold pt-10">blogtopia</h1>
                <p>
                  A blog simulation website where you can read blogs by category
                  or search using keywords. Additionally, you can create your
                  own blog.
                </p>
                <div>
                  <a
                    href="https://github.com/Lostjerome/PROJECT2-SEC-1-BLOGTOPIA"
                    target="_blank"
                  >
                    <button className="flex items-center group relative">
                      <p className=" relative z-10">github repository</p>
                      <span className="absolute w-full h-[1px] bg-black/70 bottom-0 left-0 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                      <RightArrow className="inline-block ml-2" />
                    </button>
                  </a>
                </div>
              </div>
              <div
                ref={ref}
                className={`div-bg flex shadow-lg flex-col justify-end space-y-9  border-black/50 rounded-xl p-8 text-start ${
                  animate ? "animate__animated animate__fadeIn" : ""
                }`}
              >
                <h1 className="text-xl font-semibold pt-10">SAS project</h1>
                <p>
                  The User Announcement Management Website allows regular users
                  to read categorized and dated announcements, while
                  administrators can create, edit, and manage announcements for
                  effective communication.
                </p>
                <div>
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
              </div>
              <div
                ref={ref}
                className={`div-bg flex shadow-lg flex-col justify-end space-y-9  border-black/50 rounded-xl p-8 text-start ${
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
              <div className="border border-t-black border-t-2 border-x-0 space-y-8">
                <div className="flex justify-between pt-3">
                  <h1 className="text-start text-2xl font-medium">
                    SIT HelloWorld Fennec
                  </h1>
                  <div className="flex flex-col items-end">
                    <h1 className="text-4xl">29</h1>
                    <p>October</p>
                    <p>2022</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-col gap-2">
                    <a
                      href="https://www.facebook.com/groups/1109902006302301/"
                      target="_blank"
                    >
                      <button className=" font-thin rounded-lg   flex items-center gap-2">
                        <FacebookHasBg className="text-lg" />
                        SIT HELLO WORLD FENNEC
                      </button>
                    </a>
                    <a
                      href="https://www.instagram.com/sithelloworld/"
                      target="_blank"
                    >
                      <button className=" font-thin rounded-lg   flex items-center gap-2">
                        <JamInstagram className="text-lg " />
                        SIT HELLO WORLD FENNEC
                      </button>
                    </a>
                  </div>
                  <img src="/images/DSC_2490.jpg" alt="" />
                </div>
              </div>
              <div className="border border-t-black border-t-2 border-x-0 space-y-16 ">
                <div className="flex justify-between pt-3">
                  <h1 className="text-start text-2xl font-medium">
                    IT#29 STARTER PACK
                  </h1>
                  <div className="flex flex-col items-end">
                    <h1 className="text-4xl">17</h1>
                    <p>July</p>
                    <p>2023</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex md:flex-row flex-col md:gap-5 gap-2 justify-start">
                    <a
                      href="https://www.instagram.com/sit.it.starterpack/"
                      target="_blank"
                    >
                      <button className=" font-thin rounded-lg   flex items-center gap-2">
                        <JamInstagram className="text-lg " />
                        IT29 STARTER PACK
                      </button>
                    </a>
                  </div>
                  <img src="/images/D9-Khing-Pan-282.jpg" alt="" />
                </div>
              </div>
              <div className="border border-t-black border-t-2 border-x-0 space-y-16">
                <div className="flex justify-between pt-3">
                  <h1 className="text-start text-2xl font-medium">
                    KMUTT STARTUP PLAYGROUND
                  </h1>
                  <div className="flex flex-col items-end">
                    <h1 className="text-4xl">18</h1>
                    <p>March</p>
                    <p>2023</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex md:flex-row flex-col md:gap-5 gap-2 justify-start">
                    <a
                      href="https://www.facebook.com/profile.php?id=100090000707117"
                      target="_blank"
                    >
                      <button className=" font-thin rounded-lg   flex items-center gap-2">
                        <FacebookHasBg className="text-lg " />
                        UCAN
                      </button>
                    </a>
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
