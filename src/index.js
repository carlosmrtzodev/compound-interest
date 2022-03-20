import "./globals.css";
import App from "./App";
import NotFound from "./404";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
