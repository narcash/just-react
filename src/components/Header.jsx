import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
const Header = () => {
  return (
    <div className='header'>
      <h1>React Router DOM</h1>
      <ul>
        <li>
          <Link to='/posts'>Posts</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
        <li>
          <Link to='/todos'>Todos</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
