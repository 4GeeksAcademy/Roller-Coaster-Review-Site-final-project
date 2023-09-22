import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import  {useNavigate}  from "react-router-dom";

import logo from "/workspaces/Roller-Coaster-Review-Site-final-project/src/front/img/coaster-critics-logo-black.png"

export const Home = ({adjustFooterHeight}) => {
	const { store, actions } = useContext(Context);
	let navigate=useNavigate()
	console.log(store.user)

	//function declareHeight(){
	//	adjustFooterHeight(true)
	//}
//
	//useEffect(declareHeight,[])

	
	return (
		<div className="container mt-5 mb-4 text-center min-vh-100">
			<h3>Hello, and welcome to...</h3>
			<img src={logo} className="img-fluid w-50"></img>
			<p>A place where you and many other coaster enthusiasts review theme parks and roller coasters. Don't know if that brand
				new coaster is worth driving halfway across the country for? Maybe someone's already written their opinion here, see what they have to say. Or is there
				this one park you believe everyone should avoid at all costs? You can let everyone know here, maybe someone will heed your advice.
			</p>
			<p className="mt-3">There are currently dozens and dozens of roller coasters that you can find people's reviews of. However if you yourself 
				would like to leave a review for an attraction, you must make an account. Or, if you've already got an account, you can sign in.
				Either way, you can do that below:
			</p>
			<div className="">
				<div className="row justify-content-center">
					<div className="col-auto">
						<button className="btn btn-secondary btn-lg" onClick={()=>navigate("/signup")}>Sign Up</button>
					</div>
					<div className="col-auto">
						<button className="btn btn-primary btn-lg" onClick={()=>navigate("/login")}>Login</button>
					</div>
				</div>
			</div>

		</div>
	);
};
