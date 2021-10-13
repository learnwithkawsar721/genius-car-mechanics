import React from "react";
import { useEffect } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import ChangeTitle from "../../../hooks/ChangeTitle";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { user, signInGoogle, setUser } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const rediract = location.state?.from || "/";
  const loginGoogle = () => {
    signInGoogle()
      .then((result) => {
        history.push(rediract);
      })
      .catch((error) => setUser({}));
  };
  useEffect(() => {
    if (user.email) {
      history.push("/");
    }
  }, [user, history]);
  return (
    <>
      <ChangeTitle pageTitle="Login" />
      <Container>
        <Row className="pt-5">
          <div className="col-6 mx-auto">
            <Card className="p-3">
              <Card.Title className="text-center">Login</Card.Title>
              <Card.Body className="text-center">
                <Button variant="success" onClick={loginGoogle}>
                  Google
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Login;
