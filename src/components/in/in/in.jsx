import React, { useState } from 'react';
import Login from '../login/login';
import Signin from '../signin/signin';

function Authentication() {
  const [isNew, setIsNew] = useState(false);

  function toggleIsNew() {
    setIsNew(!isNew);
  }

  return (
    <div>
      <h2 onClick={toggleIsNew} className={isNew ? "active" : ""}>Log In</h2>
      <h2 onClick={toggleIsNew} className={!isNew ? "active" : ""}>Sign In</h2>
      {isNew ? <Signin /> : <Login />}
    </div>
  );
}

export default Authentication;
