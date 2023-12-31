import React,{useState,useEffect} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import {UserProfile} from "./pages/userprofile";
import {Park} from "./pages/park";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import CoasterReview from "./pages/coasterReviewPage";
import ParkReview from "./pages/parkReviewPage";
import { Signup } from "./component/signup";
import  Login  from "./component/login";
import Coaster from "./pages/coaster";
import SearchPage from "./pages/search";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";
    const [fixFooter, setFixFooter] = useState(false)

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>                      
                        <Route element={<Home adjustFooterHeight={setFixFooter} />} path="/" />
                        <Route element={<Coaster />} path="/coaster/:coasterID" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<CoasterReview />} path="/review/coaster/:coasterID" />
                        <Route element={<ParkReview />} path="/review/park/:parkID" />
                        <Route element={<SearchPage />} path="/search"/>
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<Park />} path="/park/:parkID" />
                        <Route element={<UserProfile />} path="/UserProfile/:userID" />
                        <Route element={<Signup />} path="/signup"/>
                        <Route element={<Login adjustFooterHeight={setFixFooter}/>} path="/login"/>
                    </Routes>
                    <Footer adjustHeight={fixFooter}/>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
