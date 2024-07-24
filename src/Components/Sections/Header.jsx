import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="/">
          <img
            src="" // Replace with your logo path
            alt="BookYourGround"
          />
        </a>

        <form className="d-flex flex-grow-1 mx-2" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success me-2" type="submit">Search</button>
          <a className="btn btn-outline-success" href="/signin">Sign In</a>
        </form>
      </div>
    </nav>
  );
};

export default Header;
