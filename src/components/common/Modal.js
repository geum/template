import React from 'react';
import posed, { PoseGroup } from 'react-pose';

/**
 * Animated Container
 *
 * @type {Component}
 */
const Container = posed.div({
  enter: {
    // figure out on what direction
    // we should came from on enter
    x: (props) => {
      // get direction and dimensions
      let { direction, dimensions } = props;
      // get the current width
      let width = dimensions.measure().width;

      // if left or right
      if (direction === 'left'
        || direction === 'right'
      ) {
        return 0;
      }
    },
    opacity: 1,
    delay: 300,
  },
  // figure out on what direction
  // we should go on exit
  exit: {
    x: (props) => {
      // get direction and dimensions
      let { direction, dimensions } = props;
      // get the current width
      let width = dimensions.measure().width;

      // if direction is not left or right
      if (direction !== 'left'
        && direction !== 'right'
      ) {
        return 0;
      }

      // right direction?
      if (direction === 'right') {
        return width;
      // left direction?
      } else {
        return -width;
      }
    },
    opacity: 0,
    transition: { duration: 150 }
  }
});

/**
 * Animated Overlay
 *
 * @type {Component}
 */
const Overlay = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

/**
 * Common Modal Component
 *
 * @extends React.Component
 */
class Modal extends React.Component {
  /**
   * Renders the component
   *
   * @return {Component}
   */
  render() {
    return (
      <PoseGroup>
        {this.props.visible && [
          <Overlay
            key="overlay"
            className="common-modal-overlay"
            onClick={this.props.onClose}
          />,
          <Container
            key="container"
            className={`common-modal-container modal-${this.props.direction}`}
            style={{...this.props.containerStyle}}
            direction={this.props.direction}
          >
            {this.props.children}
          </Container>
        ]}
      </PoseGroup>
    )
  }
}

export default Modal;
