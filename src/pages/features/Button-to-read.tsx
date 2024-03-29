import { Link } from "react-router-dom";
import { Comment } from "../../app/types";

interface Props {
  commentInformation: Comment;
}

export const ButtonToRead: React.FC<Props> = ({ commentInformation }) => {
  return (
    <Link to={`/reviews-list-test/comment/${commentInformation.id}`}>
      <div className="button-to-read">Просмотр</div>
    </Link>
  );
};
