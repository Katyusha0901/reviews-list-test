import { Comment } from "../../app/types";
import { ButtonToRead } from "../features/Button-to-read";
import "../../app/styles/Post.css";
import { forwardRef } from "react";

interface Props {
  commentInformation: Comment;
}

export const Post = forwardRef<HTMLDivElement, Props>(({ commentInformation }, ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="post__title">
        {commentInformation.id}.{commentInformation.name}
      </div>
      <div className="post__text">{commentInformation.body}</div>
      <ButtonToRead commentInformation={commentInformation} />
    </div>
  );
})
