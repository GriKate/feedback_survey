import { Outlet } from "react-router";


export const Layout = () => {
    return <>
        <div className="container">
            <h1>RUTUBE</h1>
            <Outlet/>
        </div>
    </>
};
