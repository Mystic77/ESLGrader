import React, { Component } from 'react';
import InputForm from './components/InputForm';
import FeedbackList from './components/FeedbackList';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      pronunciation: 0,
      fluency: 0,
      grammar: 0,
      vocabulary: 0,
      content: 0,
      }
    }

  onScoreChange = (event) => {
    const score = event.target.value
    const category = event.target.parentElement.parentElement.getAttribute("id")
    this.setState({
      ...this.state,
      [category]: score
      }
    )
    console.log(this.state)
  }


  render () {
    return (
      <div className="App">
          <h1 className='f1'>ESL Grader</h1>
          <InputForm scoreChange={this.onScoreChange} />
          <FeedbackList 
            input={this.state} 
          />
      </div>
    );
  }
}

export default App;
