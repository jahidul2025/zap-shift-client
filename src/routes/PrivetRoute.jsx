import { Navigate, useLocation } from "react-router";
import UseAuth from "../hooks/UseAuth";

const PrivetRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    const location = useLocation();

    if (loading) {
        return <div>
            <span className="loading loading-infinity loading-xl"></span>
        </div>
    }
    if (!user) {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    return children;
};

export default PrivetRoute;