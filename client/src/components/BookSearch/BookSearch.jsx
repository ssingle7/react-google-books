import React, { useEffect, useState } from "react";
import axios from "axios"


function SearchBooks(e) {
  e.preventDefault()
 
  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:&key=AIzaSyAfrpQXZXcliTIXdDGXtxQAW6Pi5iGb42w`
    )
    .then((response) => {
       console.log(response.data.items);

    });
}



 const BookSearch = () => {

//   const [bookSearch, setBookSearch] = useState("");

//   const handleInputChange = event => {
//     const { value} = event.target;
//     setBookSearch(value)
//   }


//   useEffect(() => {
    
//   }, []);

  return (
    <div className="mb-5">
      <form>
        <div className="mb-3">
          <label htmlFor="searchBook" className="form-label">
            Search for Book
          </label>
          <input
            // onChange={handleInputChange}
            // value={bookSearch}
            type="text"
            className="form-control mb-3 "
            id="searchBook"
          />
          <button type="submit" className="btn btn-danger float-right" onClick={SearchBooks}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookSearch;
