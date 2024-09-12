import { useQuestion } from "../contexts/QuizContext"

export default function Buttton() {
   const {answer,currQuestion,dispatch,currentIndex,questionLength}=useQuestion()
    const isAnswered=currQuestion.options.includes(answer)

    function handleSubmit(){
      if(!isAnswered) return
      if(currentIndex+1===questionLength){
        dispatch({type:"finished"})
      }
      dispatch({type:"submit"})
    }
  
    return <button className={`submit ${!isAnswered?"false":""}`} onClick={handleSubmit}>
      {currentIndex+1===questionLength?"Finish":"submit Answer"}
    </button>
}

