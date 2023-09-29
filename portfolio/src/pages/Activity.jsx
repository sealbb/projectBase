import React, { useState, useEffect } from "react"
import { RightArrow } from "../assets/icons/RightArrow"
import { LeftArrow } from "../assets/icons/LeftArrow"
import { UpArrow } from "../assets/icons/UpArrow"
import { Link } from "react-router-dom"
import { JamInstagram } from "../assets/icons/InstagramIcon"
import { FacebookHasBg } from "../assets/icons/FacebookHasBg"
import { useInView } from "react-intersection-observer"
import "animate.css"
function Activity() {
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div>
        <button
          className={`scroll-to-top hover:fill-white z-10 ${
            isVisible ? "visible" : ""
          }`}
          onClick={scrollToTop}
        >
          <UpArrow className="text-black" />
        </button>
      </div>
      <div className="pt-5 p-20 animate__animated animate__fadeIn">
        <div className="w-full h-full">
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

            <div className="md:text-6xl text-3xl uppercase font-semibold py-12 flex justify-center">
              <h1>Activity</h1>
            </div>
            <div></div>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex flex-col  justify-between py-10 mt-20">
              <h1 className="md:text-7xl text-4xl text-start font-thin">
                HELLO WORLD
              </h1>
              <h1 className="md:text-7xl text-4xl text-start font-thin">
                FENNEC
              </h1>
            </div>
            <div className="my-5 md:my-0">
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
          </div>
          <div className="experience grid md:grid-cols-2 gap-2">
            <div className="bg-white/50 text-black shadow-md rounded-xl p-5 ">
              <h1 className="text-2xl font-thin  text-start mb-3 md:px-6 md:pt-3">
                SIT HelloWorld Fennec
              </h1>
              <p className="w-fit border md:mx-6 border-black/70 mb-6 rounded-xl px-3 text-xs text-black/70">
                7 October - 21 October 2022
              </p>
              <p className="text-start font-thin md:px-6">
                SIT HelloWorld Fennec is a camp organized by the SIT faculty
                with the aim of imparting knowledge and valuable experiences to
                the younger generation. In this camp, I serve as the HR
                coordinator, responsible for overseeing the entire process, from
                staff recruitment to participant management and internal event
                supervision.
              </p>
            </div>
            <img
              src="/images/DSC_1825.jpg"
              alt=""
              className="rounded-xl   w-full"
            />
            <img src="/images/DSC_2490.jpg" alt="" className="rounded-xl " />
            <img src="/images/DSC_2554.jpg" alt="" className="rounded-xl " />
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex flex-col  justify-between py-10 mt-20">
              <h1 className="md:text-7xl text-4xl text-start font-thin">
                IT29
              </h1>
              <h1 className="md:text-7xl text-4xl text-start font-thin">
                STARTER PACK
              </h1>
            </div>
            <div className="my-5 md:my-0">
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
          </div>

          <div className="experience grid md:grid-cols-2 gap-2">
            <img
              src="/images/D9-Khing-Pan-282.jpg"
              alt=""
              className="rounded-xl  w-full"
            />
            <img
              src="/images/D9-Khing-Pan-326.jpg"
              alt=""
              className="rounded-xl "
            />
            <img src="/images/sp1.jpg" alt="" className="rounded-xl " />
            <div className="bg-white/50 text-black shadow-md rounded-xl  p-5 ">
              <h1 className="text-2xl font-thin  text-start pb-3 md:px-6 md:pt-3">
                IT29 STARTER PACK
              </h1>
              <p className="w-fit border md:mx-6 border-black/70 mb-6 rounded-xl px-3 text-xs text-black/70">
                17 July - 27 July 2023
              </p>
              <p className="text-start font-thin md:px-6">
                The IT29 STARTER PACK is a camp designed to provide foundational
                training for first-year students majoring in IT. In this camp,
                my role is that of a speaker, responsible for managing and
                preparing content for teaching Basic HTML and CSS. Additionally,
                I also serve as a staff member, assisting other speakers when
                needed, and contributing to the overall teaching efforts.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex flex-col  justify-between py-10 mt-20">
              <h1 className="md:text-7xl text-4xl text-start font-thin">
                KMUTT
              </h1>
              <h1 className="md:text-7xl text-4xl text-start font-thin">
                STARTUP
              </h1>
              <h1 className="md:text-7xl text-4xl text-start font-thin">
                PLAYGROUND
              </h1>
            </div>
            <div className="my-5 md:my-0">
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
          </div>

          <div className="experience grid md:grid-cols-2 gap-2">
            <img src="/images/st1.jpg" alt="" className="rounded-xl  w-full" />
            <img src="/images/st2.jpg" alt="" className="rounded-xl " />
            <img src="/images/st4.jpg" alt="" className="rounded-xl " />
            <div className="bg-white/50 text-black shadow-md rounded-xl  p-5 ">
              <h1 className="text-2xl font-thin  text-start pb-3 md:px-6 md:pt-3">
                KMUTT STARTUP
              </h1>
              <p className="w-fit border md:mx-6 border-black/70 mb-6 rounded-xl px-3 text-xs text-black/70">
                18 March - 20 March 2023
              </p>
              <p className="text-start font-thin md:px-6">
                This is a simulated startup camp where I participated as a
                member. During the camp, I had the opportunity to learn about
                the entire process of starting a business. I gained insights
                into identifying problems and finding solutions. Moreover, I was
                also involved in preparing presentations and pitching to the
                panel of judges.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex flex-col  justify-between py-10 mt-20">
              <h1 className="md:text-7xl text-4xl text-start font-thin">
                GOOSE GOOSE GAME
              </h1>
              <h1 className="md:text-7xl text-4xl text-start font-thin">
                ATOM GAMES #29
              </h1>
            </div>
            <div className="my-5 md:my-0">
              <a
                href="https://www.facebook.com/goosegoosegames"
                target="_blank"
              >
                <button className=" font-thin rounded-lg   flex items-center gap-2">
                  <FacebookHasBg className="text-lg " />
                  GOOSE GOOSE GAMES
                </button>
              </a>
              <a
                href="https://www.instagram.com/goosegoosegames_official/"
                target="_blank"
              >
                <button className=" font-thin rounded-lg   flex items-center gap-2">
                  <JamInstagram className="text-lg " />
                  GOOSE GOOSE GAMES
                </button>
              </a>
            </div>
          </div>

          <div className="experience grid md:grid-cols-2 gap-2">
            <img src="/images/gg1.jpg" alt="" className="rounded-xl  w-full" />
            <img src="/images/gg2.jpg" alt="" className="rounded-xl " />{" "}
            <div className="bg-white/50 text-black shadow-md rounded-xl  p-5 ">
              <h1 className="text-2xl font-thin  text-start pb-3 md:px-6 md:pt-3">
                GOOSE GOOSE GAMES
              </h1>
              <p className="w-fit border md:mx-6 border-black/70 mb-6 rounded-xl px-3 text-xs text-black/70">
                4 June - 9 June 2023
              </p>
              <p className="text-start font-thin md:px-6">
                This event is the 29th edition of the Sports Science Association
                of Thailand, where I serve as a welfare staff member. My role
                involves overseeing the distribution of beverages and food to
                the participants. This project is a collaborative effort
                involving individuals from various institutions and faculties,
                and it provides a valuable experience and fosters excellent
                relationships.
              </p>
            </div>
            <img src="/images/gg3.jpg" alt="" className="rounded-xl " />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity
