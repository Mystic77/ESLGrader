import React from 'react';

const InputForm = () => {
  return (
    <article class="br2 near-white mv4 w-100 w-50-m w-25-1 mw6 center">
      <form class="pa4">
          <legend class="fw1 mb2 f1">Rubric</legend>
          <fieldset id="pronunciation" class="bn">
          <h3>Pronunciation</h3>
          <div class="flex items-center mb2">
            <input class="mr2" type="radio" id="prongood" value="Good" name="pronunciation" />
            <label for="prongood" class="lh-copy">Good</label>
            <input class="mr2 ml5" type="radio" id="pronok" value="OK" name="pronunciation" />
            <label for="pronok" class="lh-copy">OK</label>
            <input class="mr2 ml5" type="radio" id="pronbad" value="Bad" name="pronunciation" />
            <label for="pronbad" class="lh-copy">Bad</label>
          </div>
        </fieldset>
        <fieldset id="fluency" class="bn">
          <h3>Fluency</h3>
          <div class="flex items-center mb2">
            <br />
            <input class="mr2" type="radio" id="fluegood" value="Good" name="fluency" />
            <label for="fluegood" class="lh-copy">Good</label>
            <input class="mr2 ml5" type="radio" id="flueok" value="OK" name="fluency" />
            <label for="flueok" class="lh-copy">OK</label>
            <input class="mr2 ml5" type="radio" id="fluebad" value="Bad" name="fluency" />
            <label for="fluebad" class="lh-copy">Bad</label>
          </div>
          </fieldset>
          <fieldset id="grammar" class="bn">
          <h3>Grammar</h3>
          <div class="flex items-center mb2">
            <br />
            <input class="mr2" type="radio" id="gramgood" value="Good" name="grammar" />
            <label for="gramgood" class="lh-copy">Good</label>
            <input class="mr2 ml5" type="radio" id="gramok" value="OK" name="grammar" />
            <label for="gramok" class="lh-copy">OK</label>
            <input class="mr2 ml5" type="radio" id="grambad" value="Bad" name="grammar" />
            <label for="grambad" class="lh-copy">Bad</label>
          </div>
          </fieldset>
          <fieldset id="vocabulary" class="bn">
          <h3>Vocabulary</h3>
          <div class="flex items-center mb2">
            <br />
            <input class="mr2" type="radio" id="vocgood" value="Good" name="vocabulary" />
            <label for="vocgood" class="lh-copy">Good</label>
            <input class="mr2 ml5" type="radio" id="vocok" value="OK" name="vocabulary" />
            <label for="vocok" class="lh-copy">OK</label>
            <input class="mr2 ml5" type="radio" id="vocbad" value="Bad" name="vocabulary" />
            <label for="vocbad" class="lh-copy">Bad</label>
          </div>
          </fieldset>
          <fieldset id="content" class="bn">
          <h3>Content</h3>
          <div class="flex items-center mb2">
            <br />
            <input class="mr2" type="radio" id="congood" value="Good" name="content" />
            <label for="congood" class="lh-copy">Good</label>
            <input class="mr2 ml5" type="radio" id="conok" value="OK" name="content" />
            <label for="conok" class="lh-copy">OK</label>
            <input class="mr2 ml5" type="radio" id="conbad" value="Bad" name="content" />
            <label for="conbad" class="lh-copy">Bad</label>
          </div>
        </fieldset>
      </form>
    </article>
  )
}

export default InputForm;