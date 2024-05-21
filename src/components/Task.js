import React from 'react';

const Task = ({ task }) => {
  return (
    <div className="card mb-4 shadow-sm">
      <img src={task.image} className="card-img-top" alt={task.title} />
      <div className="card-body">
        <h5 className="card-title">{task.title}</h5>
        <p className="card-text">{task.description}</p>
        <a href={task.href} className="btn btn-primary">View Task</a>
      </div>
    </div>
  );
};

export default Task;
