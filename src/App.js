import React, { useState, useEffect } from "react";
import { FormControl, Input, IconButton, Typography } from "@material-ui/core";
import { db } from "./firebase";
import firebase from "firebase";
import Message from "./Message";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: username,
      text: input,
    });
    setInput("");
  };

  useEffect(() => {
    setUsername(prompt("Enter you name : "));
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            message: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="App">
      <img
        alt=""
        src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100"
      />
      <Typography variant="h3" gutterBottom>
        Facebook Messenger
      </Typography>
      <Typography variant="h5">Welcome {username || "Guest"}...</Typography>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Send a Message"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map((message) => (
          <Message
            key={message.id}
            username={username}
            message={message.message}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
