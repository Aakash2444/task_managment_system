import React, { useState } from "react";

const Login = ({handleLogin}) => {



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitHandler = (e) =>{
        e.preventDefault();
        handleLogin(email,password)
        console.log("form submitted !")
        setEmail("");
        setPassword("");
    }
  return (
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="border-[1px] border-emerald-600 px-8 py-12 rounded-md">
          <form onSubmit={(e)=>{
            submitHandler(e)
          }} className="flex flex-col items-center justify-center">
            <input required onChange={(e)=>{setEmail(e.target.value)}} value={email} className="text-white py-3 px-5 text-xl rounded-xl outline-none bg-transparent placeholder:text-white border-[1px] mb-3 border-emerald-600" type="email" placeholder="Enter your email"/>
            <input required onChange={(e)=>{setPassword(e.target.value)}} value={password} className="text-white py-3 px-5 text-xl rounded-xl outline-none bg-transparent placeholder:text-white border-[1px] mb-3 border-emerald-600" type="password" placeholder="enter your password"/>
            <button className="text-white bg-emerald-600 text-xl rounded-xl py-2 px-5 mt-3 font-medium w-full">Login</button>
          </form>
        </div>
      </div>
  );
};

export default Login;
