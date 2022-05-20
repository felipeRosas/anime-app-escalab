import React, { Component } from "react";
import Error from "../components/Error";
import img from "../assets/static/img/error.png";

export const errorBoundary = (WrappedComponent) => {
  const resetError = (context) => context.setState({ error: false });

  return class extends Component {
    state = { error: false };
    static getDerivedFromError = () => ({ error: true });

    render() {
      const { props, state } = this;
      const { error } = state;
      const title = "Ocurrio un error";
      const action = () => resetError(this);
      const ErrorRender = <Error img={img} title={title} action={action} />;
      const NormalRender = <WrappedComponent {...props} />;
      return error ? ErrorRender : NormalRender;
    }
  };
};
