import React from 'react';
import { Link } from 'react-router-dom';

const Task = ({ task }) => {
  return (
    <div className="card mb-4 shadow-sm">
      <img src={task.image} className="card-img-top" alt={task.title} />
      <div className="card-body">
        <h5 className="card-title">{task.title}</h5>
        <p className="card-text">{task.description}</p>
        <Link to={`/tasks/${task.id}`} className="btn btn-primary">View Task</Link>
      </div>
    </div>
  );
};

export default Task;
