import { useParams } from "react-router-dom";
import { ButtonBack } from "./features/Button-back";
import { allComments } from "./MainPage";
import "../app/styles/CommentPage.css";

export function CommentPage() {
  const { commentId } = useParams<string>();
  const id: number = Number(commentId);

  return (
    <div className="comment-page">
      <div className="comment-page__title">
        {allComments[id - 1].id}. {allComments[id - 1].name}
      </div>
      <div className="comment-page__text">{allComments[id - 1].body}</div>
      <div className="comment-page__email">{allComments[id - 1].email}</div>
      <ButtonBack />
    </div>
  );
}
