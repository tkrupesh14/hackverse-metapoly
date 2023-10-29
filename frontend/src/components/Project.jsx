import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Project(props) {
    const {
        title,
        description,
        cost,
        imageURL = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
      } = props
  const navigate = useNavigate();
  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign })
  }

  return (
    <div className="card rounded-5 border-0">
      <img
        src={imageURL}
        className="card-img-top rounded-5 rounded-bottom-0 h-100 w-100"
        alt="..."
      />
      <div className="card-body d-flex align-items-center justify-content-between">
        <div>
          <h5 className="card-title pt-3 fs-3">{title.toUpperCase()}</h5>
          <p className="card-text fs-6">{description}</p>

          <Link to={`/project`} state={{campaign:props}}>
            <button
              type="button"
              className="btn btn-dark px-4 py-2 rounded-1 mb-3"
            >
              Fund Now
            </button>
          </Link>
        </div>

        <div className="border border-dark px-3 py-2 rounded-2">
          <p className="card-text text-bold fs-5">
            {cost * 1000000000000000000} Matic
          </p>
        </div>
      </div>
    </div>
  );
}
