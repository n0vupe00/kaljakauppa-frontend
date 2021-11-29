import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "@material-ui/core";
import Col from "react-bootstrap/Col";

const Product = ({ product }) => (
  <Col xs={12} md={6} lg={4} key={product.category_id}>
    <Card style={{ width: "18rem" }}>
      <Card.Header></Card.Header>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Card.Text>{product.alcohol}</Card.Text>
        <Card.Text>{product.size}</Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  </Col>
);

export default Product;
