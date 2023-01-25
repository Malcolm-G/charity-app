import React,{ useState } from "react";
import '../../stylesheets/Login.css';
import image from "../../random-acts-kindness-day.png";

function Login(){


    return(
        <form action="action_page.php" method="post">
            <div class="imgcontainer">
                <img src={image} alt="Avatar" class="avatar"/>
            </div>

            <div class="container login-container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required/>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>

                <button type="submit">Login</button>
            </div>
                {/* <label>
                <input type="checkbox" checked="" name="remember"/> Remember me
                </label>
            </div>

            <div class="container login-container" style={{backgroundColor:"#f1f1f1"}}>
                <button type="login-button" class="cancelbtn">Cancel</button>
                <span class="psw">Forgot <a href="#">password?</a></span>
            </div> */}
        </form>
    )
}

export default Login;