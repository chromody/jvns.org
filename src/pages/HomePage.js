import React from 'react';
import { Container, Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container className="text-center my-5">
      <h1>Welcome to My Portfolio</h1>
      <p className="lead">
        Discover my work and learn more about my skills and experiences.
      </p>
      <Button variant="primary" href="/about">Learn More About Me</Button>
    </Container>
  );
};

export default HomePage;
