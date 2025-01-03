import React from "react";

const MovieIdPage = async ({ params }) => {
  const { id } = await params
  return (
    <div>
      <h1>Movie page with id : {id}</h1>
    </div>
  );
};

export default MovieIdPage;