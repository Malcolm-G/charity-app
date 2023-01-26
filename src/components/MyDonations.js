import React from "react";
import '../stylesheets/MyDonations.css';

function MyDonations({user}){

    console.log(user)

    const donationList = user.donations?.map((donation)=>{
        return(
            <tr>
                    <td>{donation.ein}</td>
                    <td>{donation.charity_name}</td>
                    <td>{donation.amount}</td>
            </tr>
        )
    })

    return(
        <>
        <div className="container">
            <table style={{width:'100%'}} >
                <tbody>
                    <tr>
                        <th className="text-center" colSpan={3} style={{fontSize:'30px',backgroundColor:'rgba(207, 190, 175, 0.815)'}} >MY Donations</th>
                    </tr>
                    <tr style={{fontSize:'20px'}} >
                        <th>EIN</th>
                        <th>Charity Name</th>
                        <th>{`Amount($)`}</th>
                    </tr>
                    {donationList}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default MyDonations