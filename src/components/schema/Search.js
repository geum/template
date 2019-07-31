import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="heading row">
          <div className="col-md p-3">
            <i className="fas fa-database"></i>&nbsp;
            <span className="text">16 Schemas</span>
          </div>
        </div>

        <div className="content row">
          <div className="col-md bg-white m-3 py-3">
            <div className="actions row">
              <div className="col-md">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-purple px-4 py-2">ACTIVE</button>
                  <button type="button" class="btn btn-outline-purple px-4 py-2">INACTIVE</button>
                </div>
              </div>

              <div className="col-md d-flex align-items-center justify-content-end">
                <a className="d-inline-block ml-5 text-purple" href="#">
                  <i className="fas fa-cloud-upload-alt"></i> IMPORT
                </a>
                <a className="d-inline-block ml-5 text-purple" href="#">
                  <i className="fas fa-cloud-download-alt"></i> EXPORT
                </a>
                <Link to="#" className="btn btn-primary d-inline-block ml-5 px-4 py-2">
                  <i className="fas fa-plus"></i> ADD
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Search;
