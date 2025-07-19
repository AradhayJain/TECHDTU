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
    const [regPassword, setRegPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [forgotEmail, setForgotEmail] = useState("");

    const navigate = useNavigate();

    // ✅ LOGIN (backend expects "Email", "Password")
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:9001/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    Email: email,
                    password: password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Login successful");
                setIsAuthenticated(true);
                navigate("/worker");
            } else {
                alert(data.message || "Invalid credentials");
            }
        } catch (err) {
            console.error("Login error:", err);
            alert("Something went wrong during login.");
        }
    };

    // ✅ REGISTER (backend expects "Name", "Email", "Password", "PhoneNumber")
    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        if (regPassword !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await fetch("http://localhost:9001/api/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    Name: name,
                    Email: email,
                    password: regPassword,
                    PhoneNumber: phone,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Registration successful! Please login.");
                setShowRegister(false);
            } else {
                alert(data.message || "Registration failed");
            }
        } catch (err) {
            console.error("Registration error:", err);
            alert("Something went wrong during registration.");
        }
    };

    const handleForgotSubmit = (e) => {
        e.preventDefault();
        alert(`Password reset link sent to ${forgotEmail}`);
        setShowForgot(false);
    };

    return (
        <div className="login-page">
            {/* 🔐 LOGIN FORM */}
            {!showRegister && !showForgot && (
                <form className="login-form" onSubmit={handleLoginSubmit}>
                    <h2>Login</h2>
                    <div>
                        <label>Email:</label>
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
                        <button type="button" onClick={() => setShowForgot(true)}>Forgot Password</button>
                        <button type="button" onClick={() => setShowRegister(true)}>Register</button>
                    </div>
                </form>
            )}

            {/* 📝 REGISTER FORM */}
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
                        <label>Email:</label>
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
                    <button type="button" onClick={() => setShowRegister(false)}>Back to Login</button>
                </form>
            )}

            {/* ❓ FORGOT PASSWORD FORM (Mock) */}
            {showForgot && (
                <form className="forgot-form" onSubmit={handleForgotSubmit}>
                    <h2>Forgot Password</h2>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={forgotEmail}
                            onChange={(e) => setForgotEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={() => setShowForgot(false)}>Back to Login</button>
                </form>
            )}
        </div>
    );
}
