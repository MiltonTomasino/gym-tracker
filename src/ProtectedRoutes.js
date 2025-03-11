import { useEffect, useState } from "react";
import { Outlet, Route, useNavigate, useLocation } from "react-router-dom";
import LoginPage from './pages/LoginPage';

async function checkAuth() {
    const result = await fetch('/api/check-session', {
        credentials: 'include', // Include credentials (cookies) in the request
    });
    const apiRes = await result.json();
    const isLoggedIn = apiRes.isLoggedIn;
    return isLoggedIn;
}

const ProtectedRoutes = ({ setIsLoggedIn }) => {
    const [isAuth, setIsAuth] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAuthStatus = async () => {
            const isLoggedIn = await checkAuth();
            setIsAuth(isLoggedIn);

            if (!isLoggedIn) {
                // Save the current location if the user is not authenticated
                navigate('/login', { state: { from: location.pathname } });
            }
        };

        fetchAuthStatus();
    }, [location.pathname, navigate]);

    return isAuth ? <Outlet /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />;
}

export default ProtectedRoutes;
