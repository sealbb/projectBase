import React, { useState, useEffect, useRef } from "react";
import { MaterialSymbolsAutorenew } from "../assets/icons/retweet.jsx";
import { MdiMessageSettingsOutline } from "../assets/icons/chat.jsx";
import { MaterialSymbolsHeartCheckOutline } from "../assets/icons/like.jsx";
import { LucideMoreHorizontal } from "../assets/icons/more.jsx";

function Retweet({ tweetData }) {
  const [retweet, setRetweet] = useState(false);
  const [showRetweetButton, setShowRetweetButton] = useState(false);
  const tweetRef = useRef(null);

  const handleRetweet = () => {
    setRetweet(!retweet);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tweetRef.current && !tweetRef.current.contains(event.target)) {
        setShowRetweetButton(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
      <div
        className="bg-tweet p-5 border-black rounded-2xl mt-3 w-full relative"
      >
        <div className="flex justify-start items-start gap-5">
          <img
            src={"../" + tweetData.tweet.user.profilePic}
            alt=""
            className="rounded-full h-10 w-10"
          />
          <div className="w-full pr-7">
            <div className="flex gap-2">
              <h1 className="font-bold text-xs">{tweetData.tweet.user.showName}</h1>
              <p className="text-xs">@{tweetData.tweet.user.username}</p>
            </div>
            <p className="text-xs">{tweetData.tweet.content}</p>
            <div className="flex justify-between mt-2 w-full">
              <MdiMessageSettingsOutline className="w-3 h-3" />
              <div ref={tweetRef}>
                {showRetweetButton && (
                <div className="absolute -bottom-2 bg-white px-4 py-1 border border-black/50 rounded-lg hover:bg-slate-200 cursor-pointer">
                  Retweet
                </div>
              )}
              <MaterialSymbolsAutorenew
                className="w-3 h-3 text-green-600 duration-150"
                onClick={() => setShowRetweetButton(!showRetweetButton)}
              />
              </div>
              
              <MaterialSymbolsHeartCheckOutline className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Retweet;
