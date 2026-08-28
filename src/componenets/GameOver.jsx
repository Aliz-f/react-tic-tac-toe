import PropTypes from "prop-types";

function GameOver({ winner, onRestart }) {
  return (
    <div className="absolute inset-0 z-10 flex flex-col gap-8 items-center justify-center bg-amber-950/85 backdrop-blur-sm rounded-2xl transition-all">
      <h2 className="text-3xl font-bold text-white">
        {winner ? `Player ${winner} wins!` : "It's a draw!"}
      </h2>

      <button
        type="button"
        className="p-2 px-6 bg-amber-300 rounded-2xl shadow-2xl animate-pulse hover:cursor-pointer hover:bg-amber-400 hover:animate-none transition duration-200"
        onClick={onRestart}
      >
        Rematch!
      </button>
    </div>
  );
}

GameOver.propTypes = {
  winner: PropTypes.oneOf(["X", "O", null]),
  onRestart: PropTypes.func.isRequired,
};

export default GameOver;
