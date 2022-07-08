import React from "react";
import PropTypes from "prop-types";
import style from './Statistics.module.css'

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <ul className={style.list}>
        <li className={style.item}>Good: {good}</li>
        <li className={style.item}>Neutral: {neutral}</li>
        <li className={style.item}>Bad:{bad}</li>  
        <li className={style.item}>Total: {total}</li>
        <li className={style.item}>Positive feedback: {  positivePercentage}%</li>
    </ul> 
)

export default Statistics;

Statistics.protoType = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
}