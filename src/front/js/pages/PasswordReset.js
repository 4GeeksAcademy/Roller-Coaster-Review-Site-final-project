import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    // Remember to put API request HERE I STAY FORGETTING!!
     
    setMessage('Password recovery email sent successfully.');
  };

  return (
    <Container style={{ backgroundColor: 'white' }}>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2>Password Recovery</h2>
          <Form onSubmit={handlePasswordReset}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{ backgroundColor: 'blue', color: 'white' }}
            >
              Recover Password
            </Button>
          </Form>
          {message && <p className="mt-3">{message}</p>}
        </Col>
      </Row>
    </Container>
  );
};

export default PasswordReset;