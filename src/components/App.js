import { QuestionProvider, useQuestion } from "../contexts/QuizContext";
import Loader from "./Loader";
import Error from "./Error";
import StartQuiz from "./StartQuiz";
import Asseccibility from "./Asseccibility";
import Finished from "./Finished";

// const initialState={
//   status:"loading",
//   questionsData:[],
//   currentIndex:0,
//   currentQuestion:[],
//   error:"",
//   answer:null,
//   currentID:"",
//   points:0,
// }

// const optionArr=["A","B","C","D"];

// function reducer(curState,action){
//   switch (action.type) {
//     case "loading":
//       return {...curState,status:"loading"}
//     case "question":
//       return {...curState,status:"questionReady",questionsData:action.payload}
//     case "currentId":
//       return {...curState, currentID:action.payload}
//     case "currentQuestion":
//       return {...curState,status:"currentQuestionReady", currentQuestion:action.payload}
//     case "answer":
//       return {...curState,answer:action.payload}    
//     case "rejected":
//       return {...curState,error:action.payload,status:"dataFailed"}    
//     case "finished":
//       return {...curState,status:"finish"}    
//     case "submit":
//       const correctAns=curState.currentQuestion.questions?.[curState.currentIndex].answer
//       return {...curState, currentIndex:curState.currentIndex+1,
//               points:curState.answer===correctAns?curState.points+10:curState.points,
//       }
//     case "restart":
//       return {...curState,initialState,questionsData:curState.questionsData, currentQuestion:curState.currentQuestion,
//         status:"questionReady",
//       }
//     default:
//       throw new Error("something went wrong");
//   }   
// }

export default function App() {
  // const [state,dispatch]=useReducer(reducer,initialState);
  // const {status,questionsData,currentIndex,currentID,currentQuestion,answer,points}=state;

  // useEffect(function(){
  //   async function getQuestionsData(){
  //     try{
  //       const res=await fetch("http://localhost:8090/quizzes")
  //       const data=await res.json();
  //       dispatch({type:"question",payload:data})
  //       console.log(data);
  //     }catch(err){
  //       dispatch({type:"rejected",payload:"something went wrong fetching the question data"})
  //     } 
  //   }

  //   getQuestionsData();
  // },[])
  
  
  // useEffect(function(){
  //   async function getCurrentData(id){
  //     try{
  //         const res=await fetch(`http://localhost:8090/quizzes/${id}`)
  //         const data=await res.json();
  //         dispatch({type:"currentQuestion",payload:data})
  //         console.log(data);
  //         // const correctAns=data.questions?.[currentIndex].answer
  //         // console.log(correctAns);
          
  //       }catch(err){
  //         dispatch({type:"rejected",payload:"something went wrong fetching the question data"})
  //       } 
  //   }
  //   if(currentID){
  //     getCurrentData(currentID)
  //   }
  // },[currentID])
  return <QuestionProvider>
    <HomePage/>
</QuestionProvider>
}


 
function HomePage(){
  const {status}=useQuestion()
  return (
    <div className="quiz">
      {status==="loading"&& <Loader/>}
      {status==="dataFailed"&&<Error/>}
      {status==="questionReady"&& <StartQuiz/>}
      {status==="currentQuestionReady"&& <Asseccibility/>}
      {status==="finish"&&<Finished/>}
    </div>
  );
}

// function StartQuiz({questions,dispatch}) {
//   return (
//     <div className="start">
//       <WelcomeText />
//       <QuizList dispatch={dispatch} questions={questions}/>
//     </div>
//   ); 
// }

// function WelcomeText() {
//   return (
//     <div className="quiz-intro">
//       <h1 className="quiz-head">
//         Welcome to the <br />
//         <strong className="big">Frontend Quiz!</strong>
//       </h1>
//       <p>pick a subject to get started</p>
//     </div> 
//   );
// }

// function QuizList({questions,dispatch}){
//   return (
//     <ul className="quiz-list">
//       {questions.map((question)=><QuestionTitle dispatch={dispatch} question={question} key={question.id} />)}
//     </ul>
//   );
// }

// function QuestionTitle({question,dispatch}){

//   function handleGetID(id){ 
//     dispatch({type:"currentId",payload:id})
//   }

//   return <li onClick={(()=>handleGetID(question.id))} >
//   <img className="acc" src={`${question.icon}`} alt="accessible" />
//   <code>{question.title}</code>
// </li>
// }


