import React,{useState,useEffect} from "react";
import Project from "./Project";
import { useStateContext } from "../context";

const Projectlist = () => {
  const { address, contract, getProjects } = useStateContext();
  const [campaigns, setCampaigns] = useState([]);

  const fetchProjects = async () => {
    const data = await getProjects();
    setCampaigns(data);
  };

  useEffect(() => {
    if (contract) fetchProjects();
  }, [address, contract]);
  return (
    <div className="container projects">
      <div className="row min-vh-100">
        <h2
          className="text-white text-center fs-1 heading"
          data-aos="fade-down"
        >
          Current Project
        </h2>

        <div className="gap-5">
          <div className="card-group gap-5" data-aos="fade-down">
            {campaigns?.map((campaign,id) => (
              <Project
              key={id}
                title={campaign.title}
                description={campaign.description}
                cost={campaign.cost}
                expiresAt={campaign.expiresAt}
                amountCollected={campaign.amountCollected}
                imageURL={campaign.imageURL}
                pId={campaign.pId}
              />
            ))}
            {/* <Project/>
          <Project/>
          <Project/> */}
          </div>
          {/* <div className="card-group gap-5 my-5" data-aos = "fade-down">
          <Project/>
          <Project/>
          <Project/>
          </div> */}
          <div className="text-end mt-5 ">
            <button type="button" className="btn btn-dark px-4 py-2 rounded-1">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectlist;
