import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import  {useNavigate}  from "react-router-dom";



export const Home = ({adjustFooterHeight}) => {
	const { store, actions } = useContext(Context);
	let navigate=useNavigate()
	console.log(store.user)

	function declareHeight(){
		adjustFooterHeight(true)
	}

	useEffect(declareHeight,[])

	
	return (
		<div className="container my-5">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
			<div className="text-center">
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
