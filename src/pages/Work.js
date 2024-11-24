import React from 'react';
import { Container } from 'react-bootstrap';
import Github from '../assets/icons8-github-480.svg';

const Work = () => {
  return (
    <Container className="text-center my-5">
      <a href="https://github.com/chromody" target="_blank" rel="noopener noreferrer">
        <img
          src={Github}
          style={{ width: '500px', height: 'auto' }} // Object with camelCase keys
          alt="Work Example"
        />
      </a>
    </Container>
  );
};

export default Work;
