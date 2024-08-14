import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const NavBar = () => {

    const { user, userLogOut } = useAuth();

    const navLinks = [
        { title: "About Us", path: "/about" },
        { title: "Contact Us", path: "/contact" }
    ]

    const handleLogOut = async () => {
        await userLogOut()
            .then(() => {
                toast.success("Logged out succesfully.");
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    return (
        <div className="navbar bg-base-100 p-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            navLinks.map((item) => <li key={item.title}><Link>{item.title}</Link></li>)
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost w-36 lg:w-40">
                    <img src="./logo.png" alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    {
                        navLinks.map((item) => <li key={item.title}><Link>{item.title}</Link></li>)
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user?.photoURL || 'https://i.postimg.cc/cJ3DWwSx/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg'} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                            </a>
                        </li>
                        <li><button onClick={handleLogOut}>Logout</button></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NavBar;