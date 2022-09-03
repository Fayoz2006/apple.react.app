import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./../../Pages/MainPage";

export const Views = () => {
  return (
    <Routes>
      <Route
        path="/store"
        element={
          <main>
            <h1>hello world</h1>
          </main>
        }
      />
      <Route index element={<MainPage />} />
    </Routes>
  );
};
