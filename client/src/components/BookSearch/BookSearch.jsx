import React from "react";

const BookSearch = () => {
  return (
    <>
      <form>
        <div class="mb-3">
          <label for="searchBook" class="form-label">
            Search for Book
          </label>
          <input
            //   onChange
            //   value
            type="text"
            class="form-control mb-3 "
            id="searchBook"
          />
          <button type="submit" class="btn btn-primary float-right">
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default BookSearch;
