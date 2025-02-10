import { Outlet } from "react-router";
import styles from "./Layout.module.scss";

export const Layout = () => {
    return <>
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.top}>
                    <img src="/img/Rutube.png" className={styles.logo} alt="logo"/>
                </div>
                <div className={styles.gradientLine}>
                    <img src="/img/Line.png" className={styles.line} alt="line"/>
                </div>
            </header>
            <Outlet/> 
        </div>
    </>
};
