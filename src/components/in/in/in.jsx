import React, { useState } from 'react';
import style from './in.module.css';
import Login from '../login/login';
import Signin from '../signin/signin';


function Authentication() {
  const [isNew, setIsNew] = useState(false);

  const toggleIsNew = () => {
    setIsNew(!isNew);
  }

  return (
    <>
    <div>
    <div className={'row'}>
        <div className={isNew ? '' : 'active'} onClick={toggleIsNew}>
        <h2>Log In</h2>
        </div>
        <div className={isNew ? 'active' : ''} onClick={toggleIsNew}>
        <h2>Sign In</h2>
        </div>
    </div>
    <div>
      {isNew ? <Signin /> : <Login />}
    </div>
    </div>
    </>
  );
}

export default Authentication;
