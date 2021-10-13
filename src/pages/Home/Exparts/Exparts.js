import React from "react";
import { Container, Row } from "react-bootstrap";
import mechanic1 from "../../../images/expart/expart1.jpg";
import mechanic2 from "../../../images/expart/expart2.jpg";
import mechanic3 from "../../../images/expart/expart3.jpg";
import mechanic4 from "../../../images/expart/expart4.jpg";
import Expart from "../Expart/Expart";
const experts = [
  {
    img: mechanic1,
    name: "Andrew Smith",
    expertize: "-Engine Expert-",
  },
  {
    img: mechanic2,
    name: "John Anderson",
    expertize: "-Polish Expert-",
  },
  {
    img: mechanic3,
    name: "Zakaria Smith",
    expertize: "-Coloring Expert-",
  },
  {
    img: mechanic4,
    name: "Sakib Anderson",
    expertize: "-Alrounder Expert-",
  },
];
const Exparts = () => {
  return (
    <Container id="exparts" className="py-5">
      <Row className="g-3 ">
        <>
          <h1 className="text-center">Exparts</h1>
          {experts.map((expart, index) => (
            <Expart expart={expart} key={index}></Expart>
          ))}
        </>
      </Row>
    </Container>
  );
};

export default Exparts;
