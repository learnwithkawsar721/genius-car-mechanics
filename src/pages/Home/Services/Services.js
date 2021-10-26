import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Url from "../../../utilits/url";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const url = Url("services");
  console.log(url);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [url]);
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
