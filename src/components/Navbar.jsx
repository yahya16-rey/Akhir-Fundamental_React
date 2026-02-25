import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
    const { authUser, logout } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    return (
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-semibold tracking-tight">
                    Aplikasi Catatan
                </h1>

                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="px-4 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                        {theme === "dark" ? "Light" : "Dark"}
                    </button>

                    {authUser && (
                        <>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                {authUser.name}
                            </span>

                            <button
                                onClick={() => {
                                    logout();
                                    navigate("/login");
                                }}
                                className="px-4 py-2 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

