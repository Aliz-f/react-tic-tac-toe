# React Tic-Tac-Toe

A small two-player Tic-Tac-Toe game built while following Maximilian Schwarzmüller's React course. It focuses on component composition, state management, derived values, event handling, and conditional rendering.

**Live site:** [tic-tac-toe.arfadaei.ir](https://tic-tac-toe.arfadaei.ir)

## Features

- Two-player gameplay with `X` and `O`
- Editable player names
- Highlighting for the active player
- Automatic win and draw detection
- Move history with an animation for the latest move
- Disabled squares after they have been selected
- Rematch button to reset the board
- Responsive styling

## Built With

- [React 18](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Motion](https://motion.dev/) (`framer-motion` package)
- [PropTypes](https://www.npmjs.com/package/prop-types)

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm. A current Node.js LTS release is recommended.

### Installation

1. Clone or download the project.
2. Open a terminal in the project directory.
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in the terminal.

## Available Scripts

```bash
npm run dev      # Start the Vite development server
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
```

## Deployment

The project is configured to deploy automatically to GitHub Pages whenever a commit is pushed to the `main` branch. The workflow builds the Vite application and publishes the generated `dist` directory.

### One-time GitHub setup

1. Create a new empty repository on GitHub.
2. From this project directory, initialize Git and push the project:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/Aliz-f/react-tic-tac-toe.git
   git push -u origin main
   ```

3. In the GitHub repository, open **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Wait for the **Deploy to GitHub Pages** workflow to finish.

### Custom domain with Cloudflare

The file `public/CNAME` configures GitHub Pages to use:

```text
tic-tac-toe.arfadaei.ir
```

In Cloudflare DNS, add this record:

| Type | Name | Target |
| --- | --- | --- |
| `CNAME` | `tic-tac-toe` | `Aliz-f.github.io` |

Initially set the record to **DNS only** (gray cloud) so GitHub can verify the domain. Once GitHub shows the domain as verified and HTTPS is working, the Cloudflare proxy can be enabled if desired.

In **Settings → Pages**, confirm the custom domain is `tic-tac-toe.arfadaei.ir`, then enable **Enforce HTTPS** when the option becomes available.

## How to Play

1. Player `X` starts the game.
2. Players alternate by selecting an empty square.
3. The first player to place three symbols in a row, column, or diagonal wins.
4. If all nine squares are filled without a winner, the game ends in a draw.
5. Select **Rematch!** to start a new game.

Player names can be changed with the **Edit** buttons.

## Project Structure

```text
module-04/
├── public/                     # Images and other static assets
├── src/
│   ├── componenets/
│   │   ├── GameBoard.jsx       # Board and square buttons
│   │   ├── GameOver.jsx        # Win/draw overlay and restart action
│   │   ├── Log.jsx             # Move history
│   │   ├── Players.jsx         # Player names and active-player display
│   │   └── winning_combinations.js
│   ├── App.jsx                 # Game state and game rules
│   ├── index.css               # Tailwind setup and custom utilities
│   └── main.jsx                # React entry point
├── index.html
├── package.json
└── vite.config.js
```

> The directory name `componenets` reflects its current spelling in the source code.

## React Concepts Practiced

- Splitting a UI into reusable components
- Managing state with `useState`
- Updating state from previous state safely
- Lifting game state into a parent component
- Deriving the board, active player, winner, and draw state
- Passing data and callbacks through props
- Rendering lists with stable keys
- Conditionally rendering the game-over overlay
- Validating component props with PropTypes

## Possible Next Steps

- Add an undo button
- Keep a scoreboard across rematches
- Let the winning message use the edited player name
- Add a computer opponent
- Save player names and scores in local storage
- Add component and game-logic tests

## Purpose

This project is for learning and practicing React fundamentals as part of Maximilian Schwarzmüller's React course. It is an educational implementation, not an official course repository.
