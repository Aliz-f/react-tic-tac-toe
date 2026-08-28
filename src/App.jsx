import { useState } from "react";
import Players from "./componenets/Players";
import Board from "./componenets/GameBoard";
import Log from "./componenets/Log";
import GameOver from "./componenets/GameOver";

import { WINNING_COMBINATIONS } from "./componenets/winning_combinations";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(turns) {
  let currentPlayer = "X";
  currentPlayer = turns.length > 0 && turns[0].player === "X" ? "O" : "X";
  return currentPlayer;
}

function deriveGameBoard(turns) {
  let gameBoard = structuredClone(initialBoard);
  for (const turn of turns) {
    const { square, player } = turn;
    gameBoard[square.row][square.column] = player;
  }
  return gameBoard;
}

function checkForWinner(gameBoard) {
  for (const combination of WINNING_COMBINATIONS) {
    const [firstSquare, secondSquare, thirdSquare] = combination;
    if (
      gameBoard[firstSquare.row][firstSquare.column] &&
      gameBoard[firstSquare.row][firstSquare.column] ===
        gameBoard[secondSquare.row][secondSquare.column] &&
      gameBoard[firstSquare.row][firstSquare.column] ===
        gameBoard[thirdSquare.row][thirdSquare.column]
    ) {
      return gameBoard[firstSquare.row][firstSquare.column];
    }
  }
  return null;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const gameBoard = deriveGameBoard(gameTurns);
  const winner = checkForWinner(gameBoard);
  const isDraw = gameTurns.length === 9 && !winner;

  function handleOnSquareClick({ rowIndex, columnIndex }) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const recentTurn = {
        square: { row: rowIndex, column: columnIndex },
        player: currentPlayer,
      };

      return [recentTurn, ...prevTurns];
    });
  }

  function handleGameRestart() {
    setGameTurns([]);
  }

  return (
    <>
      <main className="mx-auto flex flex-col items-center justify-center max-w-lg bg-amber-950 rounded-2xl overflow-hidden">
        <section
          id="players"
          className="w-full mx-auto p-3 rounded-2xl shadow-2xl"
        >
          <Players activePlayer={deriveActivePlayer(gameTurns)} />
        </section>
        <section id="game-board" className="w-full h-90 p-3 relative">
          <Board onSquareClick={handleOnSquareClick} board={gameBoard} />
          <div className="">
            {(isDraw || winner) && (
              <GameOver winner={winner} onRestart={handleGameRestart} />
            )}
          </div>
        </section>
      </main>
      <section id="game-winner" className=""></section>
      <section
        id="game-log"
        className="mt-4 p-3 flex items-start justify-center w-full h-30 overflow-y-auto scrollbar-thin scrollbar-thumb-amber-950"
      >
        <Log turns={gameTurns} />
      </section>
    </>
  );
}

export default App;
