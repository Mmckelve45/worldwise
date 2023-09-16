// import AppNav from "../components/AppNav";
import Map from "../components/Map";
import Sidebar from "../components/SideBar";
import UserTile from "../components/UserTile";
// import UserTile from "../components/UserTile";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <UserTile />
    </div>
  );
}

export default AppLayout;
