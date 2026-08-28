import PropTypes from "prop-types";
import { motion } from "framer-motion";

function Log({ turns }) {
  return (
    <div className="text-amber-900">
      {turns.map((turn, index) => {
        const { square, player } = turn;
        // Unique key using row and column instead of index
        const key = `${square.row}-${square.column}`;
        const isLatest = index === 0;

        return (
          <div key={key} className="flex gap-2">
            <span className="font-bold uppercase">{player}</span>

            {isLatest ? (
              /* Animate ONLY the latest turn */
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="font-semibold"
              >
                Selected {square.row + 1},{square.column + 1}
              </motion.p>
            ) : (
              /* Plain text for past turns */
              <p className="font-semibold">
                Selected {square.row + 1},{square.column + 1}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

Log.propTypes = {
  turns: PropTypes.arrayOf(
    PropTypes.shape({
      square: PropTypes.shape({
        row: PropTypes.number.isRequired,
        column: PropTypes.number.isRequired,
      }).isRequired,
      player: PropTypes.oneOf(["X", "O"]).isRequired,
    }),
  ).isRequired,
};

export default Log;
