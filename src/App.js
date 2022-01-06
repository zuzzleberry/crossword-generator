import logo from "./logo.svg";
import "./App.css";
import React from "react";

const App = () => {
  const [wordList, setWordList] = React.useState([
    {
      word: "brazen",
      definition: "made of brass",
    },
    {
      word: "extant",
      definition: "still in existence",
    },
    {
      word: "harbinger",
      definition: "smth or smb that foretells the coming of",
    },
    {
      word: "coddle",
      definition: "treat with care and tenderness",
    },
    {
      word: "serration",
      definition: "having a toothed edge",
    },
    {
      word: "molt",
      definition: "molt",
    },
  ]);
  
  React.useEffect(() => {
    crosswordGenerator(wordList)
  })

  return <div className="App">HI</div>;
}

export default App;



const crosswordGenerator = (wordList) => {
  console.log(wordList);


  const size = findLength(wordList);
  console.log(size);


  const matrix = generateMatrix(size * 2);
  console.log(matrix);

  const crosswordArrangement = findArrangement(wordList, matrix);
}

const findLength = (wordList) => {
  let highest = 0;
  wordList.forEach((wordObj) => {
    if (wordObj.word.length > highest) {
      highest = wordObj.word.length;
    }
  })
  return highest;
}

const generateMatrix = (size) => {
  const matrix = new Array(size);
  for (var i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(size);
  }
  return matrix
}

const findArrangement = (wordList, matrix) => {

}
