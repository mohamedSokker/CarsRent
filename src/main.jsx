import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import { ContextProvider } from "./Contexts/mainContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </ContextProvider>
  </BrowserRouter>
);
