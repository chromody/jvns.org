import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profileImage from '../assets/profile.jpg';

const AboutMe = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <Image src={profileImage} roundedCircle fluid />
        </Col>
        <Col md={6}>
          <h2>About Me</h2>
          <p>
           

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum lacinia scelerisque. Donec consequat lectus ante, ut faucibus felis tristique non. Vestibulum lobortis sit amet quam ut congue. Phasellus eu odio volutpat, vestibulum tellus id, aliquet est. Nulla facilisi. Quisque laoreet eros auctor dolor malesuada, eu faucibus velit condimentum. Morbi tempus ac quam a placerat. Sed dignissim odio massa, eu scelerisque turpis efficitur eu. Maecenas finibus elit non augue ultricies, id sagittis odio auctor. Nullam at purus id magna aliquet pellentesque quis accumsan lacus. Integer euismod ipsum orci, ut ultrices tellus faucibus in. In elit felis, viverra cursus molestie non, pellentesque sed arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas tincidunt sit amet est eu imperdiet. 
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
