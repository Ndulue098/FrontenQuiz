import { useQuestion } from "../contexts/QuizContext";

export default function Finished() {
  const {points,dispatch}=useQuestion()
    let emoji;
    let text;
    if(points>80){ 
      emoji="🥇"
      text="good job"
    }
    if (points>=50 && points<80){
      emoji="⭐"
      text="Average"
    }
    if (points<=50){
      emoji="😂"
      text="olodo"
    }
function handleReset(){
    dispatch({type:"restart"})
  }

 return <div className="finished-con">
 <div class="finished">
  <p class="emoji">{emoji}</p>
  <p class="compliment">{text}</p>
  <p class="score">your score is <strong>{points}/100</strong></p>
  <button class="btn" onClick={handleReset}>restart</button>
</div>
 </div>
}

