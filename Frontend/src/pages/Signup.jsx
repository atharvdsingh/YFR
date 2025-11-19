import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { signup } = useAuth();
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const res = await signup(name, email, password);

    if (res.success) {
      toast.success("Account created successfully!");
      nav("/login");
    } else {
      toast.error(res.message || "Signup failed");
    }
  };

  return (
    <div className="pt-24 flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <form onSubmit={submit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Create Account</h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="w-full p-3 border rounded mb-3 bg-transparent"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-3 border rounded mb-3 bg-transparent"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-3 border rounded mb-4 bg-transparent"
        />

        <button className="w-full bg-indigo-600 text-white p-3 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
}
