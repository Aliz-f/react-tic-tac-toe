import PropTypes from "prop-types";

function GameBoard({ onSquareClick, board }) {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-6 w-full h-full p-2">
      {board.map((row, rowIndex) => {
        return row.map((cell, columnIndex) => {
          return (
            <button
              disabled={cell !== null}
              type="button"
              key={`${rowIndex}-${columnIndex}`}
              className={`p-2 shadow-2xl bg-amber-100 font-bold text-6xl text-amber-800 hover:cursor-pointer hover:bg-amber-200 transition duration-200`}
              onClick={() => onSquareClick({ rowIndex, columnIndex })}
            >
              {cell}
            </button>
          );
        });
      })}
    </div>
  );
}

GameBoard.propTypes = {
  onSquareClick: PropTypes.func.isRequired,
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)).isRequired,
};
export default GameBoard;
