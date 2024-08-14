import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="container mx-auto px-4 lg:px-0">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;