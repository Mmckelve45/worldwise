import { useAuth0 } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";
import styles from "./User.module.css";

function UserTile() {
  const { logout, user } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };
  console.log(user);

  // const user = FAKE_USER;
  // const { user, logout } = useAuth();
  // const navigate = useNavigate();
  // function handleClick() {
  //   logout();
  //   navigate("/");
  // }
  // if (!user) {
  //   return null;
  // }

  return (
    <div className={styles.user}>
      <img src={user.picture} alt={user.name} />
      <span>Welcome, {user.name}</span>
      {/* <button onClick={handleClick}>Logout</button> */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserTile;

/*
CHALLENGE

1) Add `AuthProvider` to `App.jsx`
2) In the `Login.jsx` page, call `login()` from context
3) Inside an effect, check whether `isAuthenticated === true`. If so, programatically navigate to `/app`
4) In `User.js`, read and display logged in user from context (`user` object). Then include this component in `AppLayout.js`
5) Handle logout button by calling `logout()` and navigating back to `/`
*/
