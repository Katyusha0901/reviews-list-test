import { useParams } from "react-router-dom";
import { ButtonBack } from "./features/Button-back";
import { useEffect, useState } from "react";
import { Comment } from "../app/types";
import "../app/styles/CommentPage.css";

interface Props {
  comments: Comment[];
}

export const CommentPage: React.FC<Props> = ({ comments }) => {
  const { commentId } = useParams<string>();
  const id: number = Number(commentId);

  return (
    <div className="comment-page">
      <div className="comment-page__title">
        {comments[id - 1].id}. {comments[id - 1].name}
      </div>
      <div className="comment-page__text">{comments[id - 1].body}</div>
      <div className="comment-page__email">{comments[id - 1].email}</div>
      <ButtonBack />
    </div>
  );
};
