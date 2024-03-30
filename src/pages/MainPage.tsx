import React from "react";
import { Comment } from "../app/types";
import { Post } from "./witgets/Post";
import List from "rc-virtual-list";

interface Props {
  comments: Comment[];
}

export const MainPage: React.FC<Props> = ({ comments }) => {
  return (
    <List data={comments} height={720} itemHeight={140.8} itemKey="id">
      {(comment) => <Post commentInformation={comment} />}
    </List>
  );
};
