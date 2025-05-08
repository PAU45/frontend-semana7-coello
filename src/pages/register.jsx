import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import authService from "../services/auth.service";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            await authService.register(username, email, password);
            navigate("/"); 
        } catch (error) {
            setMessage("Error al registrar el usuario: " + (error.response?.data?.message || error.message));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
            <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
                <div className="card-body">
                    <h2 className="text-center mb-4">Crear nueva cuenta</h2>
                    <p className="text-center text-muted">
                        ¿Ya tienes una cuenta?{" "}
                        <Link to="/" className="text-primary">
                            Inicia sesión
                        </Link>
                    </p>

                    <form onSubmit={handleRegister}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                                Nombre de usuario
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                className="form-control"
                                placeholder="Ingresa tu nombre de usuario"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Correo electrónico
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="form-control"
                                placeholder="Ingresa tu correo electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                required
                                className="form-control"
                                placeholder="Ingresa tu contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {message && (
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        )}

                        <div className="d-grid">
                            <button
                                type="submit"
                                disabled={loading}
                                className="btn btn-primary"
                            >
                                {loading ? "Procesando..." : "Registrarse"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
