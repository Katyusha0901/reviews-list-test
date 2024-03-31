import React from "react";
import { Comment } from "../app/types";
import { Post } from "./witgets/Post";
import List from "rc-virtual-list";

interface Props {
  comments: Comment[];
  visibleComments: Comment[];
  setVisibleComments: (value: React.SetStateAction<Comment[]>) => void;
}

const windowHeight: number = window.innerHeight - 25;
let isChangedVisibleComments: boolean = false;

export const MainPage: React.FC<Props> = ({
  comments,
  visibleComments,
  setVisibleComments,
}) => {
  function onScroll(virtualScroll: { x: number; y: number }) {
    if (visibleComments.length === comments.length) {
      return;
    }
    const additionalComments = comments.slice(
      visibleComments.length,
      visibleComments.length + 50
    );

    const lengthOfVisibleAndRemainingList: number =
      visibleComments.length * 141 - virtualScroll.y - windowHeight;

    if (lengthOfVisibleAndRemainingList < 1000) {
      if (!isChangedVisibleComments) {
        setVisibleComments([...visibleComments, ...additionalComments]);
        isChangedVisibleComments = true;
      }
    }
  }
  return (
    <List
      data={visibleComments}
      height={windowHeight}
      itemHeight={141}
      itemKey="id"
      onVirtualScroll={onScroll}
    >
      {(comment) => <Post commentInformation={comment} />}
    </List>
  );
};
