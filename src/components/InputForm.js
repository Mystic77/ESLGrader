import React from 'react';

const InputForm = ({ scoreChange }) => {
  return (
    <div 
      onChange={scoreChange}>
      <article className="br2 near-white mv4 w-100 w-50-m w-25-1 mw6 center">
        <form className="pa4">
            <legend className="fw1 mb2 f1">Rubric</legend>
            <fieldset id="pronunciation" className="bn">
            <h3>Pronunciation</h3>
            <div className="flex items-center mb2">
              <input className="mr2" type="radio" id="pron5" value="5" name="pronunciation" />
              <label for="pron5" className="lh-copy">5</label>
              <input className="mr2 ml5" type="radio" id="pron3" value="3" name="pronunciation" />
              <label for="pron3" className="lh-copy">3</label>
              <input className="mr2 ml5" type="radio" id="pron1" value="1" name="pronunciation" />
              <label for="pron1" className="lh-copy">1</label>
            </div>
          </fieldset>
          <fieldset id="fluency" className="bn">
            <h3>Fluency</h3>
            <div className="flex items-center mb2">
              <br />
              <input className="mr2" type="radio" id="flue5" value="5" name="fluency" />
              <label for="flue5" className="lh-copy">5</label>
              <input className="mr2 ml5" type="radio" id="flue3" value="3" name="fluency" />
              <label for="flue3" className="lh-copy">3</label>
              <input className="mr2 ml5" type="radio" id="flue1" value="1" name="fluency" />
              <label for="flue1" className="lh-copy">1</label>
            </div>
            </fieldset>
            <fieldset id="grammar" className="bn">
            <h3>Grammar</h3>
            <div className="flex items-center mb2">
              <br />
              <input className="mr2" type="radio" id="gram5" value="5" name="grammar" />
              <label for="gram5" className="lh-copy">5</label>
              <input className="mr2 ml5" type="radio" id="gram3" value="3" name="grammar" />
              <label for="gram3" className="lh-copy">3</label>
              <input className="mr2 ml5" type="radio" id="gram1" value="1" name="grammar" />
              <label for="gram1" className="lh-copy">1</label>
            </div>
            </fieldset>
            <fieldset id="vocabulary" className="bn">
            <h3>Vocabulary</h3>
            <div className="flex items-center mb2">
              <br />
              <input className="mr2" type="radio" id="voc5" value="5" name="vocabulary" />
              <label for="voc5" className="lh-copy">5</label>
              <input className="mr2 ml5" type="radio" id="voc3" value="3" name="vocabulary" />
              <label for="voc3" className="lh-copy">3</label>
              <input className="mr2 ml5" type="radio" id="voc1" value="1" name="vocabulary" />
              <label for="voc1" className="lh-copy">1</label>
            </div>
            </fieldset>
            <fieldset id="content" className="bn">
            <h3>Content</h3>
            <div className="flex items-center mb2">
              <br />
              <input className="mr2" type="radio" id="con5" value="5" name="content" />
              <label for="con5" className="lh-copy">5</label>
              <input className="mr2 ml5" type="radio" id="con3" value="3" name="content" />
              <label for="con3" className="lh-copy">3</label>
              <input className="mr2 ml5" type="radio" id="con1" value="1" name="content" />
              <label for="con1" className="lh-copy">1</label>
            </div>
          </fieldset>
        </form>
      </article>
    </div>
  )
}

export default InputForm;