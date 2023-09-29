import React, { useState, useEffect } from "react"
import { RightArrow } from "../assets/icons/RightArrow"
import { LeftArrow } from "../assets/icons/LeftArrow"
import { UpArrow } from "../assets/icons/UpArrow"
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
import { Link } from "react-router-dom"
import "animate.css"
function Experience() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="w-full md:max-w-7xl max-w-9xl mx-auto">
      <div className="w-full flex flex-col animate__animated animate__fadeIn">
        <div className="w-full p-12 h-full">
          <div className="navbar  flex items-center justify-between">
            <div>
              <Link to="/" className="flex items-center gap-2">
                <button className="flex items-center group relative">
                  <LeftArrow className="inline-block mr-2" />
                  <p className="md:block hidden relative z-10">Home</p>
                  <span className="absolute w-full h-[1px] bg-black/70 bottom-0 left-0 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>
              </Link>
            </div>

            <div className="md:text-6xl text-3xl uppercase font-semibold py-12 flex  justify-center">
              <h1>Experience</h1>
            </div>
            <div></div>
          </div>

          <div className="flex flex-wrap gap-3 w-full">
            <div className="cursor-pointer rounded-3xl w-full transition-div flex justify-between  group items-center p-10">
              <div className="md:text-[300px] text-[60px] md:mt-36 mt-44">
                01
              </div>
              <div className="flex flex-col text-start pt-14 md:w-2/5 w-3/5">
                <h1 className="md:text-xl font-semibold text-lg md:mt-0 mt-5">lnwtrivia quiz</h1>
                <p className="text-md md:block hidden">
                  An online quiz that combines interesting quizzes that can
                  played in different categories. This website fetch the
                  questions from an API based on Vue.js and Tailwind CSS.
                </p>
                <p className="text-sm md:hidden block">
                  This quiz fetch the
                  questions from an API based on Vue.js and Tailwind CSS.
                </p>
                <a href="https://github.com/Lostjerome/PROJECT1-SEC-1-KBPJJ" target="_blank">
                  {" "}
                  <button className="flex items-center border  mt-3 border-black w-fit rounded-2xl px-2 space-x-2 hover:bg-black hover:text-white duration-500">
                    <p className="md:block hidden">Github repository</p>
                    <p className="md:hidden block">Repository</p>
                    <RightArrow className="text-xs" />
                  </button>
                </a>
                <a href="https://lnwtrivia.vercel.app/" target="_blank">
                  {" "}
                  <button className="flex items-center border  mt-3 border-black w-fit rounded-2xl px-2 space-x-2 hover:bg-black hover:text-white duration-500">
                    <p className="md:block hidden">Visit InwTrivia quizz</p>
                    <p className="md:hidden block">Website</p>
                    <RightArrow className="text-xs" />
                  </button>
                </a>
                <div className="mt-5">
                  <LogosVue className="inline-block mr-2 text-2xl " />
                  <LogosTailwindcssIcon className="inline-block mr-2 text-2xl " />
                  <LogosJavascript className="inline-block mr-2 text-2xl " />
                </div>
              </div>
            </div>
            <div className="cursor-pointer rounded-3xl w-full transition-div flex justify-between group items-center p-10">
            <div className="md:text-[300px] text-[60px] md:mt-36 mt-44">
                02
              </div>
              <div className="flex flex-col text-start pt-14 md:w-2/5 w-3/5">
                <h1 className="md:text-xl text-lg font-semibold mt-16 md:mt-0">Blogtopia</h1>
                <p className="text-md md:block hidden">
                  A website that simulates blogging. It uses vue.js as a base.
                  Uses a JSON server to simulate a backend to do CRUD and fetch
                  data from backend.
                </p>
                <p className="text-sm md:hidden block">
                A blogging website.Uses vue.js and JSON server.Do CRUD and fetch
                  data from backend.
                </p>
                <a href="https://github.com/Lostjerome/PROJECT2-SEC-1-BLOGTOPIA" target="_blank">
                  {" "}
                  <button className="flex items-center border  mt-3 border-black w-fit rounded-2xl px-2 space-x-2 hover:bg-black hover:text-white duration-500">
                    <p className="md:block hidden">Github repository</p>
                    <p className="md:hidden block">Repository</p>
                    <RightArrow className="text-xs" />
                  </button>
                </a>
                <div className="mt-5 flex">
                  <LogosVue className="inline-block mr-2 text-2xl " />
                  <LogosTailwindcssIcon className="inline-block mr-2 text-2xl " />
                  <LogosJavascript className="inline-block mr-2 text-2xl " />
                </div>
              </div>
            </div>
            <div className="cursor-pointer  rounded-3xl w-full transition-div flex justify-between group items-center p-10">
            <div className="md:text-[300px] text-[60px] md:mt-36 mt-44">
                03
              </div>
              <div className="flex flex-col text-start pt-14 md:w-2/5 w-3/5">
                <h1 className="md:text-xl text-lg font-semibold mt-16 md:mt-16">SAS</h1>
                <p className="border border-black rounded-xl px-2 text-xs w-fit">In the process</p>
                <p className="text-md md:block hidden">
                Developed a dynamic announcement management website. Used
                  Spring Boot for backend development, Vue.js for frontend
                  interactivity, and Tailwind CSS for design. SQL database for
                  data storage. Docker containers with a Docker Compose file for
                  deployment.
                </p>
                <p className="text-sm md:hidden block">
                 SIT Announcement system. Used
                  Spring Boot, Vue.js, Tailwind CSS, SQL and Docker Compose.
                </p>
                <a
                  href="https://intproj22.sit.kmutt.ac.th/kk1/"
                  target="_blank"
                >
                  {" "}
                  <button className="flex items-center border  mt-3 border-black w-fit rounded-2xl px-2 space-x-2 hover:bg-black hover:text-white duration-500">
                    <p className="md:block hidden">Visit SAS project</p>
                    <p className="md:hidden block">Website</p>
                    <RightArrow className="text-xs" />
                  </button>
                </a>
                <div className="mt-5 flex">
                  <LogosVue className="inline-block mr-2 text-2xl " />
                  <LogosTailwindcssIcon className="inline-block mr-2 text-2xl " />
                  <LogosJavascript className="inline-block mr-2 text-2xl " />
                  <LogosSpringIcon className="inline-block mr-2 text-2xl " />
                  <LogosDockerIcon className="inline-block mr-2 text-2xl " />
                </div>
              </div>
            </div>
            <div className="cursor-pointer  rounded-3xl w-full transition-div flex justify-between group items-center p-10">
            <div className="md:text-[300px] text-[60px] md:mt-36 mt-44">
                04
              </div>
              <div className="flex flex-col text-start pt-14 md:w-2/5 w-3/5">
                <h1 className="md:text-xl text-lg font-semibold mt-16 md:mt-0">TWEET</h1>
                <p className="border border-black rounded-xl px-2 text-xs w-fit">In the process</p>
                <p className="text-md md:block hidden">
                Website designed for posting, reply user-to-user interactions.
                  Built with a focus on learning React.js with tailwind css.
                  Website fetch data with a REST API, developed using Spring
                  Boot. SQL database for data storage.
                </p>
                <p className="text-sm md:hidden block">
                Website for user-to-user interactions.
                  Built with React.js, Tailwind CSS, Spring
                  Boot and SQL database.
                </p>
                <div className="mt-5 flex">
                  <LogosReact className="inline-block mr-2 text-2xl " />
                  <LogosTailwindcssIcon className="inline-block mr-2 text-2xl " />
                  <LogosJavascript className="inline-block mr-2 text-2xl " />
                  <LogosSpringIcon className="inline-block mr-2 text-2xl " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
