import { useQuestion } from "../contexts/QuizContext"

export default function QuestionTitle({question}) {
  const {dispatch}=useQuestion()
    function handleGetID(id){ 
        dispatch({type:"currentId",payload:id})
      }
    console.log(question.icon);
     

      return <li onClick={(()=>handleGetID(question.id))} >
      <img className="acc" src={`${question.icon}`} alt="acc" />
      <code>{question.title}</code>
    </li>
}

