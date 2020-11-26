import React, { useState, useEffect } from "react";
import classes from "./Main-window.module.scss";
import "./Text-box/Text-box";
import TextBox from "./Text-box/Text-box";

const MainWindow = props => {
  const [email, setEmail] = useState();
  const avatarUrl = "https://eu.ui-avatars.com/api/?name=";

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    if (userEmail) {
      setEmail(userEmail);
    } else {
      setEmail("");
    }
  }, []);

  return (
    <div>
      <h1 className="mt-3">Chat Window</h1>
      <div className="row justify-content-center mt-3">
        <div className="col-md-7 col-sm-12 ">
          {props.totalChat.length ? (
            <div className={classes.detailedChat}>
              {props.totalChat.map((chat, index) => (
                <div className={`d-flex ${classes.detail}`} key={index}>
                  <div className="avatar">
                    <img src={avatarUrl + chat.email} />
                  </div>
                  <div className={classes.message}>
                    <p>
                      <b>{chat.email}</b>
                    </p>
                    <p>{chat.text}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mb-3">
              <h3>No Comments</h3>
            </div>
          )}
          {email ? (
            <TextBox saveText={props.postText} email={email} className="mt-5" />
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default MainWindow;
