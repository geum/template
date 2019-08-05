import React from 'react';
import { Icon } from '@components';

/**
 * Schema Info Form Component
 *
 * @extends React.Component
 */
class Info extends React.Component {
  /**
   * Renders the component
   *
   * @return {Component}
   */
  render() {
    return (
      <div className={`admin-schema-info ${this.props.className}`}>
        <div className="form-group">
          <label>
            Singular <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Singular"
          />
        </div>

        <div className="form-group">
          <label>
            Plural <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Plural"
          />
        </div>

        <div className="form-group">
          <label>
            Keyword <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Keyword"
          />
        </div>

        <div className="form-group">
          <label>
            Group <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Group"
          />
        </div>

        <div className="form-group">
          <label>
            Icon
          </label>
          <Icon.Picker />
        </div>

        <div className="form-group">
          <label>
            Summary
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Summary"
          />
        </div>
      </div>
    )
  }
}

export default Info;
