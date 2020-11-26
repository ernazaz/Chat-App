import React, { useState } from "react";
import classes from "./Text-box.module.scss";

const TextBox = props => {
  const [message, setMessage] = useState("");

  const handleKeypress = e => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setMessage("");
    props.saveText(message, props.email);
  };

  return (
    <form className="d-flex mt-2">
      <div>
        <img
          className={classes.avatar}
          src={`https://eu.ui-avatars.com/api/?name=${props.email}`}
        />
      </div>

      <input
        value={message}
        className={`form-control ${classes.chatInput}`}
        placeholder="Type a message..."
        type="text"
        onChange={event => setMessage(event.target.value)}
      />
      <button
        className={`btn btn-primary ${classes.sendButton}`}
        onClick={handleSubmit}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default TextBox;
