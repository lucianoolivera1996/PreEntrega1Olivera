import React from 'react';
import Form from './Form';
import Sections from './Sections';
import Dropdown from './Dropdown';

const Navbar = () => {
  const listDropdown = ['About us', 'Contact', 'Join us'];
  return (
    <>
      <nav class='navbar navbar-expand-lg bg-light'>
        <div class='container-fluid'>
          <a class='navbar-brand' href='#'>
            My Gallery Art
          </a>
          <div class='collapse navbar-collapse' id='navbarNav'>
            <ul class='navbar-nav'>
                  <Sections />
                  <Dropdown links={listDropdown}/>
            </ul>
          </div>
          <Form searchTxt='Search products'/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
