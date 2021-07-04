import React, { forwardRef } from "react";
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import "./Message.css";

const Message = forwardRef(({ username, message }, ref) => {
  const isUser = username === message.username;
  return (
    <div ref={ref} className={`message__card ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        {!isUser && (
          <CardHeader
            subheader={message.username || "Unknown User"}
            subheaderTypographyProps={{ align: "left" }}
          />
        )}
        <CardContent>
          <Typography variant="h5" component="h2">
            {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
