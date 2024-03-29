import { Link } from "react-router-dom";
import { RoutesObject } from "../../app/RoutesObject";

export function ButtonBack() {
  return (
    <Link to={RoutesObject.mainPage}>
      <div className="button-back">Назад</div>
    </Link>
  );
}
