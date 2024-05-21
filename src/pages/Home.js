import React from 'react';
import TaskList from '../components/TaskList';

const Home = () => {

const storeinfo = localStorage.getItem('userEmail');  
const isLoggedIn = !!storeinfo;
  const tasks = [
    { id: 1, title: 'Survey Task', description: 'Complete a survey and earn points.', image: 'https://od.lk/s/NjFfODI4MTUwOTZf/person%20survey.jpeg', href:[isLoggedIn ? "#/survey-tasks" : "#/signup"]},
    { id: 2, title: 'Watch Video', description: 'Watch a short video and earn points.', image: 'https://od.lk/s/NjFfODI4MTUxMDhf/person%20watch.jpg', href:[isLoggedIn ? "#/tasks/provider2" : "#/signup"]},
    { id: 3, title: 'Sign Up Offer', description: 'Sign up for services and earn points.', image: 'https://od.lk/s/NjFfODI4MTUwOTVf/people%20dollar.jpg', href:[isLoggedIn ? "https://fastsvr.com/list/1724" : "#/signup"]},
  ];

  return (
    <div className="container mt-5">
      <div className="jumbotron bg-light">
        <h1 className="display-4">Welcome to Cuan</h1>
        <p className="lead">Earn rewards by completing simple tasks!</p>
        <hr className="my-4" />
        <p>Sign up now and start earning points.</p>
        <a className="btn btn-primary btn-lg" href="#/SignUp" role="button">Sign Up</a>
      </div>
      <h2 className="mb-4">Available Tasks</h2>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Home;