// // the question components
// function Asseccibility({currentQuestion,currentIndex,dispatch,answer}) {
//   const currQuestion=currentQuestion.questions?.[currentIndex]
//   const questionLength=currentQuestion.questions?.length;
//   console.log(questionLength);
  
//   // console.log(currentQuestion);
  

//   return <div className="start"> 
//    <Icon currentQuestion={currentQuestion}/> 
//    <Question currentIndex={currentIndex} questionLength={questionLength} currentQuestion={currentQuestion} currQuestion={currQuestion}/>
//    <QuestionList answer={answer} dispatch={dispatch} currentQuestion={currentQuestion} currQuestion={currQuestion}/>
//    <Button questionLength={questionLength} currentIndex={currentIndex} dispatch={dispatch} answer={answer} currQuestion={currQuestion}/>
//  </div>
// }



// function Icon({currentQuestion}){
//   return <div className="question-components">

//   <div className="question-type">
//     <img className="acc" src={`${currentQuestion.icon}`} alt="icon" />
//     <h2>{currentQuestion.title}</h2> 
//   </div>
  
//   <div className="checkbox-wrapper-14">
//     <label>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="32"
//         height="32"
//         fill="#000000"
//         viewBox="0 0 256 256"
//       >
//         <path
//           d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"
//         ></path>
//       </svg>
//     </label>
//     <input id="s1-14" type="checkbox" className="switch" />
//     <label htmlFor="s1-14">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="32"
//         height="32"
//         fill="#000000"
//         viewBox="0 0 256 256"
//       >
//         <path
//           d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"
//         ></path>
//       </svg>
//     </label>
//   </div>
// </div>
// }




// function Question({currQuestion,questionLength,currentIndex}){

//   return <div className="ans"> 
//   <div>  
//     <p className="ans-track">question {currentIndex+1} of {questionLength}</p>
//     <p className="ans-text"> 
//     {currQuestion.question}
//     </p> 
//   </div> 

//   <progress className="progress-bar" value={currentIndex+1} max={questionLength}></progress>
//   </div>
// }


// function QuestionList({currQuestion,dispatch,answer}) {
//   const currOption=currQuestion.options;
//   return <ul className="quiz-list">
//     {currOption.map((option,i)=><Options answer={answer} dispatch={dispatch} i={i} option={option} key={i}/>)}  
// </ul>
// }

// function Options({option,i,dispatch,answer}){

  

//   const on=answer===option

//   function handleGetAnswer(answer){
//     console.log(answer);
//     dispatch({type:"answer",payload:answer})
//   }
 
//   return <li className={`${on?"answerSelect":""}`} onClick={()=>handleGetAnswer(option)}>  
//   <p className="option">{optionArr[i]}</p>
//   <p className="answer">{option}</p>
// </li>
// }


// function Button({answer,currQuestion,dispatch,currentIndex,questionLength}){

//   const isAnswered=currQuestion.options.includes(answer)

//   function handleSubmit(){
//     if(!isAnswered) return
//     if(currentIndex+1===questionLength){
//       dispatch({type:"finished"})
//     }
//     dispatch({type:"submit"})
//   }

//   return <button className={`submit ${!isAnswered?"false":""}`} onClick={handleSubmit}>
//     {currentIndex+1===questionLength?"Finish":"submit Answer"}
//   </button>
// }
 

// function Loader(){
//   return <div class="loader"></div>
// }

// function Error() {
//   return (
//     <p className="error">
//       <span>💥</span> There was an error fecthing questions.
//     </p>
//   );
// }


// function Finished({points,dispatch}){
//   let emoji;
//   let text;
//   if(points>80){ 
//     emoji="🥇"
//     text="good job"
//   }
//   if (points>=50 && points<80){
//     emoji="⭐"
//     text="Average"
//   }
//   if (points<=50){
//     emoji="😂"
//     text="olodo"
//   }
  
//   function handleReset(){
//     dispatch({type:"restart"})
//   }

//  return <div className="finished-con">
//  <div class="finished">
//   <p class="emoji">{emoji}</p>
//   <p class="compliment">{text}</p>
//   <p class="score">your score is <strong>{points}/100</strong></p>
//   <button class="btn" onClick={handleReset}>restart</button>
// </div>
//  </div>
// }




