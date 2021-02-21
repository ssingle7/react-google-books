import React from "react";

const BookSearch = () => {
  return (
    <div className="mb-5">
      <form>
        <div className="mb-3">
          <label htmlFor="searchBook" className="form-label">
            Search for Book
          </label>
          <input
            //   onChange
            //   value
            type="text"
            className="form-control mb-3 "
            id="searchBook"
          />
          <button type="submit" className="btn btn-danger float-right">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookSearch;
