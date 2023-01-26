import React,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../stylesheets/Login.css';
import image from "../../random-acts-kindness-day.png";

function Login({users,setIsLoggedIn}){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

    function loginClicked(e){
        e.preventDefault();
        const userFound = users.find(user=>user.username===username);

        if(userFound){
            if(userFound.password===password){
                setIsLoggedIn(true)
                navigate('/')
            }
            else{
                alert('Username or password does not exist')
            }
        }

        else{
            alert('Username does not exist')
        }
    }

    return(
        <form
        onSubmit={(e)=>loginClicked(e)}
         method="#">
            <div className="imgcontainer">
                <img src={image} alt="Avatar" className="avatar"/>
            </div>

            <div className="container login-container">
                <label htmlFor="uname"><b>Username</b></label>
                <input
                onChange={(e)=>setUsername(e.target.value)}
                value={username}
                type="text" placeholder="Enter Username" name="uname" required/>

                <label htmlFor="psw"><b>Password</b></label>
                <input
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                type="password" placeholder="Enter Password" name="psw" required/>
                
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