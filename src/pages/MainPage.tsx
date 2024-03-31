import React, { useState } from "react";
import { Comment } from "../app/types";
import { Post } from "./witgets/Post";
import List from "rc-virtual-list";

interface Props {
  comments: Comment[];
  visibleComments: Comment[];
  setVisibleComments: (value: React.SetStateAction<Comment[]>) => void;
}

export const MainPage: React.FC<Props> = ({
  comments,
  visibleComments,
  setVisibleComments,
}) => {
  const ref = window.innerHeight - 25;
  function onScroll(virtualScroll: { x: number; y: number }) {
    if (visibleComments.length === comments.length) {
      return;
    }
    const additionalComments = comments.slice(
      visibleComments.length,
      visibleComments.length + 50
    );

    const lengthOfVisibleAndRemainingList: number =
      visibleComments.length * 141 - virtualScroll.y - window.innerHeight;

    if (lengthOfVisibleAndRemainingList < 1000) {
      let ref: boolean = false;
      if (ref === false) {
        setVisibleComments([...visibleComments, ...additionalComments]);
        ref = true;
      }
    }
  }
  return (
    <List
      data={visibleComments}
      height={ref}
      itemHeight={141}
      itemKey="id"
      onVirtualScroll={onScroll}
    >
      {(comment) => <Post commentInformation={comment} />}
    </List>
  );
};
