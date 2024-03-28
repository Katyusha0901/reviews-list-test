interface RoutesType {
  mainPage: string;
  commentPage: string;
}

export const RoutesObject: RoutesType = {
  mainPage: "/reviews-list-test",
  commentPage: "/reviews-list-test/product/:productId",
};
