import "./App.css";
import "./scss/app.scss";

import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header.js";
import Categories from "./Components/Categories.js";
import Sort from "./Components/Sort.js";
import { Home } from "./Components/pages/Home.js";
import {NotFound} from "./Components/pages/NotFound";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
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
