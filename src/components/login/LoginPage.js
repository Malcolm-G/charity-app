import React,{} from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import image from "../../closeup-diverse-people-joining-their-hands.jpg"

function LoginPage(){

    return(

        <Login/>
        // <SignUp/>
    )
}

export default LoginPage;




// A signup page I was trying

// <div className="card mt-3 d-flex" style={{width:"60%",height:"300px"}} >
        //     <div class="row g-0" style={{height:"100%"}}>
        //         <div className="col-md-6">
        //              <img src={image} className="img rounded-start" alt="login picture"
        //              style={{width:"100%",height:"auto",objectFit:"cover"}}/>
        //         </div>
        //         <div class="col-md-6">
        //             <div class="card-body d-flex flex-column justify-content-between" style={{width:"100%",height:"auto"}}>
        //                 <h1 class="card-title">WELCOME TO CHARITY APP</h1>
        //                 <div className="d-flex" >
        //                     <Link to="" className="btn btn-lg btn-dark flex-grow-1" > Login </Link>
        //                     <Link to="" className="btn btn-lg btn-outline-dark flex-grow-1" > Sign Up </Link>
        //                 </div>  
        //             </div>
        //         </div>

        //         {/* <img src={image} className="card-img-top" alt="login picture" /> */}
        //         {/* <h1>WELCOME TO CHARITY APP</h1>
        //         <div className="d-flex my-5" >
        //             <Link to="" className="btn btn-lg btn-dark flex-grow-1" > Login </Link>
        //             <Link to="" className="btn btn-lg btn-outline-dark flex-grow-1" > Sign Up </Link>
        //         </div> */}
        //     </div>
        // </div>