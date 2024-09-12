import { useQuestion } from "../contexts/QuizContext";
import QuestionTitle from "./QuestionTitle";

export default function QuizList() {
 const {questions}=useQuestion() 
    return (
        <ul className="quiz-list">
          {questions.map((question)=><QuestionTitle  question={question} key={question.id} />)}
        </ul> 
      );
}

 