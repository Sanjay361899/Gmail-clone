import React from "react";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";
const App = () => {
  return (
    <BrowserRouter>
    <div className="app">
      <Header />
      <div className="app__body">
      <SideBar />
      <Routes>
        <Route path="/mail" element={<Mail/>}/>
        <Route path="/" element={<EmailList/>}/>
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;
