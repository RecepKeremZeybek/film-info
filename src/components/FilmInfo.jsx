// src/components/FilmInfo.jsx

import React from "react";

const FilmInfo = ({ film }) => {
  return (
    <div>
      <h2>Title: {film.title}</h2>
      <p>Description: {film.body}</p>
      <p>Tags: {film.tags.joim(", ")}</p>
      <p>Rate: {film.rate}</p>
    </div>
  );
};

export default FilmInfo;
