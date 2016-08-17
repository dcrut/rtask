/* eslint-disable jsx-quotes, react/prop-types, jsx-a11y/label-has-for */
/* eslint-disable react/no-string-refs, no-useless-constructor */

import React from 'react';

export default (props) => (
  <tr>
    <td>{props.task.name}</td>
    <td>{props.task.category}</td>
    <td>{props.task.due}</td>
    <td>{props.task.isComplete}</td>
    <td><span onClick={props.delete} >delete?</span></td>
  </tr>
);
