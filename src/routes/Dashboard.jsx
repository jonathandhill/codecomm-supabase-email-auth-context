import React, { useState } from 'react';
import { UserAuth } from '../context/AuthContext';

const Dashboard = ({ setCurrentPage }) => {
  const { session, signOut } = UserAuth();
  const [error, setError] = useState(null);

  const handleSignOut = async (e) => {
    e.preventDefault();

    try {
      await signOut();
      setCurrentPage('signin');
    } catch (err) {
      setError('An unexpected error occurred.');
    }
  };

  console.log(session);
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome, {session?.user?.email}</h2>
      <div>
        <p
          onClick={handleSignOut}
          className="hover:cursor-pointer  border inline-block px-4 py-3 mt-4 "
        >
          Sign out
        </p>
      </div>
      {error && <p className="text-red-600 text-center pt-4">{error}</p>}
    </div>
  );
};

export default Dashboard;
