import React from 'react';

function TaskList({ tasks, title }) {
  return (
    <div>
      <h2>{title}</h2>
      {tasks.map(task => (
        <div key={task._id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
