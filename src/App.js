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



  // onScoreChange = (event) => {
  //   const inputCategory = event.target.parentElement.parentElement.getAttribute("id");
  //   const inputScore = parseInt(event.target.value);
  //   this.setState({ category: inputCategory })
  //   this.setState({ score: inputScore })
  // }

  onScoreChange = (event) => {
    const value = event.target.value
    this.setState({
      ...this.state,
      [event.target.getAttribute("name")]: value
    })
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
