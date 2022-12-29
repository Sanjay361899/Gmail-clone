import React from "react";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from "./SendMail";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { selectUser } from "./features/userSlice";
const App = () => {
  const sendMessageIsOpen= useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  return (
    <BrowserRouter>
    <div className="app">
      <Header />
      <div className="app__body">
      <SideBar />
      <Routes>
        <Route path="/" element={<EmailList/>}/>
        <Route path="/mail" element={<Mail/>}/>
      </Routes>
      </div>
      {sendMessageIsOpen && <SendMail/>}
    </div>
    </BrowserRouter>
  );
};

export default App;
