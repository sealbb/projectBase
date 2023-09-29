import React from "react"
import { useState, useEffect } from "react"
import Tweet from "./Tweet"
import Sidebar from "./Sidebar"
import Rightbar from "./Rightbar"
import CreateTweet from "../components/CreateTweet"
import { MaterialSymbolsEditSquareOutline } from "../assets/icons/writeIcon.jsx"
function Home() {
  const [tweets, setTweets] = useState([])
  const [retweetID, setRetweetID] = useState()
  const [retweetBody , setRetweetBody] = useState([])
  const [dataFromChild, setDataFromChild] = useState("")
  const [createData, setCreateData] = useState()
  const [userTweet, setUserTweet] = useState([] )
  const [retweet, setRetweet] = useState([])

  // console.log(createData);
  useEffect(() => {
    fetch("http://localhost:8080/api/tweets")
      .then((res) => res.json())
      .then((data) => setTweets(data))
  }, [tweets]) // Add createData as a dependency

  useEffect(() => {
    fetch(`http://localhost:8080/api/retweet/${1}`)
      .then((res) => res.json())
      .then((data) => setRetweet(data))
  }, [])
  
  useEffect(() => {
    fetch(`http://localhost:8080/api/tweets/${1}`)
      .then((res) => res.json())
      .then((data) => setUserTweet(data))
  }, [])
  const recieveData = async (data) => {
    setCreateData(data)
    console.log("data at home " + createData)
    try {
      const res = await fetch(`http://localhost:8080/api/tweets`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      if (res.status === 200) {
        // const newTweet = await res.json();
        // setTweets((prevTweets) => [newTweet, ...prevTweets]);
        setDataFromChild(false)
        // return await res.json();
      } else {
        const errorResponse = await res.json()
        const errorMessage = errorResponse.message
        if (errorResponse.detail) {
          throw new Error(JSON.stringify(errorResponse.detail, null, 2))
        } else {
          throw new Error(errorMessage)
        }
      }
    } catch (err) {
      throw err
    }
  }
 const recieveRetweetID = async (data) => {
    console.log("retweetID " + data)
    // await setRetweetBody({ userId: 1, tweetId: data })
    // console.log("retweetBody " + retweetBody)
    await addRetweet(data)
  }
  const addRetweet = async (data) => {
    console.log("retweetID " + data)
    // setCreateData(data)
    // setRetweetID(data)
    // console.log("retweetID " + retweetID)
    try {
      const res = await fetch(`http://localhost:8080/api/retweet`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: 1, tweetId: data }),
      })
      if(res.status === 200){
          console.log("retweet success")
      }
      // if (res.status === 200) {
      //   // const newTweet = await res.json();
      //   // setTweets((prevTweets) => [newTweet, ...prevTweets]);
      //   setDataFromChild(false)
      //   // return await res.json();
      // } else {
      //   const errorResponse = await res.json()
      //   const errorMessage = errorResponse.message
      //   if (errorResponse.detail) {
      //     throw new Error(JSON.stringify(errorResponse.detail, null, 2))
      //   } else {
      //     throw new Error(errorMessage)
      //   }
      // }
    } catch (err) {
      throw err
    }
  }

  // Callback function to receive data from the child component
  const receiveDataFromChild = (data) => {
    setDataFromChild(data)
  }

 
  const handleCreate = () => {
    setDataFromChild(true)
  }
  return (
    <div className="w-full max-w-7xl mx-auto flex justify-center relative">
      <div className="flex">
        <div className=" sticky left-0 h-screen transition-transform w-28">
          <div className="h-full px-3 py-4 overflow-y-auto">
            <Sidebar />
          </div>
        </div>

        <div className="p-10 mx-10 flex-grow relative" id="tweet">
          {/* <div className="text-center text-xl font-semibold">Home</div> */}
          <div className="flex flex-col justify-center">
            {tweets.map((tweet) => (
              <Tweet
              key={tweet.tweetId}
              tweetData={tweet}
              sendRetweetID={recieveRetweetID} 
              retweetData={retweet}

              />
            ))}
          </div>
        </div>
        <div className="sticky right-0 h-screen transition-transform w-28">
          <div className="h-full px-3 py-4 overflow-y-auto">
            <Rightbar />
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={handleCreate}
          className="fixed  bottom-10 right-60 shadow-md bg-blue-300 hover:bg-blue-400 p-5 rounded-full flex items-center justify-center"
        >
          <MaterialSymbolsEditSquareOutline className="text-white text-2xl" />
        </button>
      </div>
      <div className="absolute">
        {dataFromChild ? (
          <CreateTweet
            sendData={recieveData}
            sendDataToParent={receiveDataFromChild}
            onClose={() => setDataFromChild(false)}
          />
        ) : null}
      </div>
    </div>
  )
}

export default Home
