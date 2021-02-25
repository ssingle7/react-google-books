import React, { useEffect, useState } from "react";
import API from "../../utils/API";

const BookSearch = () => {
  const [bookSearch, setBookSearch] = useState("");
  const [formObject, setFormObject] = useState({
    title: "",
    authors: "",
    description: "",
    infoLink: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormObject({...formObject, [name]: value})
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    API.getBooks(bookSearch)
    .then(res => setBookSearch(res.data))
    .catch(err => console.log(err));
    // console.log("search books");
  };

  return (
    <div className="mb-5">
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="searchBook" className="form-label">
            Search for Book
          </label>
          <input
            name="title"
            onChange={handleInputChange}
            value={formObject.title}
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
