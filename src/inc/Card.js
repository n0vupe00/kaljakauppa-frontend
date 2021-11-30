import React from "react";
import './Card.css';

const Card = (product) => (
  <Col key={product.category_id}>
    <Card>
      <Header></Header>
      <Img variant="top" src={product.image}/>
      <Body>
        <Title>{product.name}</Title>
        <Text>{product.price}</Text>
        <Text>{product.alcohol}</Text>
        <Text>{product.size}</Text>
        <Button variant="primary">Add to cart</Button>
      </Body>
    </Card>
  </Col>
);

export default Card;
