import React from 'react';
import { Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

/**
 * Schema Fields Form Component
 *
 * @extends React.Component
 */
class Fields extends React.Component {
  grid = 8;

  /**
   * Sets the initial form state
   *
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      fields: [
        {
          name: 'name',
          label: 'Name'
        },
        {
          name: 'age',
          label: 'Age'
        },
        {
          name: 'gender',
          label: 'Gender'
        }
      ]
    };
  }

  /**
   * Returns the draggable item style
   * based on the current drag state
   * this also make sure that the style
   * changes are smooth.
   *
   * @param  {Boolean} isDragging
   * @param  {Object}  draggableStyle
   * @return {Object}
   */
  getItemStyle(isDragging, draggableStyle) {
    return {
      userSelect: 'none',
      margin: `0 0 ${this.grid}px 0`,

      // change background colour if dragging
      background: isDragging ? '#36354A' : '#F5F6FA',
      ...draggableStyle
    }
  }

  /**
   * Field reordering helper
   *
   * @param  {Array}  list
   * @param  {Number} startIndex
   * @param  {Number} endIndex
   * @return {Array}
   */
  reorder(list, startIndex, endIndex) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);

    result.splice(endIndex, 0, removed);

    return result;
  };

  /**
   * On field drag end
   *
   * @param  {Object} result
   * @return {undefined}
   */
  handleDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const fields = this.reorder(
      this.state.fields,
      result.source.index,
      result.destination.index
    );

    this.setState({
      fields
    });
  }

  /**
   * Renders the component
   *
   * @return {Component}
   */
  render() {
    return (
      <div className={`admin-schema-fields ${this.props.className}`}>
        <DragDropContext onDragEnd={this.handleDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="fields"
              >
                {this.state.fields.map((item, index) => (
                  <Draggable key={item.name} draggableId={item.name} index={index}>
                    {(provided, snapshot) => (
                      <div
                        className={`field row p-2 ${snapshot.isDragging ? 'dragging' : ''}`}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={this.getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <div className="col-md d-flex flex-column justify-content-center">
                          <h2 className="field-label">{item.label}</h2>
                          <h6 className="field-name">{item.name}</h6>
                        </div>
                        <div className="field-actions col-md d-flex align-items-center justify-content-end">
                          <Link className="text-secondary m-1" to="#">
                            <i className="fa fa-cog"></i>
                          </Link>
                          <Link className="text-danger m-1" to="#">
                            <i className="fa fa-trash"></i>
                          </Link>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    )
  }
}

export default Fields;
