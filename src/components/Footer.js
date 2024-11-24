import React from 'react';

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>&copy; {currentYear} My Portfolio. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
