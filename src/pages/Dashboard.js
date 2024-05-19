import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <img src="https://od.lk/s/NjFfODI4MjEyODZf/pngtree-cool-glass-profile-emoji-png-image_14132428.png" alt="Profile" className="img-fluid rounded-circle mb-3" />
              <h5 className="card-title">Welcome, User!</h5>
              <p className="card-text">Points: 150</p>
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
