import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="" />
          <input type="text" placeholder="Whats happening?" />
        </div>
        <input
          type="text"
          className="tweetBox_imageInput"
          placeholder="Enter profile pic image url:Optional"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
