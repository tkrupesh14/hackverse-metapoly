import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { useStateContext } from "../context/";
import { checkIfImage } from "../utils/index";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createProject } = useStateContext();
  const [form, setForm] = useState({
    title: "",
    description: "",
    cost: "",
    expiresAt: "",
    imageURL: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
   // console.log(fieldName," ",e.target.value);
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists) => {
      if (exists) {
        setIsLoading(true);
        await createProject({
          ...form,
          target: ethers.utils.parseUnits(form.target, 18),
        });
        setIsLoading(false);
        navigate("/");
      } else {
        alert("Provide valid image URL");
        setForm({ ...form, image: "" });
      }
    });
  };

  return (
    <>

      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
            <h2 className="text-white text-center fs-1 form-heading ">Create Project</h2>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Campaign Title
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Save nature save life."
                value={form.title}
                onChange={(e) => handleFormFieldChange("title", e)}
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Story
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={form.description}
                onChange={(e) => handleFormFieldChange("description", e)}
                placeholder="Nature's beauty sustains us. Protecting it is our duty. Conservation ensures a future of harmony, preserving ecosystems, and the planet's vitality."
              ></textarea>
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Goal
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="ETH 3.50"
                value={form.cost}
                onChange={(e) => handleFormFieldChange("cost", e)}
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                End Date
              </label>
              <input
                type="date"
                className="form-control"
                id="exampleFormControlInput1"
                value={form.expiresAt}
                onChange={(e) => handleFormFieldChange("expiresAt", e)}
              />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Campaign image
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Image URL"
                inputType="url"
                value={form.imageURL}
                onChange={(e) => handleFormFieldChange("imageURL", e)}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-dark px-4 py-2 rounded-1 mt-3"
              >
                Submit New Campaign
              </button>
            </div>
            </form>

          </div>
          
        </div>
        
      </div>
    </>
  );
};

export default CreateCampaign;
