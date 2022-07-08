import React from "react";
import style from "./FeedbackOptions.module.css"

const FeedbackOptions = ({options, onLeaveFeedback}) => (
  <ul className={style.list}>
    {options.map(option=> (
      <li className={style.item} key = {option}>
          <button className={style.button} onClick={() => onLeaveFeedback(option)}>{option}</button>
      </li>
    ))
    }  
  </ul> 
)

export default FeedbackOptions;