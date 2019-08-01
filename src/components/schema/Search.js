import React from 'react';
import { Link } from 'react-router-dom';
import { Common } from '@components';

/**
 * Schema Search Component
 *
 * @extends React.Component
 */
class Search extends React.Component {
  /**
   * Sets the initial state
   *
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      modal: false,
      schemas: [{ group: 'API' }, {}, {}, { group: 'REST' }, {}, {}]
    }
  }

  /**
   * Renders schema row
   *
   * @return {Component}
   */
  renderSchemas() {
    let { schemas } = this.state;

    return schemas.map((value, index) => {
      return (
        <React.Fragment key={index}>
          {value.group && (
            <tr className="group">
              <td className="text-right">
                  <i className="fas fa-caret-down"></i>
              </td>
              <td colSpan="2"><strong>{value.group}</strong></td>
            </tr>
          )}

          <tr>
            <td className="actions nowrap">
              <Link to="#" className="btn btn-secondary my-1">
                <i className="fa fa-eye"></i>
              </Link>
              &nbsp;
              <Link to="#" className="btn btn-secondary my-1">
                <i className="fa fa-copy"></i>
              </Link>
              &nbsp;
              <Link to="#" className="btn btn-secondary my-1">
                <i className="fa fa-edit"></i>
              </Link>
            </td>
            <td className="detail">
              <Link to="#" className="d-block mb-2" onClick={() => {
                this.setState({ modal: !this.state.modal });
              }}>
                <i className="fa fa-mobile-alt"></i>&nbsp;
                Application
              </Link>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque suscipit sagittis risus. Aenean fermentum
                est nec odio tempus, a suscipit ligula malesuada.
                Mauris pulvinar pretium nulla at fringilla.
              </p>
            </td>
            <td className="relations nowrap">
              <span className="d-block">
                1:1 profile
              </span>
              <span className="d-block">
                1:N scope
              </span>
              <span className="d-block">
                1:N webhook
              </span>
            </td>
          </tr>
        </React.Fragment>
      )
    });
  }

  /**
   * Renders the component
   *
   * @return {Component}
   */
  render() {
    return (
      <div className="container-fluid admin-schema">
        <div className="heading row">
          <div className="col-md p-3">
            <i className="fas fa-database"></i>&nbsp;
            <span className="text">16 Schemas</span>
          </div>
        </div>

        <div className="content row">
          <div className="col-md bg-white m-3 py-3 overflow-hidden">
            <div className="actions row">
              <div className="col-md">
                <div className="btn-group" role="group">
                  <button
                    type="button"
                    className="btn btn-purple px-4 py-2"
                  >
                    ACTIVE
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-purple px-4 py-2"
                  >
                    INACTIVE
                  </button>
                </div>
              </div>

              <div className="col-md d-flex align-items-center justify-content-end">
                <a className="d-inline-block ml-5 text-purple text-small" href="#">
                  <i className="fas fa-cloud-upload-alt"></i> IMPORT
                </a>
                <a className="d-inline-block ml-5 text-purple text-small" href="#">
                  <i className="fas fa-cloud-download-alt"></i> EXPORT
                </a>
                <Link to="#" className="btn btn-primary d-inline-block ml-5 px-4 py-2">
                  <i className="fas fa-plus"></i> ADD
                </Link>
              </div>
            </div>

            <div className="row mt-3 overflow-x-scroll">
              <div className="col">
                <table className="table table-striped table-responsive">
                  <thead>
                    <tr>
                      <th>ACTIONS</th>
                      <th>SCHEMA</th>
                      <th>RELATIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderSchemas()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <Common.Modal
          direction="right"
          containerStyle={{
            height: '100%',
            width: '400px',
          }}
          onClose={() => this.setState({ modal: !this.state.modal })}
          visible={this.state.modal}
        >
          <div className="admin-schema-modal p-3">
            <div className="row d-flex align-items-center">
              <div className="col-md">
                <h3>Create Schema</h3>
              </div>
              <div className="col-md">
                <button
                  className="close"
                  onClick={() => this.setState({ modal: !this.state.modal })}
                >
                  <i className="fa fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        </Common.Modal>
      </div>
    )
  }
}

export default Search;
