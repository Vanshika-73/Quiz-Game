import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import './question.css';
import { HashLoader } from "react-spinners";
import Option from "./Option";
import { useParams } from "react-router-dom";
import Score from './Score';

const reducer=(state,action)=>{
  if(action.type==="inc"){
    state=state+1;
  }
  else{
    state=state-1;
  }
  return state;
}

function Questions() {
  const initialState=0;
  const [state,dispatch]=  useReducer(reducer,initialState);
  let [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [number, setNum] = useState(0);
  const {id}=useParams();
  useEffect(() => {
    axios.get(`https://quiz-game-backend.vercel.app/create_Question/${id}`).then(({ data:res }) => {
        setData([...res]);
        setLoading(false);
      });
  }, [data]);

  function Check(item){
    console.log(item);
    if (item.istrue===true) {
      document.querySelector("#win").setAttribute("class", "right_ans");
      document.querySelector("#win").innerHTML="Congrats! Your answer is right.";
      dispatch({type:"inc"});
      setTimeout(() => {
        document.querySelector("#win").innerHTML ="";
        setNum(number + 1);
      },1000);
    } else {
      document.querySelector("#win").setAttribute("class", "wrong_ans");
      document.querySelector("#win").innerHTML ="Oops! You got the answer Wrong.";
      setTimeout(() => {
        document.querySelector("#win").innerHTML ="";
        setNum(number + 1);
      }, 1000);}
    }
  if (number<5) {
    return loading ? (
      <div
        style={{height: "100vh",display: "flex",justifyContent: "center",alignItems: "center"}}><HashLoader color="#340647" size={85} />
      </div>
    ) : (
      <div className="page">
      <div className="questionArea">
        <h2 className="ques">{data[number]?.question}</h2>
        {data[number]?.options.map((item) => (
          <Option a={item.option} check={Check} item={item}/>
        ))}
         <h3>Reward: <span id="win"></span></h3>
      </div>
    </div>
    );
  }
  else{
    return(
      <div>
        <Score sc={initialState} />
      </div>
    )
  }
}
export default Questions;
