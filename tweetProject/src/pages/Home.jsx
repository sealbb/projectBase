import React from "react"
import { useState, useEffect } from "react"
import Tweet from "./Tweet"
import Sidebar from "./Sidebar"
import Rightbar from "./Rightbar"
import CreateTweet from "../components/CreateTweet"

function Home() {
  const [tweets, setTweets] = useState([])
  
  const [dataFromChild, setDataFromChild] = useState('');
  const [createData, setCreateData] = useState();
  // console.log(createData);
  useEffect(() => {
    fetch("http://localhost:8080/api/tweets")
      .then((res) => res.json())
      .then((data) => setTweets(data))
  }, [])
  const recieveData = async (data) => {
    setCreateData(data);
    console.log("data at home "+ createData);
    try {
      const res = await fetch(`http://localhost:8080/api/tweets`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (res.status === 200) {
        // const newTweet = await res.json();
        // setTweets((prevTweets) => [newTweet, ...prevTweets]);
        setDataFromChild(false);
        // return await res.json();
      } else {
        const errorResponse = await res.json();
        const errorMessage = errorResponse.message;
        if (errorResponse.detail) {
          throw new Error(JSON.stringify(errorResponse.detail, null, 2));
        } else {
          throw new Error(errorMessage);
        }
      }
    } catch (err) {
      throw err;
    }
  }
  
  // Callback function to receive data from the child component
  const receiveDataFromChild = (data) => {
    setDataFromChild(data);
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto flex justify-center relative">
      
      <div className="flex">
        <div className=" sticky left-0 h-screen transition-transform w-28">
          <div className="h-full px-3 py-4 overflow-y-auto">
            <Sidebar sendDataToParent={receiveDataFromChild} />
          </div>
        </div>

        <div className="p-10 mx-10 flex-grow" id="tweet">
          <div className="flex flex-col justify-center">
            {tweets.map((tweet) => (
              <Tweet key={tweet.tweetId} tweetData={tweet} />
             )) }
          </div>
        </div>
        <div
          className="sticky right-0 h-screen transition-transform w-28"
        >
          <div className="h-full px-3 py-4 overflow-y-auto">
            <Rightbar />
          </div>
        </div>
      </div>
      <div className="absolute">
      {dataFromChild ? (
        <CreateTweet sendData={recieveData}/>
      ): null }
      </div>
    </div>
  )
}

export default Home
