import { Navigate } from "react-router";
import UseAuth from "../hooks/UseAuth";

const PrivetRoute = ({ children }) => {
    const { user, loading } = UseAuth();

    if (loading) {
        return <div>
            <span className="loading loading-infinity loading-xl"></span>
        </div>
    }
    if (!user) {
        return <Navigate to='/login'></Navigate>
    }
    return children;
};

export default PrivetRoute;