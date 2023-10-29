import React from "react";
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className="container">
      <div className="row min-vh-100 align-items-center">
        <div className="col-lg-6"  data-aos = "fade-right">
          <h2 className="py-4 fs-1">
            "Empower Dreams: Support Crowdfunding Heroes"
          </h2>
          <p className="lh-base">
            Welcome to our crowdfunding platform, where dreams take flight. We
            empower creators, innovators, and change-makers. Your support fuels
            the extraordinary. Join us in making a difference, one project at a
            time. Together, we can turn ideas into reality and shape a brighter
            future. Become a crowdfunding hero today!
          </p>
          <Link to='create'> 
          <button type="button" className="btn btn-dark px-4 py-2 rounded-1 my-4" >
            Create Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right ms-3"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
          </Link>
        </div>

        <div className="col-lg-6 text-end"  data-aos = "fade-left">
          <img
            className="img-fluid"
            src="https://media.istockphoto.com/id/1370325170/photo/people-surrounded-stacks-of-coins-fundraising-and-charity-corporation-joint-venture-fair.webp?b=1&s=170667a&w=0&k=20&c=5r9G-SQ6wQyX_ZFuvUf-ZfKMeyEkay2UVzNs52FBipg="
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
