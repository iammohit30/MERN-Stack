import { useRef } from "react";
import "./register.css"
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

export default function Register() {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Password doesn't match")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try{
                await axios.post("/auth/register", user)
                navigate("/login")
            }catch(err){
                console.log(err);
            }
        }
    }
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">
                    Circle-Hub
                </h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on Chatbook.
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input 
                        placeholder="Username"
                        className="loginInput"
                        required
                        ref={username}
                    />
                    <input
                        placeholder="Email"
                        className="loginInput"
                        required
                        ref={email}
                        type="email"
                        minLength={6}
                    />
                    <input
                        placeholder="Password"
                        className="loginInput"
                        required
                        ref={password}
                        type="password"
                    />
                    <input
                        placeholder="Re-enter password"
                        className="loginInput"
                        required
                        ref={passwordAgain}
                        type="password"
                    />
                    <button className="loginButton" type="submit">Sign Up</button>
                    <button className="loginRegisterButton">
                        <Link to="login">
                            Log into Account
                        </Link>
                        </button>
                </form>
            </div>
        </div>

    </div>
  )
}
