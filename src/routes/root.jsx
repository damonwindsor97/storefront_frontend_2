import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

import '../App.css'

export default function Root() {
    return (
        <div className="app">
            <div>
                <Header/>
            </div>
            
            <div id="detail" className="">
                <Outlet />
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    );
  }