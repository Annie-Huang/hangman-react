import React, {useEffect} from 'react';
import {checkWin} from "../helpers/helper";

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'Congratulations! You won! 😃';
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'Unfortunately you lost. 😕';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false
  }

  // This is a very cool way defined when to call setPlayable:
  useEffect(() => setPlayable(playable));

  return (
    <div className="popup-container">
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button>Play Again</button>
      </div>
    </div>
  );
};

export default Popup;
