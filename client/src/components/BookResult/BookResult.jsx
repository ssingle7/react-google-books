import React from "react";
import "./BookResult.css"

const BookResult = (props) => {
  return (
    <div className="mt-5">
      <h1>Results</h1>

      <div className="card">
        <div className="card-body">
          <div id="buttons" className="float-right">
            <a href={props.volumeInfo.infoLink} className="btn btn-outline-primary mr-3" target="_blank" rel="noopener noreferrer">
              VIEW
            </a>
            <a href="#" className="btn btn-outline-success">
              SAVE
            </a>
          </div>
          <h5 className="card-title">{props.volumeInfo.title}</h5>

          <p className="card-text">{props.volumeInfo.authors}</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-5">
                    <img
                        className="full-img"
                      src={props.volumeInfo.imageLinks}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <p className="card-text">
                      {props.volumeInfo.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookResult;
