import React, { useEffect, useState } from "react";
import BookSearch from "../components/BookSearch/BookSearch";
import BookResult from "../components/BookResult/BookResult";
import axios from "axios";

function BookInfo(book) {
  return (
    // <BookSearch />
    console.log()
  );
}

const Search = () => {
  const [books, setBooks] = useState([]);

  function SearchBooks() {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:romeo&key=AIzaSyAfrpQXZXcliTIXdDGXtxQAW6Pi5iGb42w`
      )
      .then((response) => {
        console.log(response.data.items);
        setBooks(response.data.items);
        //  const arrayOfBooks = response.data.items

        //  console.log(arrayOfBooks);

        //  arrayOfBooks.map(BookInfo)

        //  const bookTitle = (response.data.items.volumeInfo.title)
        //  console.log(bookTitle)

        //  const bookAuthor = (response.data.volumeInfo.authors)
        //  console.log(bookAuthor)

        //  const bookDescription = (response.data.volumeInfo.description)
        //  console.log(bookDescription)

        //  const bookImage = (response.data.volumeInfo.imageLinks.thumbnail)
        //  console.log(bookImage)

        //  const bookLink = (response.data.saleInfo.buyLink)
        //  console.log(bookLink)
        //  console.log(response.data.items[0].volumeInfo.title);
        //  console.log(response.data.items[0].volumeInfo.authors[0]);
        //  console.log(response.data.items[0].volumeInfo.imageLinks.thumbnail);
      });
  }

  useEffect(() => {
    SearchBooks();
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="bg-light p-5">
            <h1>Book Search</h1>
            <BookSearch />
          </div>
          {books.map((book) => (
            <BookResult {...book} 
              key={book.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
