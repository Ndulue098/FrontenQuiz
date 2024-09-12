import { useQuestion } from "../contexts/QuizContext";

export default function Options({i,option}) {
    const {dispatch,answer,optionArr}=useQuestion()
    const on=answer===option

    function handleGetAnswer(answer){
      console.log(answer);
      dispatch({type:"answer",payload:answer})
    }
   
    return <li className={`${on?"answerSelect":""}`} onClick={()=>handleGetAnswer(option)}>  
    <p className="option">{optionArr[i]}</p>
    <p className="answer">{option}</p>
  </li>
}

