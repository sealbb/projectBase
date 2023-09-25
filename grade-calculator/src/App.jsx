import React from 'react';
import { useState } from "react"
import { IcOutlineDeleteForever } from '../src/assets/icon/IcOutlineDeleteForever.jsx'
import "./App.css"

function App() {
  const [subject, setSubject] = useState("")
  const [credit, setCredit] = useState("")
  const [grade, setGrade] = useState("A")
  const [subjects, setSubjects] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [gpa, setGpa] = useState(0)

  const handleGradeChange = (event) => {
    setGrade(event.target.value)
  }
  const addSubject = () => {
    setSubjects([
      ...subjects,
      { subject: subject, credit: credit, grade: grade },
    ])

    setSubject("")
    setCredit("")
  }

  const handleSubjectChange = (event) => {
    setSubject(event.target.value)
  }

  const handleCreditChange = (event) => {
    setCredit(event.target.value)
  }

  const calculateGPA = () => {
    let totalCredit = 0
    let totalGrade = 0
    const transferGrade = (grade) => {
      switch (grade) {
        case "A":
          return 4
        case "B+":
          return 3.5
        case "B":
          return 3
        case "C+":
          return 2.5
        case "C":
          return 2
        case "D+":
          return 1.5
        case "D":
          return 1
        case "F":
          return 0
        default:
          return 0
      }
    }
    subjects.forEach((subject) => {
      totalCredit += Number(subject.credit)
      totalGrade += Number(subject.credit) * transferGrade(subject.grade)
    })
    setGpa((totalGrade / totalCredit).toFixed(2))
  }
  const handleSubmitGrade = () => {
    setIsSubmitted(true)
    calculateGPA()
  }

  const deleteSubject = (s) => {
    const newSubjects = subjects?.filter((item) => item?.subject !== s)
    setSubjects(newSubjects)
  }
  return (
    <>
      <div>
        <div className="bg-white rounded-xl p-20 animate-jump-in animate-once animate-ease-linear">
          <h1 className="text-3xl font-semibold">Grade Calculator</h1>
          <div className="grid grid-cols-4 gap-5">
            <p>Subject</p>
            <p>Credit</p>
            <p>Grade</p>
          </div>
          <div className="flex gap-10 it">
            <div className="grid grid-cols-4 gap-5">
              <input
                type="text"
                className="bg-slate-100 rounded-lg px-2 py-1"
                value={subject}
                onChange={handleSubjectChange}
              />
              <input
                type="text"
                className="bg-slate-100 rounded-lg px-2 py-1"
                value={credit}
                onChange={handleCreditChange}
              />
              <select
                id="grades"
                name="grades"
                className="bg-slate-100 rounded-lg px-2 py-1"
                onChange={handleGradeChange}
                value={grade}
              >
                <option value="A">A</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="D+">D+</option>
                <option value="D">D</option>
                <option value="F">F</option>
              </select>
              <button
              className="bg-black text-white rounded-lg px-2 py-1 "
              onClick={addSubject}
            >
              Add
            </button>
            </div>
            
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl ">Subjects List</h2>
            <div className="space-y-3">
              {subjects.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 bg-slate-100 rounded-lg px-2 py-1"
                >
                  <p>{item.subject}</p>
                  <p>{item.credit}</p>
                  <p>{item.grade}</p>
                  <button className="bg-black text-white rounded-lg px-2 py-1" onClick={()=>{deleteSubject(item.subject)}}>delete</button>
                </div>
              ))}
            </div>
            <button
              className="bg-black text-white px-2 py-1 rounded-lg"
              onClick={handleSubmitGrade}
            >
              submit
            </button>
          </div>
          {isSubmitted && (
            <div className="bg-white rounded-xl p-20 mt-10 flex justify-center flex-col items-center animate-jump-in animate-once animate-ease-linear">
              <h2 className="text-2xl ">GPA</h2>
              <p className="text-3xl font-semibold">{gpa}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
