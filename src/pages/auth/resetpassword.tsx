import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LockIcon, ArrowRightIcon } from "../../components/Icons";
import { authInputClass, authLabelClass } from "./authStyles";

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();

  const handleResetPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center bg-[#fbfbfb] px-4 py-8 font-sans relative overflow-hidden">
      
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c2d6c6]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#334235" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
          <path d="M21 3v5h-5"></path>
          <path d="M12 15v-3"></path>
          <circle cx="12" cy="18" r="1"></circle>
        </svg>
      </div>

      <h1 className="mb-2 text-center text-3xl font-semibold tracking-tight text-gray-900">
        InstaCard
      </h1>
      <p className="mb-8 text-center text-sm text-gray-500">
        Secure your sanctuary. Enter your new password below.
      </p>

      <div className="w-full max-w-[420px] rounded-[28px] bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-100">
        <form className="space-y-5" onSubmit={handleResetPassword}>
          <div>
            <label className={authLabelClass}>New Password</label>
            <div className="relative">
              <LockIcon />
              <input
                type="password"
                placeholder="••••••••"
                className={authInputClass}
                required
              />
            </div>
            <p className="mt-2 text-xs text-gray-400 leading-relaxed">
              Minimum 8 characters with a mix of letters and symbols.
            </p>
          </div>

          <div>
            <label className={authLabelClass}>Confirm New Password</label>
            <div className="relative">
              <LockIcon />
              <input
                type="password"
                placeholder="••••••••"
                className={authInputClass}
                required
              />
            </div>
          </div>

          <button type="submit" className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#4d6b53] py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#3e5643]">
            Update Password <ArrowRightIcon />
          </button>
        </form>

        <div className="my-6 h-px w-full bg-gray-100" />

        <div className="text-center space-y-3">
          <Link to="/login" className="block text-sm font-medium text-[#4d6b53] hover:underline">
            Back to login
          </Link>
          <p className="text-sm text-gray-500">
            Having trouble? <a href="#" className="font-medium text-[#4d6b53] hover:underline">Contact Support</a>
          </p>
        </div>
      </div>

      <p className="mt-12 text-center text-xs text-gray-400">
        © 2024 InstaCard. Protected by industry-standard encryption.
      </p>
    </section>
  );
};

export default ResetPassword;