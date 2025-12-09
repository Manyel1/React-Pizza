import "./App.css";
import "../scss/app.scss";

import { Routes, Route } from "react-router-dom";

import Header from "../Components/Header/index.tsx.js";
import { NotFound } from "../Components/pages/NotFound/index.js";
import Home from "../Components/pages/Home/Home.js";
import { useState } from "react";

function App() {
  const [searchValue, setSearch] = useState('');
  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearch={setSearch} />
      <div className="content">
        <div className="container">
          <h2 className="content__title">Все пиццы</h2>
          <Routes>
            <Route path="/" index element={<Home searchValue={searchValue} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
