/* eslint-disable jsx-quotes, react/prop-types, jsx-a11y/label-has-for */
/* eslint-disable react/no-string-refs, no-useless-constructor */

import React from 'react';


class AddTask extends React.Component {

  constructor() {
    super();
    this.prepAndSendTask = this.prepAndSendTask.bind(this);
  }

  prepAndSendTask() {
    this.props.create({
      name: this.refs.name.value,
      category: this.refs.category.value,
      due: this.refs.due.value,
    });
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <label>Name</label>
          <input className="form-control" ref="name" type="text" />
        </div>
        <div className="form-group">
          <label>Category</label>
          <input className="form-control" ref="category" type="text" />
        </div>
        <div className="form-group">
          <label>Due</label>
          <input type="date" name="due" ref="due" />
        </div>
        <button className="btn btn-primary" onClick={this.prepAndSendTask} >Create</button>
      </div>);
  }
}

export default AddTask;
