import React from 'react';
import FeedbackGenerator from './FeedbackGenerator';
import feedback from '../feedback';



const FeedbackList = ({ input }) => {
  return (
    <div>
      <h2 className="br2 near-white mv4 w-100 w-50-m w-25-1 mw6 center">Feedback:</h2>
        {Object.entries(input).map((entries) => {
          return (
          <FeedbackGenerator  
            category={entries[0]} 
            score={entries[1]}
            feedback={feedback}
          />
          );
        })}
    </div>
    );
};

export default FeedbackList;