import React from "react";
import { Routes, Route } from "react-router-dom";
import { RoutesObject } from "./RoutesObject";
import { MainPage } from "../pages/MainPage";
import { CommentPage } from "../pages/CommentPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path={RoutesObject.mainPage} element={<MainPage />}></Route>
        <Route
          path={RoutesObject.commentPage}
          element={<CommentPage />}
        ></Route>
      </Routes>
    </>
  );
}
