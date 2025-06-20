import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { routing } from "./router/routing.tsx";

// import "./reset.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App routes={routing} />
  </StrictMode>
);
