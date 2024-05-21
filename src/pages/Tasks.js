import React from 'react';
import TaskList from '../components/TaskList';

const Tasks = () => {

  const storeinfo = localStorage.getItem('userEmail');
  const isLoggedIn = !!storeinfo;
  const tasks = [
    { id: 1, title: 'Survey Task', description: 'Complete a survey and earn points.', image: 'https://od.lk/s/NjFfODI4MTUwOTZf/person%20survey.jpeg' , href:[isLoggedIn ? "#/survey-tasks" : "#/signup"]},
    { id: 2, title: 'Watch Video', description: 'Watch a short video and earn points.', image: 'https://od.lk/s/NjFfODI4MTUxMDhf/person%20watch.jpg' , href: [isLoggedIn ? "#/tasks/provider2" : "#/signup"]},
    { id: 3, title: 'Sign Up Offer', description: 'Sign up for services and earn points.', image: 'https://od.lk/s/NjFfODI4MTUwOTVf/people%20dollar.jpg', href:[isLoggedIn ? "#/cpalead" : "#/signup"]},
  ];

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Available Tasks</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Tasks;
