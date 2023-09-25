import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Experience from "./pages/Experience"
import Activity from "./pages/Activity";
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/experience" element={<Experience />}></Route>
          <Route exact path="/activity" element={<Activity />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
