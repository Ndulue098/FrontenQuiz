import { useQuestion } from "../contexts/QuizContext"

export default function Question() {
  const {currQuestion,questionLength,currentIndex} =useQuestion()
    return <div className="ans"> 
    <div>  
      <p className="ans-track">question {currentIndex+1} of {questionLength}</p>
      <p className="ans-text"> 
      {currQuestion.question}
      </p> 
    </div> 
  
    <progress className="progress-bar" value={currentIndex+1} max={questionLength}></progress>
    </div>
}

