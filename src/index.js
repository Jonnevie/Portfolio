import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/footer";
import { Navbar } from "./components/navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<Navbar />
 <Footer />
  </React.StrictMode>
);
reportWebVitals();