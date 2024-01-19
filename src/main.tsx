import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@/assets/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import Grid from "@c/grid/index.tsx";
import { ReactLenis } from "@studio-freight/react-lenis";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Grid />
        <ReactLenis root>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ReactLenis>
    </React.StrictMode>
);
