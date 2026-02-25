import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ children }) {
    const { authUser, initializing } = useAuth();

    if (initializing) {
        return <p>Loading...</p>;
    }

    if (!authUser) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default ProtectedRoute;
