import React from 'react'; 
import FeedbackGenerator from './components/FeedbackGenerator';
import InputForm from './components/InputForm';

function App() {
  return (
    <div className="App">
        <h1>ESL Grader</h1>
        <InputForm />
        <FeedbackGenerator />
    </div>
  );
}

export default App;
