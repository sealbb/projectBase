import React, { createContext, useContext, useState } from "react"

// Create a context
const TweetContext = createContext()

// Create a custom hook for consuming the context
export function useTweetContext() {
  return useContext(TweetContext)
}

// Create a provider component
export function TweetContext({ children }) {
  const [user, setUser] = useState(null) // Replace 'initialState' with your initial state

  const login = (userData) => {
    setUser(userData)
  }

  return (
    <TweetContext.Provider value={{ user, login }}>
      {children}
    </TweetContext.Provider>
  )
}
