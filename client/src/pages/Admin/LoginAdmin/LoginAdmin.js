import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import "./LoginAdmin.scss";
import { LoginForm } from "../../../components/Admin";

export function LoginAdmin() {
  return (
    <div className="login-admin">
      <Container>
        <Row>
          <Col>
            <Card bg="light" className="mb-3" border="primary">
              <Card.Header as="h5"> Linocruz Dev. </Card.Header>
              <Card.Body>
                <Card.Title className="text-center mt-3">
                  <h2>Welcome to the CRM</h2>
                </Card.Title>

                <LoginForm />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
