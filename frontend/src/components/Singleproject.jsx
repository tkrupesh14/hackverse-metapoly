import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';

const Singleproject = () => {
  let location = useLocation();
  const  {campaign}  = location.state;
  const { donate, contract, address } = useStateContext();

  const handleDonate = async () => {

    await donate(campaign.pId, "0.001"); 

    navigate('/')
  }

  return (
    <div className="container ">
      <div className="row min-vh-100 align-items-center justify-content-center">
        <div className="col-lg-10">
          <div className="card ">
            <div className="text-center">
              <img
                src={campaign.imageURL}
                className="card-img-top img-fluid w-50 pb-3 pt-5"
                alt="..."
              />
            </div>
            <div className="mx-auto">
              <div className="card-body">
                {/* <div className="d-flex gap-4 ">
                  <h5 className="card-title">Creator</h5>
                  <p className="card-text">1B3R9D0X7G5K2T4Z8W6O1M3J9S5</p>
                </div> */}

                <div className="d-flex gap-5 mt-3">
                  <h5 className="card-title">Story</h5>
                  <p className="card-text">
                   {campaign.description}
                  </p>
                </div>

                <div className="d-flex gap-3 mt-3">
                  <h5 className="card-title">Donators</h5>
                  <p className="card-text">
                    X3Y7Z1A8B2C6D0E4F9G5H1I7J3K9L2M8N4O0P6Q2R8S4T <br />
                    A5B1C9D3E7F2G0H4I8J2K6L0M7N1O9P3Q7R2S8T4U0V
                    <br />
                    P6Q2R8S4T0U5V1W7X3Y9Z2A8B4C0D6E1F7G5H3I9J2K8
                    <br />
                    I0J6K2L8M4N0O5P1Q7R3S9T2U8V6W0X4Y7Z1A5B9C3D
                    <br />
                    E7F3G9H2I6J0K4L8M1N5O9P2Q6R0S7T3U8V4W2X8Y0Z
                  </p>
                </div>

                <div className="d-flex gap-4 mt-3">
                  <h5 className="card-title">Amount</h5>
                  <p className="card-text">MATIC {campaign.cost*1000000000000000000}</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                type="button"
                className="btn btn-dark px-4 py-2 rounded-1 mt-4 mb-5"
                onClick={handleDonate}
              >
                Fund Campaign Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproject;
