import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export default function Login({adjustFooterHeight}) {
  const { store, actions } = useContext(Context);
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  
  const token = sessionStorage.getItem("token");
  console.log(token);
  const login = (e) => {
    e.preventDefault();
    actions
      .login(email, password)
      .then((res) => { navigate("/search") })
    // .catch((err) => setError(err));
    // Submit email/password here
  };

	function declareHeight(){
		adjustFooterHeight(true)
	}

	useEffect(declareHeight,[])

  return (
    <form className="loginForm" onSubmit={login}>
      <h1>Login</h1>
      <input
        type={"text"}
        placeholder="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>

    <div className="text-right">
      <button className="btn btn-primary btn-lg" onClick={()=>navigate("/ResetPassword")}>Forgot Password</button>
     </div>
     
    </form>
    
  );
}
