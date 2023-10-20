/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
import ContainerBackground from './components/ContainerBackground';
import { SurveyController } from './components/Survey'
import SurveyCompleted from './components/SurveyCompleted';
import { questionsData } from './dataQuestion';

function App() {
  const [suerveyComplete, setSurveyComplete] = useState(false)
  const [answer, setAnswer] = useState([])

  const handleSurveyComplete = (userAnswer) => {
    setSurveyComplete(true)
    setAnswer(userAnswer)
  }

  const RestartSurvey = () => {
    setSurveyComplete(false)
    setAnswer([])
  }

  useEffect(() => {
    localStorage.setItem("answer", JSON.stringify(answer))
  }, [answer])

  console.log("answer", answer);

  return (
    <>
      <BrowserRouter>
        <ContainerBackground>
          <div className=' w-screen bg-transparent flex items-center justify-center'>
            <div className='w-1/2 h-43 bg-white border border-gray-300 rounded-lg shadow-lg p-4'>
              <Routes>
                {!suerveyComplete ? (
                  <Route path='/' element={<SurveyController 
                    question={questionsData} 
                    onSurveyComplete={handleSurveyComplete} 
                  />} />
                ) : (
                  <Route path='/' element={<SurveyCompleted
                    onRestart={RestartSurvey}  
                  />} />
                )}
              </Routes>
            </div>
          </div>
        </ContainerBackground>
      </BrowserRouter>
    </>
  )
}

export default App
