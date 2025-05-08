import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import authService from "../services/auth.service";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const data = await authService.login(username, password);

            // Verify user roles
            if (data.roles.includes("ROLE_ADMIN")) {
                navigate("/dashboard/admin");
            } else if (data.roles.includes("ROLE_MODERATOR")) {
                navigate("/dashboard/moderator");
            } else if (data.roles.includes("ROLE_USER")) {
                navigate("/dashboard");
            } else {
                setMessage("No role assigned to this user.");
            }
        } catch (error) {
            setMessage("Login failed: " + (error.response?.data?.message || error.message));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
                <div className="card-body">
                    <h2 className="text-center mb-4">Iniciar sesión</h2>
                    <p className="text-center text-muted">
                        ¿No tienes una cuenta?{" "}
                        <Link to="/register" className="text-primary">
                            Regístrate
                        </Link>
                    </p>

                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                                Nombre de usuario
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                className="form-control"
                                placeholder="Ingresa tu nombre de usuario"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Contraseña
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                className="form-control"
                                placeholder="Ingresa tu contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {message && (
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        )}

                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="form-check">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="form-check-input"
                                />
                                <label htmlFor="remember-me" className="form-check-label">
                                    Recordarme
                                </label>
                            </div>
                            <a href="#" className="text-primary">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                            disabled={loading}
                        >
                            {loading ? "Procesando..." : "Iniciar sesión"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
