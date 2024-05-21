import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [userFullName, setUserName] = useState('');
  const [userPoints, setUserPoints] = useState(0);
  const firstName2 = userFullName.split(' ')[0];

  useEffect(() => {
    const storedUserName = localStorage.getItem('userFullName');
    const storedUserPoints = localStorage.getItem('userPoints') || 500; // Default to 0 if not found
    if (storedUserName) {
      setUserName(storedUserName);
      setUserPoints(storedUserPoints);
    }
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <img src="https://od.lk/s/NjFfODI4MjEzNjhf/SmilingEmojiSunglasses.jpg" alt="Profile" className="img-fluid rounded-circle mb-3" />
              <h5 className="card-title">Hai , {firstName2}!</h5>
              <p className="card-text">$CUAN : {userPoints}</p>
              <a href="#/profile" className="btn btn-primary btn-sm">View Profile</a>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Dashboard</h5>
              <p className="card-text">Here you can see your recent activity and tasks.</p>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Task</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Complete profile</td>
                      <td>Completed</td>
                      <td>2024-05-19</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>First survey</td>
                      <td>Pending</td>
                      <td>2024-05-20</td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
              <a href="#/tasks" className="btn btn-primary">View All Tasks</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
