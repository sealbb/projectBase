import React, { useState,useEffect } from "react"
import { RightArrow } from "../assets/icons/RightArrow"
import { LeftArrow } from "../assets/icons/LeftArrow"
import { UpArrow } from "../assets/icons/UpArrow"
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
            <div >
            <Link to="/" className="flex items-center gap-2">
                <button className="flex items-center group relative"> 
                <LeftArrow className="inline-block mr-2" />
                  <p className=" relative z-10">Home</p>
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
            <div className="cursor-pointer bg-gray-200 rounded-3xl w-full transition-div flex justify-between group items-center p-10">
              <div className="md:text-[300px] text-[200px] pt-36 group-hover:p-">01</div>
              <div className="flex flex-col text-start pt-14 w-2/5">
                <h1 className="text-xl font-semibold">lnwtrivia quiz</h1>
                <p>
                  An online quiz that combines interesting quizzes that can be
                  played in different categories.
                </p>
                <a href="https://lnwtrivia.vercel.app/">
                  {" "}
                  <button className="flex items-center border border-black w-fit rounded-2xl px-2 space-x-2">
                    <p>Visit InwTrivia quizz</p>
                    <RightArrow className="text-xs" />
                  </button>
                </a>
              </div>
            </div>
            <div className="cursor-pointer bg-gray-200 rounded-3xl w-full transition-div flex justify-between group items-center p-10">
              <div className="md:text-[300px] text-[200px] pt-36 group-hover:p-">02</div>
              <div className="flex flex-col text-start pt-14 w-2/5">
                <h1 className="text-xl font-semibold">lnwtrivia quiz</h1>
                <p>
                  An online quiz that combines interesting quizzes that can be
                  played in different categories.
                </p>
                {/* <a href="https://lnwtrivia.vercel.app/">
                  {" "}
                  <button className="flex items-center border border-black w-fit rounded-2xl px-2 space-x-2">
                    <p>Visit InwTrivia quizz</p>
                    <RightArrow className="text-xs" />
                  </button>
                </a> */}
              </div>
            </div>
            <div className="cursor-pointer bg-gray-200 rounded-3xl w-full transition-div flex justify-between group items-center p-10">
              <div className="md:text-[300px] text-[200px] pt-36 group-hover:p-">03</div>
              <div className="flex flex-col text-start pt-14 w-2/5">
                <h1 className="text-xl font-semibold">lnwtrivia quiz</h1>
                <p>
                  An online quiz that combines interesting quizzes that can be
                  played in different categories.
                </p>
                <a href="https://lnwtrivia.vercel.app/">
                  {" "}
                  <button className="flex items-center border border-black w-fit rounded-2xl px-2 space-x-2">
                    <p>Visit InwTrivia quizz</p>
                    <RightArrow className="text-xs" />
                  </button>
                </a>
              </div>
            </div>
            <div className="cursor-pointer bg-gray-200 rounded-3xl w-full transition-div flex justify-between group items-center p-10">
              <div className="md:text-[300px] text-[200px] pt-36 group-hover:p-">04</div>
              <div className="flex flex-col text-start pt-14 w-2/5">
                <h1 className="text-xl font-semibold">lnwtrivia quiz</h1>
                <p>
                  An online quiz that combines interesting quizzes that can be
                  played in different categories.
                </p>
                {/* <a href="https://lnwtrivia.vercel.app/">
                  {" "}
                  <button className="flex items-center border border-black w-fit rounded-2xl px-2 space-x-2">
                    <p>Visit InwTrivia quizz</p>
                    <RightArrow className="text-xs" />
                  </button>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
