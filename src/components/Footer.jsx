import React from 'react';

function Footer() {
  return (
    <footer className="footer py-3  ">
      <div className="container text-center">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Vempalli Ashok Kumar. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
