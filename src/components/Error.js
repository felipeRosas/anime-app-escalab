
import React from "react";
import { func, string } from "prop-types";
import { Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Error = ({ img, title, action }) => {
  const history = useHistory();
  const checkIfHasActionProp = () => !!action && action();

  const onClick = () => {
    checkIfHasActionProp();
    history.push("/");
  };

  return (
    <Container className="error-wrapper">
      <div className="d-grid gap-2 justify-content-center">
      <img alt="error-img" src={img} />
      <h1 className="error-title">{title}</h1>
      <Button type="primary" size='lg' onClick={onClick}>
      Ir a inicio
      </Button>
      </div>
    </Container>
  );
};

Error.propTypes = {
    img: string.isRequired,
    title: string.isRequired,
    action: func,
};

Error.defaultProps = { func: () => {} };

export default Error;
