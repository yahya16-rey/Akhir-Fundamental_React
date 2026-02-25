import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center justify-center mt-20 text-center">
                <h1 className="text-5xl font-bold mb-4">404</h1>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Page not found.
                </p>

                <Link
                    to="/"
                    className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                    Go Home
                </Link>
            </div>
        </>
    );
}

export default NotFoundPage;
