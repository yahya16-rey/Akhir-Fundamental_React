import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function RegisterPage() {
    const { register } = useAuth(); // pastikan AuthContext punya fungsi register
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const { error } = await register({ name, email, password });

        if (!error) {
            navigate("/login");
        } else {
            alert("Register failed");
        }
    }


    return (

            <div className="flex justify-center items-center min-h-[80vh]">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 transition"
                >
                    <h2 className="text-2xl font-semibold text-center mb-6">
                        Create Account
                    </h2>

                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <button
                            type="submit"
                            className="mt-2 px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            Register
                        </button>
                    </div>

                    <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-6">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-blue-600 hover:underline"
                        >
                            Login here
                        </Link>
                    </p>
                </form>
            </div>
    );
}

export default RegisterPage;
