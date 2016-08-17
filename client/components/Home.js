/* eslint-disable no-unused-vars, prefer-template */

import React from 'react';
import axios from 'axios';
import AddTask from './AddTask.js';
import TaskItem from './TaskItem.js';

class Home extends React.Component {

  constructor() {
    super();
    this.state = { tasks: [] };
    this.createTask = this.createTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  createTask(task) {
    console.log('JOE!!', task);
    axios.post('http://localhost:9001/api/tasks', task)
      .then((rsp) => {
        const newTask = rsp.data;
        const d = new Date(newTask.due);
        // console.log('trying: ', d.toUTCDateString());
        newTask.due = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        this.setState({ tasks: [...this.state.tasks, newTask] });
        // console.log('OMG !!', task);
      });
  }

  deleteTask(e) {
    console.log('omg exactly');
  }

  render() {
    return (
      <div>
        <h1>Tasks</h1>
        <AddTask create={this.createTask} />
        <hr />
        <hr />
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Category</td>
              <td>Due</td>
              <td>Complete?</td>
              <td />
            </tr>
          </thead>
          <tbody>
            {this.state.tasks.map((s, i) => <TaskItem key={i} delete={this.deleteTask} task={s} />)}
          </tbody>
        </table>
      </div>);
  }
}

export default Home;
