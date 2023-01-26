import React,{ useState } from "react";
import { Link } from "react-router-dom";
import '../../stylesheets/Login.css';
import image from "../../random-acts-kindness-day.png";

function Login(){


    return(
        <form action="action_page.php" method="post">
            <div className="imgcontainer">
                <img src={image} alt="Avatar" className="avatar"/>
            </div>

            <div className="container login-container">
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required/>

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>
                
                <button type="submit">Login</button>
                {/* <label>
                <input type="checkbox" checked="" name="remember"/> Remember me
                </label> */}
            </div>

            <div className="container  d-flex" style={{backgroundColor:"#f1f1f1"}}>
                <Link type="login-button" className="btn cancelbtn mx-auto" to="/signup" >Register?</Link>
                {/* <span className="psw">Forgot <a href="#">password?</a></span> */}
            </div>
        </form>
    )
}

export default Login;