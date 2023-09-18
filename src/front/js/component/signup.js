import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Signup = ({adjustFooterHeight}) => {
  function declareHeight(){
		adjustFooterHeight(true)
	}

	useEffect(declareHeight,[])
  const { store, actions } = useContext(Context)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const token = sessionStorage.getItem("token")
  
  //e is for event
  useEffect(() => {
    if (store.user != null) {
      navigate("/")
    }
  })
  const signup = (e) => {
    e.preventDefault(
      actions.createUser(username, email, password)
    )
  }

  return (
    <>
      <form className="loginForm">
        <div className="loginFormContent">
          <h1>Create an Account</h1>
          <div className="input-field">
            <input
              className="myInput"
              type={"text"}
              placeholder={"Username"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-field">
            <input
              className="myInput"
              type={"text"}
              placeholder={"Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-field">
            <input
              className="myInput"
              type={"password"}
              placeholder={"Password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link className="link" to="/login">
            <span>Go Back</span>
          </Link>
          <br />
        </div>
        <div className="loginFormAction">
          <button className="formBtn regBtn" onClick={(e) => signup(e)}>
            Register
          </button>
        </div>
      </form>
    </>
  );
}