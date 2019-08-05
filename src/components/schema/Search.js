import React from 'react';
import { Link } from 'react-router-dom';
import { Common, Schema } from '@components';

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
      modal: true,
      schemas: [{ group: 'API' }, {}, {}, { group: 'REST' }, {}, {}],
      tab: 'fields'
    }
  }

  /**
   * On modal tab change
   *
   * @param  {String} tab
   * @param  {Event} e
   * @return {undefined}
   */
  handleTabClick = (tab, e) => {
    this.setState({ tab });
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
              <Link to="#" className="btn btn-purple my-1">
                <i className="fa fa-eye"></i>
              </Link>
              &nbsp;
              <Link to="#" className="btn btn-purple my-1">
                <i className="fa fa-copy"></i>
              </Link>
              &nbsp;
              <Link to="#" className="btn btn-purple my-1">
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
                <Link className="d-inline-block ml-5 text-purple text-small" to="#">
                  <i className="fas fa-cloud-upload-alt"></i> IMPORT
                </Link>
                <Link className="d-inline-block ml-5 text-purple text-small" to="#">
                  <i className="fas fa-cloud-download-alt"></i> EXPORT
                </Link>
                <Link className="btn btn-primary d-inline-block ml-5 px-4 py-2" to="#" >
                  <i className="fas fa-plus"></i> ADD
                </Link>
              </div>
            </div>

            <div className="row mt-3 overflow-x-scroll">
              <div className="col">
                <table className="table table-striped">
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
            position: 'fixed'
          }}
          onClose={() => this.setState({ modal: !this.state.modal })}
          visible={this.state.modal}
        >
          <div className="admin-schema-modal d-flex flex-column">
            <div className="header row d-flex align-items-center p-4">
              <div className="col-md">
                <h3>Create Schema</h3>
              </div>
              <div className="col-md">
                <button
                  className="close"
                  onClick={() => this.setState({ modal: !this.state.modal })}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>

            <div className="tabs row mt-3">
              <div className="col-md">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${this.state.tab === 'info' ? 'active' : ''}`}
                      to="#"
                      onClick={this.handleTabClick.bind(this, 'info')}
                    >
                      Info
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${this.state.tab === 'fields' ? 'active' : ''}`}
                      to="#"
                      onClick={this.handleTabClick.bind(this, 'fields')}
                    >
                      Fields
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${this.state.tab === 'relations' ? 'active' : ''}`}
                      to="#"
                      onClick={this.handleTabClick.bind(this, 'relations')}
                    >
                      Relations
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="content mt-3 px-4 py-3">
              <Schema.Form.Info
                className={this.state.tab === 'info' ? '' : 'd-none'}
              />

              <Schema.Form.Fields
                className={this.state.tab === 'fields' ? '' : 'd-none'}
              />
            </div>

            <div className="d-flex p-3 mt-auto">
              <button className="btn btn-danger mx-1 w-50 py-2">
                <i className="fa fa-trash"></i> CANCEL
              </button>
              <button className="btn btn-primary mx-1 w-50 py-2">
                <i className="fa fa-check"></i> SAVE
              </button>
            </div>
          </div>
        </Common.Modal>
      </div>
    )
  }
}

export default Search;
