import React from "react";
import { Routes, Route } from "react-router-dom";
import { RoutesObject } from "./RoutesObject";
import { MainPage } from "../pages/MainPage";
import { CommentPage } from "../pages/CommentPage";
import { useEffect, useState } from "react";
import { Comment } from "./types";

export function App() {
  const [allComments, setAllComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch("./data/comments.json")
      .then((response) => response.json())
      .then((data) => {
        setAllComments(data);
      })
      .catch((err) => console.log("Ошибка", err));
  }, []);

  return (
    <>
      <Routes>
        <Route
          path={RoutesObject.mainPage}
          element={<MainPage comments={allComments} />}
        ></Route>
        <Route
          path={RoutesObject.commentPage}
          element={<CommentPage comments={allComments} />}
        ></Route>
      </Routes>
    </>
  );
}
