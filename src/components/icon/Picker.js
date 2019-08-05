import React from 'react';
import IconData from '@components/icon/icons';

/**
 * Blur timeout
 *
 * @type {Function}
 */
let timeout = null;

/**
 * FontAwesome Icon Picker
 *
 * @extends React.Component
 */
class Picker extends React.Component {
  /**
   * Sets the picker state
   *
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    // format icons
    let data = this.formatIcons(IconData);

    // initial state
    this.state = {
      focused: false,
      data,
      icons: data,
      query: null,
      selected: null
    }
  }

  /**
   * Formats icon data
   *
   * @param  {Object} data
   * @return {Object}
   */
  formatIcons(data) {
    let icons = {};

    // iterate on each icons
    Object.keys(data).map(key => {
      // get the current icon
      let icon = data[key];
      // icon prefix
      let prefix = '';

      // solid icon?
      if (icon.styles.indexOf('solid') !== -1) {
        prefix = 'fas';
      // brand icon?
      } else if(icon.styles.indexOf('brands') !== -1) {
        prefix = 'fab';
      // regular icon?
      } else if(icon.styles.indexOf('regular') !== -1) {
        prefix = 'far';
      }

      // create flat format
      icons[key] = {
        key,
        label: icon.label,
        terms: icon.search.terms.join(' '),
        unicode: icon.unicode,
        prefix
      }

      return icons[key];
    });

    return icons;
  }

  /**
   * On icon list container click
   *
   * @param  {Event} e
   * @return {undefined}
   */
  handleClick = (e) => {
    // button was clicked?
    // if (e.target.nodeName === 'I'
    //   || e.target.nodeName === 'BUTTON'
    // ) {
    //   return;
    // }

    // clear menu timeout
    clearTimeout(timeout);
    // keep focusing on input
    this.input.focus();
  }

  /**
   * On input focused
   *
   * @param  {Event} e
   * @return {undefined}
   */
  handleFocus = (e) => {
    // focused?
    let focused = e.type === 'focus';

    // set focused state
    if (focused) {
      return this.setState({ focused: true });
    }

    // unfocused?
    timeout = setTimeout(() => {
      // set focused state
      this.setState({ focused: false, icons: this.state.data });
      // reset input value
      this.input.value = '';
    }, 200);
  }

  /**
   * On input filter change
   *
   * @param  {Event} e
   * @return {undefined}
   */
  handleChange = (e) => {
    // get the icon data
    let { data } = this.state;
    // get the filter
    let filter = e.currentTarget.value.toLowerCase();
    // holds the result
    let results = {};

    // map each icons
    Object.keys(data).map(key => {
      // get the icon detail
      let icon = data[key];
      // collect icon search terms
      let terms = icon.terms;
      // append label to terms
      terms = (icon.label + ' ' + terms).toLowerCase();

      var regex = false;
      try {
          // create pattern matcher
          regex = new RegExp('(^|\\W)' + filter, 'g');
      } catch (e) {
          regex = false;
      }

      // filter has match?
      if (regex !== false && terms.match(regex)) {
        results[key] = icon;
      }

      return results;
    });

    // update icon lists
    this.setState({ icons: results });
  }

  /**
   * On icon button click
   *
   * @param  {String} key
   * @param  {Event} e
   * @return {undefined}
   */
  handleIconSelect = (key, e) => {
    // get icons and selected icon
    let { icons, selected } = this.state;

    // key selected? toggle it
    if (selected && selected.key === key) {
      key = null;
    }

    // update selected icon state
    this.setState({ selected: icons[key] });
  }

  /**
   * Render icon buttons
   *
   * @return {Component}
   */
  renderIcons() {
    // get icons and selected icon
    let { icons, selected } = this.state;

    // on each icons
    return Object.keys(icons).map(key => {
      // get icon
      let icon = icons[key];
      // active?
      let active = false;

      // if icon is active
      if (selected && selected.key === key) {
        active = true;
      }

      return (
        <button
          className={`icon-button border ${active ? 'btn-purple' : ''}`}
          key={key}
          title={`${icon.label} - "${icon.prefix} fa-${key}"`}
          onClick={this.handleIconSelect.bind(this, key)}
        >
          <i className={`${icon.prefix} fa-${key}`}></i>
        </button>
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
      <div className="icon-picker">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              {this.state.selected ? (
                <i className={`${this.state.selected.prefix} fa-${this.state.selected.key}`}></i>
              ) : '?'}
            </span>
          </div>

          <input
            type="text"
            className="form-control"
            onFocus={this.handleFocus}
            onBlur={this.handleFocus}
            onChange={this.handleChange}
            placeholder={
              this.state.selected && this.state.selected.label
            }
            ref={ input => this.input = input }
          />
        </div>

        <div
          className={`icon-list p-1 border ${!this.state.focused  ? 'd-none' : ''}`}
          onClick={this.handleClick}
        >
          {this.renderIcons()}
        </div>
      </div>
    )
  }
}

export default Picker;
