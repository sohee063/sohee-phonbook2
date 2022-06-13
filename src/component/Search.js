import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

const Search = () => {
  return (
    <Form>
      <Row>
        <Col lg={10}>
          <Form.Control type="email" placeholder="Enter email" />
        </Col>
        <Col lg={2}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Search;
