import React from 'react';


const ScoreCalculator = ({ input }) => { 
    const scores = Object.values(input)
    console.log(scores)
    const total = scores.reduce((total, amount) => total + parseInt(amount), 0);
    return(
      <div className="center mw5 mw6-ns br3 hidden ba near-white mv4">
        <h2 className="ml4">Total Score: {total}/25</h2>
        <h2 className="ml4">Percentage: {total * 4}</h2>
      </div>)
};

export default ScoreCalculator;