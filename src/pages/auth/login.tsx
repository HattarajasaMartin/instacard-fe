import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../../services/authService";
import { MailIcon, LockIcon, EyeIcon, ArrowRightIcon } from "../../components/Icons";
import { authInputClass, authLabelClass } from "./authStyles";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await authService.login(email, password);
      navigate("/dashboard");
    } catch (error) {
      alert((error as Error).message || "Login gagal. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center bg-[#fbfbfb] px-4 py-8 font-sans">
      {/* Icon Logo */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c2d6c6]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#334235" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l8 6-3 10H7L4 9l8-6z" />
        </svg>
      </div>

      <h1 className="mb-2 text-center text-3xl font-semibold tracking-tight text-gray-900">
        InstaCard
      </h1>
      <p className="mb-8 text-center text-sm text-gray-500">
        Welcome back to your digital sanctuary.
        <br /> Enter your details to continue.
      </p>

      <div className="w-full max-w-[420px] rounded-[28px] bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-100">
        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className={authLabelClass}>Email</label>
            <div className="relative">
              <MailIcon />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="name@example.com"
                className={authInputClass}
                required
              />
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className={authLabelClass}>Password</label>
              <Link to="/forgot-password" className="text-sm font-medium text-[#4d6b53] hover:underline">
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <LockIcon />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className={authInputClass}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((current) => !current)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8a8395] hover:text-[#4d6b53]"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <EyeIcon />
              </button>
            </div>
          </div>

          <button type="submit" disabled={loading} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#4d6b53] py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#3e5643] disabled:opacity-70">
            {loading ? "Signing In..." : "Sign In"}
            <ArrowRightIcon />
          </button>
        </form>
      </div>

      <p className="mt-8 text-center text-sm text-gray-500">
        Don't have an account? <Link to="/register" className="font-semibold text-[#4d6b53] hover:underline">Sign up</Link>
      </p>

      <div className="mt-12 flex gap-6 text-xs text-gray-400">
        <a href="#" className="hover:text-gray-600">Privacy Policy</a>
        <a href="#" className="hover:text-gray-600">Terms of Service</a>
        <a href="#" className="hover:text-gray-600">Help Center</a>
      </div>
    </section>
  );
};

export default Login;