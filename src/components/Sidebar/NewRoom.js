import React, { useState } from "react";

const NewRoom = props => {
  const [createNewRoom, setCreateNewRoom] = useState(false);
  const [roomName, setRoomName] = useState("");

  const onHandleCreate = () => {
    setCreateNewRoom(!createNewRoom);
  };

  const createRoom = () => {
    props.createChat(roomName);
    setRoomName("");
    setCreateNewRoom(false);
  };

  return (
    <div className="form-group">
      {!createNewRoom ? (
        <div>
          {" "}
          <button
            className="btn btn-primary mt-5"
            onClick={onHandleCreate}
            aria-label="Left Align"
          >
            Create New Chat Room
          </button>
        </div>
      ) : (
        <div className="mr-3">
          <input
            value={roomName}
            placeholder="Enter Chat Room Name"
            onChange={event => setRoomName(event.target.value)}
            type="text"
            className="form-control my-3 "
          />
          <div className="d-flex justify-content-around">
            <button
              disabled={!roomName}
              onClick={createRoom}
              type="button"
              className="btn btn-primary"
            >
              {" "}
              Save
            </button>
            <button
              type="button"
              onClick={() => setCreateNewRoom(false)}
              className="btn btn-secondary"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewRoom;
