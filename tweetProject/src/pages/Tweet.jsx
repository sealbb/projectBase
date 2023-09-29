import React, { useState, useEffect, useRef } from "react"
import { MaterialSymbolsAutorenew } from "../assets/icons/retweet.jsx"
import { MdiMessageSettingsOutline } from "../assets/icons/chat.jsx"
import { MaterialSymbolsHeartCheckOutline } from "../assets/icons/like.jsx"
import { MaterialSymbolsMoreVert } from "../assets/icons/MaterialSymbolsMoreVert.jsx"

function Tweet({ tweetData, sendRetweetID, retweetData }) {
  const [retweet, setRetweet] = useState([])
  const [showRetweetButton, setShowRetweetButton] = useState(false)
  const tweetRef = useRef(null)
  const [isRetweet, setIsRetweet] = useState(false)

  //   const checkRetweet = async () => {
  //     if(tweetData.map((tweet) => (tweet.tweetId === retweetData.tweetId) && (tweet.userId === retweetData.userId))){
  //       setIsRetweet(true)
  //   }else{
  //     setIsRetweet(false)
  //   }
  // }
  const handleRetweet = async (id) => {
    console.log("handleRetweet - received ID:", id)
    await sendRetweetID(id)
    setShowRetweetButton(!showRetweetButton)
    setIsRetweet(!isRetweet)
    // setRetweet(!retweet)
  }
  const handleMore = () => {
    console.log("click icon")
    setShowRetweetButton(!showRetweetButton)
    console.log(showRetweetButton)
  }

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (tweetRef.current && !tweetRef.current.contains(event.target)) {
  //       setShowRetweetButton(false)
  //     }
  //   }

  //   document.addEventListener("click", handleClickOutside)

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside)
  //   }
  // }, [])
  return (
    <div className="flex justify-center items-center w-full">
      <div className="bg-tweet p-5 bg-gray-100/50 shadow-md rounded-2xl mt-3 w-full relative">
        <div className="flex justify-start items-start gap-5">
          <img
            src={`../${tweetData.user.profilePic}`}
            alt=""
            className="rounded-full h-10 w-10"
          />
          <div className="w-full pr-7">
            <div className="flex justify-between items-center">
               <div className="flex gap-2">
              <h1 className="font-bold text-xs">{tweetData.user.showName}</h1>
              <p className="text-xs">@{tweetData.user.username}</p>
            </div>
            <MaterialSymbolsMoreVert/>
            </div>
           
            <p className="text-xs">{tweetData.content}</p>
            <div className="flex justify-between mt-2 w-full">
              <MdiMessageSettingsOutline className="w-3 h-3" />

              <div onClick={handleMore}>
                <MaterialSymbolsAutorenew
                  className={
                    isRetweet
                      ? "w-3 h-3 hover:text-green-600 duration-150 text-green-500"
                      : "w-3 h-3 hover:text-green-600 duration-150 text-black"
                  }
                />
              </div>

              <MaterialSymbolsHeartCheckOutline className="w-3 h-3" />
            </div>
            <div ref={tweetRef}>
              {showRetweetButton && (
                <div
                  onClick={() => handleRetweet(tweetData.tweetId)}
                  className="absolute  z-10 right-60 -bottom-3 bg-white px-4 py-1 border border-black/50 rounded-lg hover:bg-slate-200 cursor-pointer"
                >
                  Retweet
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweet
