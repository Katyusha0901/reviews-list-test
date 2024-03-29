import { Comment } from "../../app/types";
import { ButtonToRead } from "../features/Button-to-read";
import "../../app/styles/Post.css";

interface Props {
  commentInformation: Comment;
}

export const Post: React.FC<Props> = ({ commentInformation }) => {
  return (
    <div className="post">
      <div className="post__title">
        {commentInformation.id}.{commentInformation.name}
      </div>
      <div className="post__text">{commentInformation.body}</div>
      <ButtonToRead commentInformation={commentInformation} />
    </div>
  );
};
