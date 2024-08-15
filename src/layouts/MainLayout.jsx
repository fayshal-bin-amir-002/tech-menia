import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar";
import LoadingSpinner from "../components/Loader/LoadingSpinner";
import Footer from "../components/Footer";

const MainLayout = () => {

    const navigation = useNavigation();

    return (
        <div className="container mx-auto px-4 lg:px-0 bg-sky-50/30 min-h-screen">
            <NavBar></NavBar>
            {
                navigation.state === 'loading' ? <LoadingSpinner></LoadingSpinner> :
                    <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;