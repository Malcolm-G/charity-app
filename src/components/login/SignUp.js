import React from "react";
import "../../stylesheets/SignUp.css"
import { useNavigate } from "react-router-dom";

function SignUp(){

    const navigate = useNavigate();

    function cancelClicked(){
        navigate("/login");
    }

    return(
        <form action="action_page.php" style={{border:"1px solid #ccc"}}>
            <div className="container">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr/>

                <label for="username"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" required/>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>

                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>

                {/* <label>
                <input type="checkbox" checked="checked" name="remember" style={{marginBottom:"15px"}}/> Remember me
                </label>

                <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p> */}

                <div className="clearfix">
                <button type="button" className="cancelbtn" onClick={cancelClicked} >Cancel</button>
                <button type="submit" className="signupbtn">Sign Up</button>
                </div>
            </div>
        </form>
    )
}

export default SignUp;