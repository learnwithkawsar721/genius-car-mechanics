import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
    
      <Container className="pt-5" id="services">
        <Row className="g-3">
          <>
            <h1 className="text-center">Services</h1>

            {services.map((service, index) => (
              <Service service={service} key={index} />
            ))}
          </>
        </Row>
      </Container>
    </>
  );
};

export default Services;
