import React from "react";
import "./Header.css";
import { Apps, ArrowDropDown, Menu, MenuBook, Notifications, Search } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>
        <img
          src="http://logos-download.com/wp-content/uploads/2016/05/Gmail_logo_icon.png"
          alt=""
        />{" "}
        <span className="header__gmail">GMAIL</span>
      </div>
      <div className="header__middle">
        <Search />
        <input placeholder="search mail" type="text"/>
        <ArrowDropDown className="header__inputCaret"/>
      </div>
      <div className="header__right">
      <IconButton>
        <Apps/>
      </IconButton>
      <IconButton>
        <Notifications/>
      </IconButton>
        <Avatar/>
        </div>
    </div>
  );
};

export default Header;
