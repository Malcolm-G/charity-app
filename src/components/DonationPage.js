import React from "react";
import '../stylesheets/DonationPage.css'

function DonationPage(){

    return(
        <React.Fragment>
            <div className="container my-3" >
                <h1 className="" >MAKE A DONATION TO</h1>
                <h1 className="" >Charity organization Resource Incorporated</h1>
            </div>
            <div className="container" >
                <div className="card" style={{width:"40rem"}} >
                    <form>
                        <div className="card-body text-bg-secondary d-flex flex-row justify-content-between flex-wrap" >
                            <h3 className="mx-auto" >Select an amount</h3>
                            <div className="break" ></div>
                            <button type="button" className="btn btn-light mx-3" data-bs-toggle="button" >$25</button>
                            <button type="button" className="btn btn-light mx-3" data-bs-toggle="button" >$50</button>
                            <button type="button" className="btn btn-light mx-3" data-bs-toggle="button" >$100</button>
                            <button type="button" className="btn btn-light mx-3" data-bs-toggle="button" >$250</button>
                            <button type="button" className="btn btn-light mx-3" data-bs-toggle="button" >Other</button>
                            <div className="break" ></div>
                            <input type="number" placeholder="Amount" className="mx-auto mt-4 " />
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
                                <input required type="text" placeholder="" />
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
                                <input required type="text" placeholder="" />
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
                                <input required type="email" placeholder="" />
                            </label>
                            <label className="d-flex flex-column" >
                                Phone
                                <input required type="tel" placeholder="" />
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