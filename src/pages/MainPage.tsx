import React from "react";
import { Comment } from "../app/types";
import { Post } from "./witgets/Post";
import List from "rc-virtual-list";

export let allComments: Comment[] = [];
export function MainPage() {
  fetch("./data/comments.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((comment: Comment) => {
        allComments.push(comment);
      });
    })
    .catch((err) => console.log("Ошибка", err));
  console.log(allComments);
  const booksJSX = (
    <List data={allComments} height={3100} itemHeight={100} itemKey="id">
      {(comment) => <Post commentInformation={comment} />}
    </List>
  );

  return <div>{booksJSX}</div>;
}
