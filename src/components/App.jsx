import React, { Component } from "react";

import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  leaveFeedback = (option) => {
    this.setState(prevState => ({
    [option]: this.state[option] + 1,
    }));
  };

  countTotalFeedback() {
    const  { good, neutral, bad } = this.state;
    return good + neutral + bad;  
  
  }
  
  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();     
    const  { good } = this.state;
    return Math.round((good/total)*100);
  }
  render() {
    const { good, neutral, bad } = this.state;
  
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions 
            options={Object.keys(this.state)} 
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        {this.countTotalFeedback() === 0
          ? <Notification message="There is no feedback" />
          : <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        }     
      </div>
    )
  }
};

export default App;

