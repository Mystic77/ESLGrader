import React from 'react';

const FeedbackGenerator = (props) => {
  return (
    <div>
      <h1 class="f2 br2 near-white mv4 w-100 w-50-m w-25-1 mw6 center">Score: 88</h1>
      <article class="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
        <h1 class="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">{props.id}: 4/5</h1>
        <div class="pa3 bt b--black-10">
          <p class="f6 f5-ns lh-copy measure">
            {props.feedback}
          </p>
        </div>
     </article>
      <article class="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
        <h1 class="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Fluency: 4/5</h1>
        <div class="pa3 bt b--black-10">
          <p class="f6 f5-ns lh-copy measure">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum.
          </p>
        </div>
     </article>
      <article class="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
        <h1 class="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Grammar: 3/5</h1>
        <div class="pa3 bt b--black-10">
          <p class="f6 f5-ns lh-copy measure">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum.
          </p>
        </div>
     </article>
      <article class="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
        <h1 class="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Vocabulary: 3/5</h1>
        <div class="pa3 bt b--black-10">
          <p class="f6 f5-ns lh-copy measure">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum.
          </p>
        </div>
     </article>
      <article class="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
        <h1 class="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Content: 2/5</h1>
        <div class="pa3 bt b--black-10">
          <p class="f6 f5-ns lh-copy measure">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum.
          </p>
        </div>
     </article>
    </div>
  )
}

export default FeedbackGenerator;