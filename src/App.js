import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  useEffect(() => {
    const handleKeydown = event => {
      const {key, keyCode} = event;

      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            correctLetters.push(letter);

            displayWord();
          } else {
            showNotification();
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            wrongLetters.push(letter);

            updateWrongLettersEl();
          } else {
            showNotification();
          }
        }
      }
    }
  })

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
    </>
  );
}

export default App;
