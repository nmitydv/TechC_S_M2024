import React from 'react'
import "./GetStartedBtn.css";
import { FaArrowRight } from "react-icons/fa6";
const GetStartedBtn = () => {
  return (
    <>
         <button className="getStarted_btn ps-4 d-flex justify-content-between align-items-center">
                Get Started
                <div className="innerCircle">
                  <FaArrowRight />
                </div>
              </button>
    </>
  )
}

export default GetStartedBtn