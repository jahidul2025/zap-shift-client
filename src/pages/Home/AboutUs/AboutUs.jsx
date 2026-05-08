import { NavLink, Outlet } from "react-router"

const AboutUs = () => {
    const tabs = <>
        <li><NavLink to="/aboutUs/story" className="pb-2 px-4">Our Story</NavLink></li>
        <li><NavLink to="/aboutUs/mission" className="pb-2 px-4">Our Mission</NavLink></li>
        <li><NavLink to="/aboutUs/success" className="pb-2 px-4">Our Success</NavLink></li>
        <li><NavLink to="/aboutUs/team" className="pb-2 px-4">Team & Others</NavLink></li>
    </>

    return (
        <div>
            <div className="p-9">
                <h2 className="text-4xl font-bold mb-4 mt-10">About Us</h2>
                <p>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br />packages to business shipments — we deliver on time, every time.</p>
            </div>

            <div className="navbar-center p-9  lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {tabs}
                </ul>
            </div>
            <div className="p-9">
                <Outlet />
            </div>
        </div>
    );
};

export default AboutUs;