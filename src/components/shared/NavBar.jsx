import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <div className="navbar p-0">
                <div className="flex-1">
                    <Link to={"/"} className="w-36 lg:w-40">
                        <img src="./logo.png" alt="logo" />
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end ">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://i.postimg.cc/cJ3DWwSx/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <Link className="justify-between">
                                    Profile
                                </Link>
                            </li>
                            <li><button>Logout</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;