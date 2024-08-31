import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({ totalUsers: 0, rejectedUsers: 0, approvedUsers: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://localhost:5000/dashboard');
        setStats(response.data);
      } catch (error) {
        setError('There was an error fetching the stats!');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Dashboard</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px' }}>
        <div>
          <h3>Total Users</h3>
          <h1>{stats.totalUsers}</h1>
        </div>
        <div>
          <h3>Approved Users</h3>
          <h1>{stats.approvedUsers}</h1>
        </div>
        <div>
          <h3>Rejected Users</h3>
          <h1>{stats.rejectedUsers}</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
