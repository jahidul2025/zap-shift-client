import { Link, NavLink } from "react-router";
import Logo from "../../../components/Logo/Logo";
import UseAuth from "../../../hooks/UseAuth";

const Navbar = () => {
    const links = <>
        {/* <li><NavLink to='/'>Home</NavLink></li> */}
        <li><NavLink to='services'>services</NavLink></li>
        <li><NavLink to='aboutUs'>About Us</NavLink></li>
        <li><NavLink to='coverage'>coverage</NavLink></li>
        <li><NavLink to='raider'>Be a Raider</NavLink></li>
    </>

    const { user, logOut } = UseAuth();

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="max-lg:collapse  lg:mb-10 bg-white shadow-sm w-full rounded-md">
            <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
            <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
            <div className="collapse-title navbar">
                <div className="navbar-start">
                    <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <button className="btn btn-ghost text-xl"><Logo></Logo></button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <a onClick={handleLogout} className="btn">logout</a>
                            : <Link className="btn" to="/login">Log in</Link>
                    }
                    
                </div>
            </div>

            <div className="collapse-content lg:hidden z-1">
                <ul className="menu">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;