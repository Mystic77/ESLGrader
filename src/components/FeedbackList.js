import React from 'react';
import FeedbackGenerator from './FeedbackGenerator';
import feedback from '../feedback';



const FeedbackList = ({ input }) => {
  return (
    <div>
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