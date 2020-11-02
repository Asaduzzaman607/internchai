import React from 'react';

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <a class="navbar-brand" href="#">InternChai</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Find an Internship <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Contributors</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Contact Us</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Post an Internship</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
};

export default NavBar;