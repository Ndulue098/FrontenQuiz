import {createContext,useContext,useEffect, useReducer} from "react";

const QuestionContext=createContext()

const initialState={
    status:"loading",
    questionsData:[],
    currentIndex:0,
    currentQuestion:[],
    error:"",
    answer:null,
    currentID:"",
    points:0,
  }
  const optionArr=["A","B","C","D"];
  

function QuestionProvider({children}){
    
    function reducer(curState,action){
        switch (action.type) {
          case "loading":
            return {...curState,status:"loading"}
          case "question":
            return {...curState,status:"questionReady",questionsData:action.payload}
          case "currentId":
            return {...curState, currentID:action.payload}
          case "currentQuestion":
            return {...curState,status:"currentQuestionReady", currentQuestion:action.payload}
          case "answer":
            return {...curState,answer:action.payload}    
          case "rejected":
            return {...curState,error:action.payload,status:"dataFailed"}    
          case "finished":
            return {...curState,status:"finish"}    
          case "submit":
            const correctAns=curState.currentQuestion.questions?.[curState.currentIndex].answer
            return {...curState, currentIndex:curState.currentIndex+1,
                    points:curState.answer===correctAns?curState.points+10:curState.points,
            }
          case "restart":
            return {...curState,initialState,questionsData:curState.questionsData, currentQuestion:curState.currentQuestion,
              status:"questionReady",
            }
          default:
            throw new Error("something went wrong");
        }   
      }


const [state,dispatch]=useReducer(reducer,initialState);
const {status,questionsData:questions,currentIndex,currentID,currentQuestion,answer,points}=state;
  
    useEffect(function(){
      async function getQuestionsData(){
        try{
          const res=await fetch("http://localhost:8090/quizzes")
          const data=await res.json();
          dispatch({type:"question",payload:data})
          console.log(data);
        }catch(err){
          dispatch({type:"rejected",payload:"something went wrong fetching the question data"})
        } 
      }
  
      getQuestionsData();
    },[])
    
    
    useEffect(function(){
      async function getCurrentData(id){
        try{
            const res=await fetch(`http://localhost:8090/quizzes/${id}`)
            const data=await res.json();
            dispatch({type:"currentQuestion",payload:data})
            console.log(data);
            // const correctAns=data.questions?.[currentIndex].answer
            // console.log(correctAns);
            
          }catch(err){
            dispatch({type:"rejected",payload:"something went wrong fetching the question data"})
          } 
      }
      if(currentID){
        getCurrentData(currentID)
      }
    },[currentID])

    const currQuestion=currentQuestion.questions?.[currentIndex]
    const questionLength=currentQuestion.questions?.length;

    return <QuestionContext.Provider value={{currQuestion,questionLength,optionArr,status,questions,currentIndex,currentID,currentQuestion,answer,points,dispatch}}>
        {children}
    </QuestionContext.Provider>
}
function useQuestion(){
    const context=useContext(QuestionContext)
    if(context===undefined)throw new Error("postContext was used outside of postPorvider")
    return context;
}

export {useQuestion,QuestionProvider}























































