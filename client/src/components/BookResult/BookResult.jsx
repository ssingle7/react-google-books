import React from "react";

const BookResult = () => {
  return (
    <div className="mt-5">
        <br /><hr />
      <h1>Results</h1>

      <div className="card">
        <div className="card-body">
        <div id="buttons" className="float-right">
            <a href="#" className="btn btn-primary mr-3">
              VIEW
            </a>
            <a href="#" className="btn btn-success">
              SAVE
            </a>
          </div>
          <h5 className="card-title">Title</h5>


          <p className="card-text">Author</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-3">
                    <img
                      src="https://picsum.photos/200/200?grayscale"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
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
