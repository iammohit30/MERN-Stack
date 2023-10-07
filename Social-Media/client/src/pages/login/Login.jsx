import { useContext, useRef } from "react";
import "./login.css"
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress"

export default function Login() {
    const email = useRef();
    const password = useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext)


    const handleClick = (e) => {
        e.preventDefault();
        loginCall({email:email.current.value, password:password.current.value}, dispatch)        
    }

    console.log(user);
  return (

    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">
                    Chatbook
                </h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on Chatbook.
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input
                    placeholder="Email"
                    type="email"
                    required
                    ref={email}
                    className="loginInput"
                    />
                    <input
                    placeholder="Password"
                    type="password"
                    ref={password}
                    minLength={6}
                    required
                    className="loginInput"
                    />
                    <button className="loginButton" disabled={isFetching}>
                        {
                            isFetching
                            ? <CircularProgress style={{"color": "white", "size": "20px" }}/>
                            : "Log In"
                        }
                    </button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create a new account</button>
                </form>
            </div>
        </div>

    </div>
  )
}


// className="loginButtonCircular"