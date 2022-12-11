import { Button, TextField } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import "../css/style.css";
import SendIcon from "@mui/icons-material/Send";
import ChatRoomHeader from "./chatroomHeader";

export default function ChatRoom({ handleCloseChatRoom, chatRoomData }) {
  console.log(chatRoomData);
  if (chatRoomData.wallpaper != null) {
    document.body.style.backgroundImage = `url("${chatRoomData.wallpaper}")`;
  }

  const [messages, setMessages] = useState([
    { text: "hi sent", uid: 1, photoURL: null },
    { text: "hi recived", uid: 2, photoURL: null },
  ]);

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    setFormValue("");
    let tempData = messages;
    tempData.push({
      text: formValue,
      uid: 1,
      photoURL: null,
    });
    setMessages(tempData);
    scrollToBottom();
  };

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="chatroomheader">
        <ChatRoomHeader handleCloseChatRoom={handleCloseChatRoom} user={chatRoomData?.user} />
      </div>
      {/* Chat Area */}
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.uid} message={msg} />)}
        <span ref={messagesEndRef}></span>
      </main>

      <form onSubmit={sendMessage}>
        <TextField
          focused
          color="success"
          className="textarea"
          fullWidth
          id="filled-multiline-flexible"
          // multiline
          // maxRows={4}
          variant="standard"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <Button
          type="submit"
          disabled={!formValue}
          endIcon={<SendIcon />}
        ></Button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === 1 ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL ||
            "https://gifdb.com/images/high/cute-sad-bubu-dudu-panda-kick-4cn5usy9xip1m59y.webp"
          }
        />
        <p>{text}</p>
      </div>
    </>
  );
}
