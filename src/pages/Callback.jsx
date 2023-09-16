// import AppNav from "../components/AppNav";
import Map from "../components/Map";
import Sidebar from "../components/SideBar";
// import UserTile from "../components/UserTile";
import styles from "./AppLayout.module.css";

export const CallbackPage = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      {/* <UserTile /> */}
    </div>
  );
};
