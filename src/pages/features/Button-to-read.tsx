import { Link } from "react-router-dom";
import { RoutesObject } from "../../app/RoutesObject";
import { Comment } from "../../app/types";

interface Props {
  commentInformation: Comment;
}

export const ButtonToRead: React.FC<Props> = ({ commentInformation }) => {
  return (
    <Link to={`/comment/${commentInformation.id}`}>
      <div className="button-to-read">Read more</div>
    </Link>
  );
};
