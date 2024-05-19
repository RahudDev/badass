import React from 'react';
import UserProfile from '../components/UserProfile';

const Profile = () => {
  const user = { name: 'John Doe', email: 'john.doe@example.com', points: 150 };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">User Profile</h1>
      <UserProfile user={user} />
    </div>
  );
};

export default Profile;
