import React from 'react';
import sofa from "../assets/grey sofa bg - Copy.png";
import ottoman from "../assets/ottoman-removebg-preview.png";
import sold_out from "../assets/sold_out-removebg-preview.png";
import { FiArrowRight } from "react-icons/fi";
import {GrFormAdd} from "react-icons/gr";

const Home = () => {
  return (
    <div>
        <div className="leftside">
            
            <div className="navbar">
            <div className='home'><a href="#">HOME</a></div>
            <div className='furniture'><a href="#">FURNITURE</a></div>
            <div className='contact'><a href="#">CONTACT</a></div>
            <div className='about'><a href="#">ABOUT</a></div>
              
           </div>
            
            
            <div className="image-grid">
                <img className="img1" src={ottoman} alt=""/>
                <img className="img2" src={sofa} alt=""/>

                <div className='sold-out-container'>
                  <img className="img3" src={sold_out} alt=""/>
                  <div className="sold-out-text">SOLD OUT</div>
                  </div>
                     
            </div>
            
            <div className="middle">
            <div className="home-text-section">
                <h1 className="primary-heading">NORHOR SOFA</h1>
                <p className="primary-text">The passage of time and its effect on the material, and the respect for the gloss produced by the natural years. British luxury furniture group's flagship design brand.
                </p>
         
                <h1 className="price-text">$1,468</h1>
                <button className="buyBtn">
                     BUY 
                </button>
               
                <button className="plusBtn"><GrFormAdd />{" "}
                  Add to cart
                </button>
                
                <button className="offlineBtn">
                    Check Offline Stores<FiArrowRight />{" "}
                </button>
            </div>
            </div>

            </div>

        <div className="rightside">
            <h1 className="rightHead">FURNI</h1>
            <img className="div2img" src={sofa} alt=""/>
        </div>
    </div>
  );
};

export default Home