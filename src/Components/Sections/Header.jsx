import React from 'react';
import logo from '../../Images/favicon.jpeg'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="/">
          <img
            src={logo} // Replace with your logo path
            alt=""
            className='logo'
          />
        </a>
       
        <form className="d-flex flex-grow-1 mx-2" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          
          <button className="btn btn-outline-light me-2" type="submit">Search</button>
          <a href="">SignIn</a>
        </form>
       
      </div>
    </nav>
  );
};

export default Header;
