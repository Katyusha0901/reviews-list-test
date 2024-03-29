interface RoutesType {
  mainPage: string;
  commentPage: string;
}

export const RoutesObject: RoutesType = {
  mainPage: "/",
  commentPage: "/comment/:commentId",
};
