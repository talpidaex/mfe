import React, { useEffect, useRef } from "react";
import { mount } from "auth/AuthApp";
import { useHistory } from "react-router-dom";

const AuthApp = ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: remotePathName }) => {
        history.push(remotePathName);
      },
      onSignIn,
    });
    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref}></div>;
};

export default AuthApp;
