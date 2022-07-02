import React from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Detail from "./components/Detail";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
