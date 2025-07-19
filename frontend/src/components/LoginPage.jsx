import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage({ setIsAuthenticated }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showRegister, setShowRegister] = useState(false);
    const [showForgot, setShowForgot] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [forgotEmail, setForgotEmail] = useState("");
    
    // 🔸 Added new states for register passwords
    const [regPassword, setRegPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (email === "test@example.com" && password === "password") {
            setIsAuthenticated(true);
            navigate("/worker");
        } else {
            alert("Invalid credentials");
        }
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();

        // 🔸 Password match validation
        if (regPassword !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // 🔸 Registration logic placeholder
        alert(`Registered successfully with Name: ${name}, Email: ${email}, Phone: ${phone}`);
        setShowRegister(false);
    };

    const handleForgotSubmit = (e) => {
        e.preventDefault();
        alert(`Password reset link sent to ${forgotEmail}`);
        setShowForgot(false);
    };

    return (
        <div className="login-page">
            {!showRegister && !showForgot && (
                <form className="login-form" onSubmit={handleLoginSubmit}>
                    <h2>Login</h2>
                    <div>
                        <label>Email ID:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                    <div className="options">
                        <button type="button" onClick={() => setShowForgot(true)}>
                            Forgot Password
                        </button>
                        <button type="button" onClick={() => setShowRegister(true)}>
                            Register
                        </button>
                    </div>
                </form>
            )}

            {showRegister && (
                <form className="register-form" onSubmit={handleRegisterSubmit}>
                    <h2>Register</h2>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Email ID:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    {/* 🔸 New Password fields */}
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={regPassword}
                            onChange={(e) => setRegPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Register</button>
                    <button type="button" onClick={() => setShowRegister(false)}>
                        Back to Login
                    </button>
                </form>
            )}

            {showForgot && (
                <form className="forgot-form" onSubmit={handleForgotSubmit}>
                    <h2>Forgot Password</h2>
                    <div>
                        <label>Email ID:</label>
                        <input
                            type="email"
                            value={forgotEmail}
                            onChange={(e) => setForgotEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={() => setShowForgot(false)}>
                        Back to Login
                    </button>
                </form>
            )}
        </div>
    );
}
