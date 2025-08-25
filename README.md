# Labyrintenfinale 2025

This repository is the starting point for the case assignment in Labyrintenfinalen 2025. It contains an example of a simple frontend app in React + TypeScript + Vite and a simple Express + TypeScript backend with an API for tips.

## Screenshots

| 1 | 2 | 3 |
|---|---|---|
| ![1](https://github.com/user-attachments/assets/31c840f5-d171-4aab-8bbd-704afba78cb4) | ![2](https://github.com/user-attachments/assets/1d2db348-db9a-47a0-9999-8c437f476272) | ![3](https://github.com/user-attachments/assets/1bf61d85-b415-4980-a121-6667dc5baf75) |

| 4 | 5 | 6 |
|---|---|---|
| ![4](https://github.com/user-attachments/assets/a5a787f8-92c8-47c7-9f7f-91634b8daf0f) | ![5](https://github.com/user-attachments/assets/3bf1a79f-01fe-41b9-8e24-01a69a05911a) | ![6](https://github.com/user-attachments/assets/39f54dd8-7119-458b-a465-4dc635bb4de2) |

| 7 |
|---|
| ![7](https://github.com/user-attachments/assets/cb737ba3-e6e7-4820-9e6a-f6d477cc9362) |

## Getting Started

### First-Time Setup

1. Clone this repository to your local machine. Open a terminal, navigate to the folder where you want the repo, and run:  
   ```bash
   git clone git@github.com:bekk/labyrintenfinale-bekksparrow.git

    Verify Node and npm are installed:

    npm --version
    node --version

    If either command returns command not found, install them (e.g., via Homebrew). Ask a coach for help if needed.

Running the Backend

    Navigate into the backend folder:

cd backend

Install dependencies:

npm install

Start the backend:

    npm run dev

    Backend will run on port 8080.

    Open a browser at http://localhost:8080/api/tips to verify the backend is running.

Running the Frontend

    Open a new terminal window and navigate to the root of the repo.

    Install dependencies:

npm install

Start the frontend:

    npm run dev

    Frontend will run on port 3000.

    Open a browser at http://localhost:3000 to verify the frontend is running.

    You can access the backend from the frontend at http://localhost:3000/api/tips because a proxy in the Vite config forwards /api requests to the backend.

Deploying to the World

The app is hosted on Heroku: https://bekksparrow-9ffe029a038a.herokuapp.com/

.

To deploy, just push to Git. Heroku’s pipeline will handle the rest. For any changes on Heroku, contact one of the coaches.
