import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";
export default function Login() {
    const {setLoggedIn} = useContext(LoginContext);

    const [loginInfo, setLoginInfo] = useState({
      username : "",
      password : ""
    });
    const navigate = useNavigate();

    const handleLoginSubmit = (e) => {
      e.preventDefault();
      if(isLoginMatch(loginInfo.username, loginInfo.password)){
        setLoggedIn(true);
        navigate("/home");
      } else{
        setLoginInfo({...loginInfo, password: ""})
      }
    }
    const isLoginMatch = (username, password) =>{
      if(username === "simden12" && password === "jcmgsD12")
        return true;
      if(username === "samden23" && password === "jcmgsD23" )
        return true;
      
      return false;
    } 


    return (
      <main id="main-area">
        <h1>Master Login</h1>
        <form className="login-form"action = "/action">
            <label >Username: </label>
            <input type="text" id="username" onChange = {e => setLoginInfo({...loginInfo, username: e.target.value})} value = {loginInfo.username}></input>
            <label >Password:</label>
            <input type="password" id="password" onChange = {e => setLoginInfo({...loginInfo, password : e.target.value})} value = {loginInfo.password}></input>
            <input type="submit" value="Login" id = "login-submit" onClick = {handleLoginSubmit}></input>
        </form>

      </main>
    );
  }