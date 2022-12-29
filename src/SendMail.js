import { Close, ErrorSharp } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import "./SendMail.css";
import { useForm } from "react-hook-form";
import { closeSendMessage } from "./features/mailSlice";
import { useDispatch } from "react-redux";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
const SendMail = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    db.collection("email").add({
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log(data);

    dispatch(closeSendMessage());
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail__close"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors && <p>{errors}</p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        <textarea
          name="message"
          placeholder="Message..."
          type="text"
          className="sendMail__message"
          {...register("message", { required: true })}
        />

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
