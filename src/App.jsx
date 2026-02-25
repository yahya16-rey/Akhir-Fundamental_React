import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProtectedRoute from "./components/ProtectedRoute";
import NewNotePage from "./pages/NewNotePage";
import "./style.css";

function App() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-6 py-8">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <HomePage />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/notes/:id"
                        element={
                            <ProtectedRoute>
                                <DetailPage />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/notes/new"
                        element={
                            <ProtectedRoute>
                                <NewNotePage />
                            </ProtectedRoute>
                        }
                    />
                    
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
