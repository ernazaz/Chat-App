import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

const Navbar = () => {
  const [email, setEmail] = useState('');
  const history = useHistory();

  const logout = () => {
    localStorage.setItem('email', '');
    setEmail();
    history.push('/');
  };

  useEffect(() => {
    const userEmail = localStorage.getItem('email');
    if (userEmail) setEmail(userEmail);
  });

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="collapse navbar-collapse">
          <a className="navbar-brand">Chat-App</a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <Link className="nav-link" to="/chat">
              Chats
            </Link>
          </ul>
          {email ? (
            <ul className="navbar-nav">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
              <li className="nav-item">
                <a className="nav-link" onClick={logout}>
                  Logout
                </a>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav">
              <Link className="nav-link" to="/">
                Login
              </Link>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
