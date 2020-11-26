import React from "react";
import "./Chat.scss";
import Sidebar from "../Sidebar/Sidebar";
import MainWindow from "./Main-window/Main-window";
import data from "./data.json";

class Chat extends React.Component {
  state = {
    chatList: [],
    roomIndex: null
  };
  roomIndex = 1;

  componentDidMount() {
    const parsedData = JSON.parse(localStorage.getItem("chatList"));
    const chatList = this.state.chatList;
    if (parsedData) {
      this.setState({ chatList: parsedData });
    } else {
      this.setState({ chatList: data.chatList });
    }
  }

  onHandleRoom = chatRoom => {
    let index = this.state.roomIndex;
    index = this.state.chatList.findIndex(room => room.name === chatRoom.name);
    this.setState({ roomIndex: index });
  };

  createChat = chatName => {
    const chatList = [...this.state.chatList];
    const newChat = { name: chatName, chats: [] };
    chatList.push(newChat);
    this.setState((this.state.chatList = chatList));
  };

  onPostMessage = (message, email) => {
    const index = this.state.roomIndex;
    const msg = {
      email: email,
      text: message
    };
    const chats = [...this.state.chatList[index].chats];
    chats.push(msg);
    this.setState((this.state.chatList[index].chats = chats));
    localStorage.setItem("chatList", JSON.stringify(this.state.chatList));
  };

  render() {
    let chatWindow = null;

    if (this.state.chatList[this.state.roomIndex]) {
      chatWindow = (
        <div>
          <MainWindow
            postText={this.onPostMessage}
            totalChat={this.state.chatList[this.state.roomIndex].chats}
          />
        </div>
      );
    }

    return (
      <div className="d-flex">
        <div className="sidebar-width">
          <Sidebar
            saveRoom={this.createChat}
            selectRoom={this.onHandleRoom}
            chatList={this.state.chatList}
          />
        </div>

        <div className="chat-window">{chatWindow}</div>
      </div>
    );
  }
}
export default Chat;
