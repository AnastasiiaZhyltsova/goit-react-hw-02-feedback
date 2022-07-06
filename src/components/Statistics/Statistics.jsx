import React from "react";
import PropTypes from "prop-types";

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad:{bad}</li>  
        <li>Total: {total}</li>
        <li>Positive feedback: {  positivePercentage}%</li>
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