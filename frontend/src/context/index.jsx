import React, { useContext, createContext } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0xf85949fC211C6D8e9266C21bE9aaB52A4f645B65"
  );
  const { mutateAsync: createProject, isLoading } = useContractWrite(
    contract,
    "createProject"
  );

  const address = useAddress();
  const connect = useMetamask();

  const publishProject = async (form) => {
    try {
      const data = await createProject({
        args: [
          form.title, // title
          form.description, // description
          form.imageURL,
          form.cost,
          new Date(form.expiresAt).getTime(), // deadline,
        ],
      });

      console.log("contract call success", data);
    } catch (error) {
      console.log("contract call failure", error);
    }
  };

  const getProjects = async () => {
    const campaigns = await contract.call("getProjects");

    const parsedCampaings = campaigns.map((campaign, i) => ({
      title: campaign.title,
      description: campaign.description,
      cost: ethers.utils.formatEther(campaign.cost.toString()),
      expiresAt: campaign.expiresAt.toNumber(),
      amountCollected: ethers.utils.formatEther(campaign.raised.toString()),
      imageURL: campaign.imageURL,
      pId: i,
    }));
    //console.log(parsedCampaings);
    return parsedCampaings;
  };

  const donate = async (pId, amount = 20000) => {
    const data = await contract.call("backProject", [pId], {
      value: ethers.utils.parseEther(amount),
    });
    console.log(data);
    return data;
  };

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createProject: publishProject,
        getProjects,
        donate,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
