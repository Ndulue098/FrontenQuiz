import QuizList from "./QuizList";
import WelcomeText from "./WelcomeText";

export default function StartQuiz() {
    return (
        <div className="start">
          <WelcomeText />
          <QuizList/>
        </div>
      ); 
}

 