import React from "react";
import { Comment } from "../app/types";

export default function App() {
  fetch("./data/comments.json")
    .then((response) => response.json())
    .then((data) => {
      const allComments: Comment[] = data;
    });
    
  return <div className="App"></div>;
}
