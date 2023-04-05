import React, { useState } from 'react';

const Account = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Account</h1>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Account;