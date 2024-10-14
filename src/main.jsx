import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DivideContextProvider } from "./context/DivideContext.jsx";
import { EmailContextProvider } from "./context/EmailContext.jsx";

createRoot(document.getElementById("root")).render(
  <DivideContextProvider>
    <EmailContextProvider>
      {/* <StrictMode> */}
        <App />
      {/* </StrictMode> */}
    </EmailContextProvider>
  </DivideContextProvider>
);
