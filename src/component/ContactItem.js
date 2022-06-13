import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactItem = ({ item }) => {
  console.log("아이템", item);
  return (
    <Row>
      <Col lg={2}>
        <img
          width={70}
          src="https://t1.daumcdn.net/tistoryfile/fs2/12_10_10_18_blog47051_attach_0_14.jpg?original"
        />
      </Col>
      <Col lg={10}>
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
