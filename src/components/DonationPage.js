import React,{useState} from "react";
import { useLocation } from "react-router-dom";
import '../stylesheets/DonationPage.css'

function DonationPage(){

    const [amountValue,setAmountValue] = useState(5);
    const location = useLocation();

    function buttonHandler(e,value){
        const buttonList = e.target.parentElement.querySelectorAll('button');
        buttonList.forEach((button)=>button.classList.remove('active'))
        e.target.className += ' active';
        setAmountValue(()=>value);
    }

    return(
        <React.Fragment>
            <div className="container-75 heading" >
                <div className="container pt-4" >
                    <h1 className="" >MAKE A DONATION TO</h1>
                    <h1 className="" >CHARITY ORGANIZATION RESOURCE INCORPORATED</h1>
                </div>
            </div>
            <div className="container" >
                <div className="card" style={{width:"40rem"}} >
                    <form>
                        <div className="card-body text-bg-secondary d-flex flex-row justify-content-between flex-wrap" >
                            <h3 className="mx-auto" >Select an amount</h3>
                            <div className="break" ></div>
                            <button
                            onClick={(e)=>buttonHandler(e,5)}
                            type="button" className="btn btn-lg btn-light mx-3" >$5</button>
                            <button
                            onClick={(e)=>buttonHandler(e,25)}
                            type="button" className="btn btn-lg btn-light mx-3" >$25</button>
                            <button
                            onClick={(e)=>buttonHandler(e,50)}
                            type="button" className="btn btn-lg btn-light mx-3" >$50</button>
                            <button
                            onClick={(e)=>buttonHandler(e,100)}
                            type="button" className="btn btn-lg btn-light mx-3" >$100</button>
                            <button
                            onClick={(e)=>buttonHandler(e,250)}
                            type="button" className="btn btn-lg btn-light mx-3" >$250</button>
                            <button
                            onClick={(e)=>buttonHandler(e,"")}
                            type="button" className="btn btn-lg btn-light mx-auto" >Other</button>
                            <div className="break" ></div>
                            <input required type="number" placeholder="Amount" className="mx-auto mt-4"
                            onChange={(e)=>setAmountValue(()=>e.target.value)}
                            value={amountValue} />
                        </div>


                        <div className="card-body d-flex flex-row justify-content-between flex-wrap" >
                            <h3 className="mx-auto" >Your Information</h3>
                            <div className="break" ></div>
                            <label className="d-flex flex-column w-25" >
                                Salutation
                                <select>
                                    <option>Mr.</option>
                                    <option>Mrs.</option>
                                    <option>Ms.</option>
                                    <option>Dr.</option>
                                </select>
                            </label>
                            <label className="d-flex flex-column w-25" >
                                First Name
                                <input required type="text" placeholder="" />
                            </label>
                            <label className="d-flex flex-column w-25" >
                                Last Name
                                <input required type="text" placeholder="" />
                            </label>

                            <div className="break" ></div>
                            <label className="d-flex flex-column w-100" >
                                Company
                                <input  type="text" placeholder="" />
                            </label>

                            <div className="break" ></div>
                            <label className="d-flex flex-column w-50" >
                                Address 1
                                <input type="text" placeholder="" />
                            </label>
                            <label className="d-flex flex-column" >
                                Address 2
                                <input type="text" placeholder="" />
                            </label> 

                            <div className="break" ></div>
                            <label className="d-flex flex-column w-50" >
                                City
                                <input required type="text" placeholder="" />
                            </label>
                            <label className="d-flex flex-column" >
                                State
                                <input type="text" placeholder="" />
                            </label>

                            <div className="break" ></div>
                            <label className="d-flex flex-column w-50" >
                                Postal Code
                                <input type="text" placeholder="" />
                            </label>
                            <label className="d-flex flex-column" >
                                Country
                                <input required type="text" placeholder="" />
                            </label> 

                            <div className="break" ></div>
                            <label className="d-flex flex-column w-50" >
                                Email
                                <input type="email" placeholder="" />
                            </label>
                            <label className="d-flex flex-column" >
                                Phone
                                <input type="tel" placeholder="" />
                            </label>                    
                        </div>
                        <div className="card-body d-flex flex-row justify-content-between flex-wrap" >
                            <label className="d-flex flex-column w-75" >
                                Card number
                                <input type="tel" placeholder="" />
                            </label> 

                            <div className="break" ></div>
                            <label className="d-flex flex-column" >
                                Expiration Date
                                <input type="month" placeholder="" />
                            </label>
                            <label className="d-flex flex-column" >
                                Security Code
                                <input type="tel" placeholder="" />
                            </label>
                            <div className="break" ></div>
                            <button type="submit" className="btn btn-warning mx-auto mt-3" >Make Donation</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default DonationPage;