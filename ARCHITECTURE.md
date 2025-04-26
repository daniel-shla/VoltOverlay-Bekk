# Project Architecture & Tech Stack

## Overview

This project is a full-stack web application designed for Labyrintenfinale 2025. It features a modern React + TypeScript frontend, a simple Express + TypeScript backend, and uses Vite for development and build tooling. The app is structured for easy local development and seamless deployment to Heroku.

---

## Tech Stack

### Frontend

- **Framework:** React 19 (with React Router v7)
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (via plugin)
- **Routing:** React Router v7 (with file-based routing and meta support)
- **State Management:** React's built-in state/hooks
- **Component Structure:** Functional components, colocated in `app/components`
- **Icons:** Custom SVG React components (no external icon library)
- **Other:** Uses Vite's proxy for API requests to backend

### Backend

- **Framework:** Express.js
- **Language:** TypeScript
- **Build/Run Tool:** tsx (for running TypeScript directly)
- **API Structure:** RESTful, with endpoints under `/api` (e.g., `/api/tips`)
- **Static Serving:** Serves built frontend from `build/client`
- **Data Storage:** In-memory (for demo purposes, e.g., tips are stored in a local array)

### Monorepo/Workspace

- Uses npm workspaces: the backend is a separate workspace under `backend/`
- All dependencies for the frontend are in the root `package.json`
- Backend dependencies are in `backend/package.json`

### Deployment

- **Platform:** Heroku (auto-deploys on push to `main`)
- **Procfile:** Present for Heroku compatibility

---

## Project Structure

```
labyrintenfinale-bekksparrow/
│
├── app/                    # Frontend source code
│   ├── components/         # Reusable React components
│   ├── icons/              # Custom SVG icon components
│   ├── routes/             # Route-based page components
│   ├── root.tsx            # Main app entry and layout
│   ├── routes.ts           # Route configuration
│   └── app.css             # Tailwind and global styles
│
├── backend/                # Backend source code
│   ├── api/                # API route handlers (e.g., tips.ts)
│   ├── index.ts            # Express server entrypoint
│   ├── package.json        # Backend dependencies
│   └── ...                 # (No persistent storage, demo only)
│
├── public/                 # Static assets (if any)
├── package.json            # Root dependencies, scripts, workspaces
├── vite.config.ts          # Vite config (plugins, proxy, etc.)
├── tsconfig.json           # TypeScript config
├── Dockerfile              # (For containerization, if needed)
├── Procfile                # For Heroku deployment
└── README.md               # Project instructions
```

---

## Key Architectural Patterns

- **File-based Routing:** Each page is a file in `app/routes/`, registered in `routes.ts`.
- **Meta Support:** Each route can export a `meta` function for setting page titles.
- **Componentization:** UI is broken into small, reusable components (e.g., `ButtonWithIcon`).
- **API Proxying:** Vite proxies `/api` requests to the backend during development.
- **Error Boundaries:** Custom error handling via React Router's error boundary API.
- **No Database:** All backend data is in-memory (suitable for demos, not production).

---

## Development Workflow

- **Install dependencies:** `npm install` (from project root)
- **Start app (frontend + backend):** `npm run dev` (from project root)
- **Access frontend:** [http://localhost:3000](http://localhost:3000)
- **Access backend API:** [http://localhost:3000/api/tips](http://localhost:3000/api/tips) (proxied)
- **Build for production:** `npm run build`
- **Deploy:** Push to `main` branch (auto-deploys to Heroku)

---

## Notable Files

- `vite.config.ts`: Configures Vite, Tailwind, React Router, and API proxy.
- `app/root.tsx`: Main layout, error boundary, and app entry.
- `backend/index.ts`: Express server setup, static serving, and API mounting.
- `backend/api/tips.ts`: Example API with GET/POST endpoints for "tips".
- `app/routes/more-info.tsx`: Example of fetching data from the backend API.

---

## Summary Table

| Layer      | Technology         | Purpose/Notes                                 |
|------------|--------------------|-----------------------------------------------|
| Frontend   | React 19           | UI framework                                  |
|            | React Router v7    | Routing, layouts, error boundaries            |
|            | TypeScript         | Type safety                                   |
|            | Tailwind CSS       | Utility-first styling                         |
|            | Vite               | Dev server, build tool                        |
| Backend    | Express.js         | API server, static file serving               |
|            | TypeScript         | Type safety                                   |
|            | tsx                | Run TS directly (no build step needed)        |
| Dev Tools  | npm workspaces     | Monorepo management                           |
|            | Heroku             | Deployment                                    |
|            | Dockerfile         | (Optional: containerization)                  |

---

## Additional Notes

- The project is designed for educational/demo purposes, with a focus on simplicity and clarity.
- No persistent database is used; all data is lost on server restart.
- The codebase is ready for extension, e.g., adding new routes, components, or API endpoints. 