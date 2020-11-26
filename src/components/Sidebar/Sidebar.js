import React, { useState, useEffect } from "react";

import classes from "./Sidebar.module.scss";
import NewRoom from "./NewRoom";

const Sidebar = props => {
  const [selectedIndex, setSelectedIndex] = useState("");
  const [email, setEmail] = useState();

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    if (userEmail) {
      setEmail(userEmail);
    }
  }, []);

  const onChatSelect = (chat, index) => {
    props.selectRoom(chat);
    setSelectedIndex(index);
  };

  return (
    <div className={classes.sidebar}>
      {email ? <NewRoom createChat={props.saveRoom} /> : ""}

      <p className={classes.chatTitle}>Chat Rooms</p>

      {props.chatList ? (
        <div>
          <div className="">
            {props.chatList.map((chat, index) => (
              <ul key={index}>
                <li
                  onClick={() => onChatSelect(chat, index)}
                  className={`${classes.chatItem} ${
                    selectedIndex === index ? `${classes.activeChat}` : ``
                  }`}
                >
                  {chat.name}
                </li>
              </ul>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Sidebar;
