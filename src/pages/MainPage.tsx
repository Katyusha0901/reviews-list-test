import React from "react";
import { Comment } from "../app/types";
import { Post } from "./witgets/Post";
import List from "rc-virtual-list";
import { useEffect, useState } from "react";

interface Props {
  comments: Comment[];
}

export const MainPage: React.FC<Props> = ({ comments }) => {
  // const [allComments, setAllComments] = useState<Comment[]>([]);

  // useEffect(() => {
  //   fetch("./data/comments.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setAllComments(data);
  //     })
  //     .catch((err) => console.log("Ошибка", err));
  // }, []);

  return (
    <List data={comments} height={800} itemHeight={100} itemKey="id">
      {(comment) => <Post commentInformation={comment} />}
    </List>
  );
};
