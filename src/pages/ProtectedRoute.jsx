// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";
// import { useAuth0 } from "@auth0/auth0-react";
import SpinnerFullPage from "../components/SpinnerFullPage";
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ component }) {
  // const { isAuthenticated } = useAuth0();
  // const navigate = useNavigate();

  // useEffect(
  //   function () {
  //     if (!isAuthenticated) {
  //       navigate("/");
  //     }
  //   },
  //   [isAuthenticated, navigate]
  // );
  // return isAuthenticated ? children : null;

  const Component = withAuthenticationRequired(component, {
    returnTo: "/app/cities",
    onRedirecting: () => (
      <div className="page-layout">
        <SpinnerFullPage />
      </div>
    ),
  });

  return <Component />;
}
