import "./App.css";
import "./scss/app.scss";

import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header.js";
import {NotFound} from "./Components/pages/NotFound";
import Home from "./Components/pages/Home/Home.js";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <h2 className="content__title">Все пиццы</h2>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
