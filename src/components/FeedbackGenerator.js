import React from 'react';

const FeedbackGenerator = ({ category, score, feedback }) => {
  return (
    <div>
      <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
  <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">{category}: {score}/5</h1>
 
        <div className="pa3 bt b--black-10">  
          <p className="f6 f5-ns lh-copy measure">
            {feedback[category][score]}
          </p>
        </div>
     </article>
    </div>
  )
}

export default FeedbackGenerator;