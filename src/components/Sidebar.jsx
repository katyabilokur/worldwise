import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "../pages/AppNav";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.footer}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Kate Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
