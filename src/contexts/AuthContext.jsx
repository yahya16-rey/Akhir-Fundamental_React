import { createContext, useContext, useEffect, useState } from "react";
import {
    login as loginAPI,
    register as registerAPI,
    getUserLogged,
} from "../api/notes-api";

import {
    putAccessToken,
    getAccessToken,
    removeAccessToken,
} from "../utils/local-storage";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [authUser, setAuthUser] = useState(null);
    const [initializing, setInitializing] = useState(true);

    useEffect(() => {
        async function fetchUser() {
            const token = getAccessToken();

            if (token) {
                const { data, error } = await getUserLogged();
                if (!error) {
                    setAuthUser(data);
                }
            }

            setInitializing(false);
        }

        fetchUser();
    }, []);

    async function login({ email, password }) {
        const result = await loginAPI({ email, password });

        if (!result.error) {
            putAccessToken(result.data.accessToken);

            const user = await getUserLogged();
            setAuthUser(user.data);
        }

        return result;
    }


    async function register({ name, email, password }) {
        const result = await registerAPI({ name, email, password });
        return result;
    }

    function logout() {
        removeAccessToken();
        setAuthUser(null);
    }

    return (
        <AuthContext.Provider
            value={{ authUser, login, register, logout, initializing }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
