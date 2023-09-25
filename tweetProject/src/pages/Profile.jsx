import React from "react"
import { useState, useEffect } from "react"
import Tweet from "./Tweet"
import Retweet from "./Retweet"
import Sidebar from "./Sidebar"
import Rightbar from "./Rightbar"
import { useParams } from "react-router-dom"

function Profile() {
  const [retweets, setRetweets] = useState([])
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    fetch(`http://localhost:8080/api/retweet/${id}`)
      .then((res) => res.json())
      .then((data) => setRetweets(data))
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto flex justify-center">
      <div className="flex">
        <div className=" sticky left-0 h-screen transition-transform w-28">
          <div className="h-full px-3 py-4 overflow-y-auto">
            <Sidebar />
          </div>
        </div>

        <div className="p-10 mx-10 flex-grow" id="tweet">
          <div>
            <div className="pl-2 pb-2">
              <img
                src="../user1.webp"
                alt="test"
                className="w-24 h-24 rounded-full border "
              />
            </div>

            <div className="">
              <h1 className="font-bold text-2xl">imwinter</h1>
              <p>@imwinter</p>
            </div>
            <div>
              <p className="font-bold underline p-1">Posts</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            {retweets.map((tweet) => (
              <Retweet key={tweet.tweetId} tweetData={tweet} />
            ))}
          </div>
        </div>
        <div className="sticky right-0 h-screen transition-transform w-28">
          <div className="h-full px-3 py-4 overflow-y-auto">
            <Rightbar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
