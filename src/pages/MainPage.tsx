import React from "react";
import { Comment } from "../app/types";
import { Post } from "./witgets/Post";
import List from "rc-virtual-list";
import { useEffect, useState } from "react";

interface Props {
  comments: Comment[];
}

export const MainPage: React.FC<Props> = ({ comments }) => {
  return (
    <List data={comments} height={800} itemHeight={100} itemKey="id">
      {(comment) => <Post commentInformation={comment} />}
    </List>
  );
};
