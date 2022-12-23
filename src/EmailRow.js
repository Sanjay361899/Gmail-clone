import React from "react";
import "./EmailRow.css";
import {
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
const EmailRow = ({ id, title, subject, description, time }) => {
  const navigate = useNavigate();
  const getMail = () => {
    navigate("/mail");
  };
  return (
    <div onClick={getMail} className="emailRow">
      <div className="emailRow__option">
        {/* <IconButton> */}
        <Checkbox />
        {/* </IconButton> */}
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <div className="emailRow__title">{title}</div>
      <div className="emailRow__message">
        <h4>
          {subject}
          <span className="emailRow__description">{description}</span>
        </h4>
      </div>
      <div className="emailRow__time">{time}</div>
    </div>
  );
};

export default EmailRow;
