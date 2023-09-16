import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import { useAuth0 } from "@auth0/auth0-react";
import UserTile from "./UserTile";

export default function PageNav() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/app",
      },
      authorizationParams: {
        screen_hint: "signup",
        // redirect_uri: "http://localhost:5173/app",
      },
    });
  };

  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        {/* <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li> */}
        <li>
          <button
            className={styles.login}
            onClick={() =>
              loginWithRedirect({
                appState: {
                  returnTo: "/app",
                },
                authorizationParams: {
                  // screen_hint: "signup",
                  redirect_uri: "http://localhost:5173/app/cities",
                },
              })
            }
          >
            Login
          </button>
        </li>
        <li>
          <button className={styles.login} onClick={handleSignUp}>
            Sign up
          </button>
        </li>
        <li>{isAuthenticated && <UserTile />}</li>
      </ul>
    </nav>
  );
}
