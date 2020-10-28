import React from 'react';

const InputForm = () => {
  return (
    <div>
      <form class="pa4">
        <fieldset id="favorite_movies" class="bn">
          <legend class="fw1 mb2 f1">Rubric</legend>
          <div class="flex items-center mb2">
            <h3>Pronunciation</h3>
            <input class="mr2" type="checkbox" id="spacejam" value="spacejam" />
            <label for="spacejam" class="lh-copy">Good</label>
            <input class="mr2" type="checkbox" id="spacejam" value="spacejam" />
            <label for="spacejam" class="lh-copy">OK</label>
            <input class="mr2" type="checkbox" id="spacejam" value="spacejam" />
            <label for="spacejam" class="lh-copy">Bad</label>
          </div>
          <div class="flex items-center mb2">
            <h3>Fluency</h3>
            <br />
            <input class="mr2" type="checkbox" id="spacejam" value="spacejam" />
            <label for="spacejam" class="lh-copy">Good</label>
            <input class="mr2" type="checkbox" id="spacejam" value="spacejam" />
            <label for="spacejam" class="lh-copy">OK</label>
            <input class="mr2" type="checkbox" id="spacejam" value="spacejam" />
            <label for="spacejam" class="lh-copy">Bad</label>
          </div>
          <div class="flex items-center mb2">
            <h3>Grammar</h3>
            <br />
            <input class="mr2" type="checkbox" id="spacejam" value="spacejam" />
            <label for="spacejam" class="lh-copy">Good</label>
            <input class="mr2" type="checkbox" id="spacejam" value="spacejam" />
            <label for="spacejam" class="lh-copy">OK</label>
            <input class="mr2" type="checkbox" id="spacejam" value="spacejam" />
            <label for="spacejam" class="lh-copy">Bad</label>
          </div>
          <div class="flex items-center mb2">
            <h3>Vocabulary</h3>
            <br />
            <input class="mr2" type="checkbox" id="spacejam" value="spacejam" />
            <label for="spacejam" class="lh-copy">Good</label>
            <input class="mr2" type="checkbox" id="spacejam" value="spacejam" />
            <label for="spacejam" class="lh-copy">OK</label>
            <input class="mr2" type="checkbox" id="spacejam" value="spacejam" />
            <label for="spacejam" class="lh-copy">Bad</label>
          </div>
          <div class="flex items-center mb2">
            <h3>Content</h3>
            <br />
            <input class="mr2" type="checkbox" id="spacejam" value="spacejam" />
            <label for="spacejam" class="lh-copy">Good</label>
            <input class="mr2" type="checkbox" id="spacejam" value="spacejam" />
            <label for="spacejam" class="lh-copy">OK</label>
            <input class="mr2" type="checkbox" id="spacejam" value="spacejam" />
            <label for="spacejam" class="lh-copy">Bad</label>
          </div>
  
        </fieldset>
      </form>
    </div>
  )
}

export default InputForm;