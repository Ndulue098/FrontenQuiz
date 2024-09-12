import { useQuestion } from "../contexts/QuizContext";
import Options from "./Options";

export default function QuestionList() {
    const {currQuestion}=useQuestion()
    const currOption=currQuestion.options;
    return <ul className="quiz-list">
      {currOption.map((option,i)=><Options i={i} option={option} key={i}/>)}  
  </ul>
}

