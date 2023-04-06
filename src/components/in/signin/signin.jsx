import React, { useState } from 'react';

const SignIn = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstname">Firstname</label>
      <input type="text" id="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />

      <label htmlFor="lastname">Lastname</label>
      <input type="text" id="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} required />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label htmlFor="birthdate">Birthdate</label>
      <input type="date" id="birthdate" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} required />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />


      <button type="submit">Submit</button>
    </form>
  );
};

export default SignIn;