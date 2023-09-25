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
          className={`scroll-to-top hover:fill-white ${
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
                  <p className=" relative z-10">Home</p>
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
              <h1 className="md:text-7xl text-5xl text-start font-thin">HELLO WORLD</h1>
              <h1 className="md:text-7xl text-5xl text-start font-thin">FENNEC</h1>
            </div>
            <div className="my-5 md:my-0">
              <button className=" font-thin rounded-lg   flex items-center gap-2">
              <FacebookHasBg className="text-lg " />
              SIT HELLO WORLD FENNEC
            </button>
            <button className=" font-thin rounded-lg   flex items-center gap-2">
              <JamInstagram className="text-lg " />
              SIT HELLO WORLD FENNEC
         
            </button>
            </div>
            {/* <div className="space-y-2">
              <button className="bg-black text-white px-4 py-2 font-thin rounded-lg   flex items-center gap-2">
              Visit Facebook page
              <RightArrow className="text-sm ml-2" />
            </button>
            <button className="bg-black text-white px-4 py-2 font-thin rounded-lg   flex items-center gap-2">
              Visit Instagram account
              <RightArrow className="text-sm ml-2" />
            </button>
            </div> */}
            
          </div>
          <div className="experience grid md:grid-cols-2 gap-2">
            <div className="bg-gray-200 text-black shadow-md rounded-xl p-5 ">
              <h1 className="text-2xl font-thin  text-start">
                Hello World Fennec
              </h1>
              <p className="text-start font-thin">
                I serve as a person who manages various learning materials and
                also helps in procuring various materials. I will check the
                computers for any problems and take care of them. In this camp,
                I will be a support person in providing assistance and
                assistance in various operations. To carry out the tutorial go
                notifications.
              </p>
            </div>
            <img
              src="/images/DSC_1825.jpg"
              alt=""
              className="rounded-xl   w-full"
            />
            <img
              src="/images/DSC_2490.jpg"
              alt=""
              className="rounded-xl "
            />
            <img
              src="/images/DSC_2554.jpg"
              alt=""
              className="rounded-xl "
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col  justify-between py-10 mt-20">
              <h1 className="text-7xl text-start font-thin">IT STARTERPACK</h1>
              <h1 className="text-7xl text-start font-thin">2023</h1>
            </div>
            <button className="bg-black text-white font-thin rounded-lg px-4 py-2 flex items-center">
              Visit Page
              <RightArrow className="text-sm ml-2" />
            </button>
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
            <img
              src="/images/sp1.jpg"
              alt=""
              className="rounded-xl "
            />
            <div className="bg-gray-200 text-black shadow-md rounded-xl  p-5 ">
              <h1 className="text-2xl font-thin  text-start">
                IT20 STARTER PACK
              </h1>
              <p className="text-start font-thin">
                I serve as a person who manages various learning materials and
                also helps in procuring various materials. I will check the
                computers for any problems and take care of them. In this camp,
                I will be a support person in providing assistance and
                assistance in various operations. To carry out the tutorial go
                notifications.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col  justify-between py-10 mt-20">
              <h1 className="text-7xl text-start font-thin">UCAN STARTUP</h1>
              <h1 className="text-7xl text-start font-thin">2023</h1>
            </div>
            <button className="bg-black text-white font-thin rounded-lg px-4 py-2 flex items-center">
              Visit Page
              <RightArrow className="text-sm ml-2" />
            </button>
          </div>

          <div className="experience grid md:grid-cols-2 gap-2">
            <img
              src="/images/st1.jpg"
              alt=""
              className="rounded-xl  w-full"
            />
            <img
              src="/images/st2.jpg"
              alt=""
              className="rounded-xl "
            />
            <img
              src="/images/st4.jpg"
              alt=""
              className="rounded-xl "
            />
            <div className="bg-gray-200 text-black shadow-md rounded-xl  p-5 ">
              <h1 className="text-2xl font-thin  text-start">
                UCAN STARTUP
              </h1>
              <p className="text-start font-thin">
                I serve as a person who manages various learning materials and
                also helps in procuring various materials. I will check the
                computers for any problems and take care of them. In this camp,
                I will be a support person in providing assistance and
                assistance in various operations. To carry out the tutorial go
                notifications.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col  justify-between py-10 mt-20">
              <h1 className="text-7xl text-start font-thin">GOOSE GOOSE GAME</h1>
              <h1 className="text-7xl text-start font-thin">2023</h1>
            </div>
            <button className="bg-black text-white font-thin rounded-lg px-4 py-2 flex items-center">
              Visit Page
              <RightArrow className="text-sm ml-2" />
            </button>
          </div>

          <div className="experience grid md:grid-cols-2 gap-2">
            <img
              src="/images/gg1.jpg"
              alt=""
              className="rounded-xl  w-full"
            />
            <img
              src="/images/gg2.jpg"
              alt=""
              className="rounded-xl "
            /> <div className="bg-gray-200 text-black shadow-md rounded-xl  p-5 ">
              <h1 className="text-2xl font-thin  text-start">
                IT20 STARTER PACK
              </h1>
              <p className="text-start font-thin">
                I serve as a person who manages various learning materials and
                also helps in procuring various materials. I will check the
                computers for any problems and take care of them. In this camp,
                I will be a support person in providing assistance and
                assistance in various operations. To carry out the tutorial go
                notifications.
              </p>
            </div>
            <img
              src="/images/gg3.jpg"
              alt=""
              className="rounded-xl "
            />
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity
