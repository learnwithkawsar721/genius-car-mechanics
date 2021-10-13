import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, price, img, description } = service;
  return (
    <Col xs={12} sm={12} md={6} lg={4}>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <Card.Title className="text-danger">${price}</Card.Title>
            <Link to={`/booking/${id}`} className="btn btn-sm btn-success">
              Booking
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
