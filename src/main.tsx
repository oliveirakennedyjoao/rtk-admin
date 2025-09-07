import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MswLoader } from "./mocks/index.ts";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MswLoader>
      <Provider store={store}>
        <App />
      </Provider>
    </MswLoader>
  </StrictMode>
);
