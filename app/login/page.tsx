'use client';

import { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Supabase auth call goes here later
    console.log({ email, password, remember });
  };

  return (
    <div className="min-h-screen flex bg-[#f8f9ff]">
      {/* Left panel — branding */}
      <div className="hidden lg:flex flex-1 flex-col items-center justify-center gap-10 px-16 relative">
        <div className="flex items-center gap-2 absolute top-10 left-16">
          <div className="w-10 h-10 rounded-[4px] bg-[#4f46e5] flex items-center justify-center">
            <span className="text-white font-bold text-sm">DV</span>
          </div>
          <p className="font-['Geist'] font-bold text-[24px] tracking-[-0.6px] text-[#0b1c30]">
            DesignVault
          </p>
        </div>

        <div className="max-w-[520px] text-center flex flex-col gap-3">
          <h2 className="font-['Sora'] font-bold text-[32px] leading-[34px] text-black">
            Welcome back
            <br />
            Sign in to your workspace.
          </h2>
          <p className="text-[14px] font-[family-name:var(--font-poppins)] text-[#464555]">
            Every design file, every iteration, every decision — preserved and searchable.
          </p>
        </div>

        {/* Screenshot card mock */}
        <div className="bg-white rounded-[12px] shadow-lg px-5 py-4 w-full max-w-[578px] flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-[12px] font-bold tracking-[1.2px] uppercase text-[#5735e5]">
              Version 2.4.0
            </p>
            <p className="text-[12px] text-[#464555]">0x88AF3...</p>
          </div>
          <div className="h-[192px] w-full bg-[#e5e7eb] rounded-[5px]" />
          <div className="flex gap-2">
            <div className="h-[8px] w-16 bg-[#5735e5] rounded-full" />
            <div className="h-[8px] w-8 bg-[#c7c4d8] rounded-full" />
            <div className="h-[8px] w-8 bg-[#c7c4d8] rounded-full" />
          </div>
        </div>

        {/* Floating collab badges — decorative, optional to keep */}
        <div className="hidden xl:block absolute top-[30%] right-10">
          <div className="bg-[#f8f9ff] border border-[#c7c4d8] shadow-sm rounded-[4px] flex items-center gap-1 px-[9px] py-[9px]">
            <div className="w-2 h-2 rounded-full bg-[#ba1a1a]" />
            <p className="text-[12px] font-medium text-[#464555]">Live Collaboration: 3 Active</p>
          </div>
        </div>
      </div>

      {/* Right panel — login form */}
      <div className="w-full lg:w-[520px] bg-white flex items-center justify-center px-10 py-16">
        <form onSubmit={handleSubmit} className="w-full max-w-[388px] flex flex-col gap-[45px]">
          <div className="flex flex-col gap-2">
            <h1 className="font-['Sora'] font-semibold text-[36px] leading-[40px] tracking-[-0.8px] text-black">
              Login to DesignVault
            </h1>
            <p className="text-[14px] font-[family-name:var(--font-poppins)] text-[#464555]">
              Enter your workspace credentials to continue.
            </p>
          </div>

          <div className="flex flex-col gap-[46px]">
            {/* Email */}
            <div className="flex flex-col gap-[5px]">
              <label className="text-[12px] font-medium tracking-[0.24px] text-[#464555]">
                Email Address
              </label>
              <div className="flex items-center gap-[10px] h-14 px-[19px] rounded-[9px] border border-[#cdcdcd] bg-[rgba(87,53,229,0.05)]">
                <Mail size={22} className="text-[#464555] shrink-0" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="flex-1 bg-transparent outline-none text-[14px] placeholder:text-[#919191] text-black"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-[6px]">
              <div className="flex items-center justify-between px-1">
                <label className="text-[12px] font-medium tracking-[0.24px] text-[#464555]">
                  Password
                </label>
                <a href="#" className="text-[12px] tracking-[0.24px] text-[#3525cd]">
                  Forgot?
                </a>
              </div>
              <div className="flex items-center gap-[10px] h-14 px-[19px] rounded-[9px] border border-[#cdcdcd] bg-[rgba(87,53,229,0.05)]">
                <Lock size={22} className="text-[#464555] shrink-0" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className="flex-1 bg-transparent outline-none text-[14px] placeholder:text-[#919191] text-black"
                />
              </div>

              <div className="flex items-center gap-2 mt-1">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-4 h-4 rounded-[4px] border border-[#c7c4d8] accent-[#5735e5]"
                />
                <label className="text-[14px] text-[#464555]">
                  Remember this device for 30 days
                </label>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-16 rounded-[9px] bg-[#5735e5] flex items-center justify-center gap-2 text-white font-semibold text-[16px] hover:bg-[#4a2bd0] transition-colors"
            >
              Sign In
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Divider + social */}
          <div className="flex flex-col gap-[10px]">
            <div className="relative flex items-center justify-center py-4">
              <div className="absolute inset-x-0 top-1/2 h-px bg-[#c7c4d8]" />
              <span className="relative bg-white px-4 text-[12px] tracking-[1.2px] uppercase text-[#464555]">
                Or continue with
              </span>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                className="flex-1 border border-[#c7c4d8] rounded-[4px] py-3 flex items-center justify-center gap-2 text-[12px] font-medium tracking-[0.24px] text-[#2b2b2b]"
              >
                Google
              </button>
              <button
                type="button"
                className="flex-1 border border-[#c7c4d8] rounded-[4px] py-3 flex items-center justify-center gap-2 text-[12px] font-medium tracking-[0.24px] text-[#2b2b2b]"
              >
                Apple
              </button>
            </div>

            <p className="text-center text-[14px] text-[#464555] pt-6">
              Don&apos;t have a workspace?{' '}
              <a href="#" className="font-semibold text-[#3100ff]">
                Request Access
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}