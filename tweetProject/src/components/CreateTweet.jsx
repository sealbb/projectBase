import React from "react"
import { useState, useRef, useEffect } from "react"
import { MaterialSymbolsClose } from "../assets/icons/close.jsx"

function CreateTweet({ sendData, sendDataToParent, onClose }) {
  const contentText = useRef(null)
  const [content, setContent] = useState({})

  const setData = async () => {
    await setContent({ content: contentText.current.value, userId: 1 })
    await sendData({ content: contentText.current.value, userId: 1 })
    contentText.current.value = ""
  }
  useEffect(() => {
    contentText.current.focus()
  }, [])
  return (
    <div className="h-screen w-screen bg-black/30 flex justify-center">
      <div className="bg-white rounded-xl flex gap-5 p-5 w-2/4 h-1/4 mt-20 ">
        <MaterialSymbolsClose onClick={() => onClose()} /> {/* Call onClose here */}
        <div className="flex flex-col space-y-5 p-5">
          <label htmlFor="input" className="text-sm font-medium text-gray-700">
            Tell us what happened
          </label>
          <input
            type="text"
            id="input"
            name="input"
            ref={contentText}
            className="no-outline mt-1 block w-full rounded-md border-transparent shadow-sm focus:border-transparent focus:ring-0"
            placeholder="Enter text..."
          />
          <button
            className="flex bg-blue-300 rounded-lg w-fit px-3 py-1"
            onClick={setData}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateTweet
