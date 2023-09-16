import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { getConfig } from "./config";

// eslint-disable-next-line react/prop-types
export const Auth0ProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate();

  //   const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  //   const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  //   const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;
  //   const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

  //   const onRedirectCallback = (appState) => {
  //     history.push(
  //       appState && appState.returnTo ? appState.returnTo : window.location.pathname
  //     );
  //   };
  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  const config = getConfig();

  const providerConfig = {
    domain: config.domain,
    clientId: config.clientId,
    onRedirectCallback,

    authorizationParams: {
      redirect_uri: window.location.origin,
      ...(config.audience ? { audience: config.audience } : null),
    },
  };

  if (!(config.domain && config.clientId && config.audience)) {
    return null;
  }

  return <Auth0Provider {...providerConfig}>{children}</Auth0Provider>;
};
