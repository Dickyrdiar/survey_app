/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { useState } from "react"

export const SurveyController = ({ question, onSurveyComplete }) => {
  const [currentQustion, setCurrentQuestion] = useState(0)
  const [answer, setAnswer] = useState(new Array(question?.length).fill(null))
  const [timeLeft, setTimeLefet] = useState(200)

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLefet(timeLeft - 1)
      } else {
        clearInterval(timer)
        onSurveyComplete(answer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, answer, onSurveyComplete])

  const handleAnswer = (selectedOption) => {
    const updateAnswer = [...answer]
    updateAnswer[currentQustion] = selectedOption
    setAnswer(updateAnswer)

    if (currentQustion < question.length - 1) {
      setCurrentQuestion(currentQustion + 1)
    } else {
      onSurveyComplete(updateAnswer)
    }
  }
  
  return (
    <div className="w-full sm:w-1/2 mx-auto p-4">
      <div className="relative">
        <div className="mb-4">
          <p>time left: {timeLeft} second</p>
        </div>

        <div className="mb-4">
         <div className="flex">
          <div className="mb-4">
            <h3 className="text-base font-semibold mb-4 w-full text-gray-300">
              {question[currentQustion].no}
            </h3>
          </div>

          <div className="w-2xl">
            <h4 className="text-base font-semibold mb-4 w-full ml-2">
              {question[currentQustion].question}
            </h4>
          </div>
         </div>

          {question[currentQustion].options.map((option, index) => (
            <div key={index} className="ml-2">
              <button
                key={index}
                className="mr-5 bg-white text-gray-500 px-4 py-2 rounded m-2"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}