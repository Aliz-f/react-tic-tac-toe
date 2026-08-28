import { useState } from "react";
import PropTypes from "prop-types";

const palyersList = [
  { name: "PLAYER 1", symbol: "X" },
  { name: "PLAYER 2", symbol: "O" },
];

function Player({ initialPlayerName, symbol, isActive }) {
  const [isEditing, setEditing] = useState(false);
  const [savedPlayerName, setSavedPlayerName] = useState(initialPlayerName);

  function handelButtonClick() {
    setEditing((editing) => !editing);
  }

  function handleInputChange(event) {
    setSavedPlayerName(event.target.value);
  }

  let playerName = (
    <span className="w-20 p-1 text-sm text-center font-semibold tracking-wide">
      {savedPlayerName}
    </span>
  );
  if (isEditing) {
    playerName = (
      <input
        type="text"
        onChange={handleInputChange}
        value={savedPlayerName}
        className="w-20 p-1 text-sm text-center text-amber-950 font-semibold tracking-wide bg-amber-200 rounded-xl shadow-2xl"
      />
    );
  }
  return (
    <div
      className={`flex items-center justify-center max-w-md gap-4 p-1 px-3 text-white ${isActive ? "active-player" : ""}`}
    >
      {playerName}
      <span
        className={`font-bold text-2xl ${isActive ? "active-player-symbol" : ""}`}
      >
        {symbol}
      </span>
      <button
        type="button"
        onClick={handelButtonClick}
        className="rounded-xl px-6 border-2 border-amber-100 transition duration-200 hover:cursor-pointer hover:-translate-y-0.5"
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
}

Player.propTypes = {
  initialPlayerName: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

function Players({ activePlayer }) {
  return (
    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
      {palyersList.map((eachPlayer) => (
        <Player
          key={eachPlayer.symbol}
          initialPlayerName={eachPlayer.name}
          symbol={eachPlayer.symbol}
          isActive={activePlayer === eachPlayer.symbol}
        />
      ))}
    </div>
  );
}

Players.propTypes = {
  activePlayer: PropTypes.string.isRequired,
};

export default Players;
