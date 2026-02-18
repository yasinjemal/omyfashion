"use client"

import { useState } from "react"

import Register from "@modules/account/components/register"
import Login from "@modules/account/components/login"

export enum LOGIN_VIEW {
  SIGN_IN = "sign-in",
  REGISTER = "register",
}

const LoginTemplate = () => {
  const [currentView, setCurrentView] = useState("sign-in")

  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#FAF7F2] py-16 sm:py-24 px-4">
      <div className="text-center mb-10">
        <p className="text-[#C9A96E] text-sm tracking-[0.3em] uppercase mb-3 font-light">
          {currentView === "sign-in" ? "Welcome Back" : "Join Us"}
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl text-[#1A1A1A] mb-3">
          {currentView === "sign-in" ? "Sign In" : "Create Account"}
        </h1>
        <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto" />
      </div>
      <div className="w-full max-w-sm">
        {currentView === "sign-in" ? (
          <Login setCurrentView={setCurrentView} />
        ) : (
          <Register setCurrentView={setCurrentView} />
        )}
      </div>
    </div>
  )
}

export default LoginTemplate
