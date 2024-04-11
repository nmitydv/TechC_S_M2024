import React from 'react'
import '../pages_css/HomePage.css';
import { HiArrowRight } from "react-icons/hi";
import digital from "../assets/Digital.svg"
const MainFrame = () => {
  return (
   <>
    <div className="seventh_screen d-flex text-white">
            <div className="mt-5 ms-3">
              <img  src={digital} />
            </div>
            <div className="align-content-center p-5 mx-5">
              <h1 className="seventh_screen_text">
                Ready to create an amazing website for your company ?
              </h1>
              <p>
                Our amazing team of designers & developers is ready to help you
                take your website to the next level. Send us a message today!
              </p>
              <button className="getInTouch_btn me-4 mt-3">
                  Get In touch <HiArrowRight />
                </button>
            </div>
          </div>
   </>
  )
}

export default MainFrame;