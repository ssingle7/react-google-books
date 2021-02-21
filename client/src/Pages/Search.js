import React from "react";
import BookSearch from "../components/BookSearch/BookSearch";
import BookResult from "../components/BookResult/BookResult";

const Search = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>This is my search page</h1>
          <BookSearch />
          <BookResult />
        </div>
      </div>
    </div>
  );
};

export default Search;
