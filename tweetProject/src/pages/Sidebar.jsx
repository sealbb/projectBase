import React from "react"
import { useState, useEffect } from "react"
import { Link, Outlet } from "react-router-dom"

function Sidebar() {

  return (
    <>
   
      <div className="fixed top-5">
        <div className="m-5 space-y-6 flex flex-col  justify-start items-start h-screen">
          <div>
            <img
              src="../../public/tweetLogo.png"
              alt="test"
              className="w-10 h-10"
            />
          </div>
          <Link to="/">
          <div className="hover:bg-slate-100 px-3 py-2 w-full rounded-lg">
            <h1>Home</h1>
          </div>
          </Link>
          {/* <div className="hover:bg-slate-100 px-3 py-2 w-full rounded-lg">
            <h1>Explore</h1>
          </div> */}
          <div className="hover:bg-slate-100 px-3 py-2 w-full rounded-lg">
            <h1>Notifications</h1>
          </div>
          <div className="hover:bg-slate-100 px-3 py-2 w-full rounded-lg">
            <h1>Messages</h1>
          </div>
          {/* <div className="hover:bg-slate-100 px-3 py-2 w-full rounded-lg">
            <h1>Profile</h1>
          </div> */}
          {/* <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Tweet
          </button>
        </div> */}
          {/* <div className="hover:bg-slate-100 px-3 py-2 w-full rounded-lg">
          <h1>Login/Sign in</h1>
        </div> */}
          <Link to={`/profile/${1}`}>
            <div className="flex items-center justify-center px-3">
              <img src="/public/user1.webp" alt="" className="rounded-full h-10 w-10" />
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Sidebar
