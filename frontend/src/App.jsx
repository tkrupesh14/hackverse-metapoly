// import { ConnectWallet } from "@thirdweb-dev/react";
// import "./styles/Home.css";
import React, { useState, useEffect } from 'react'
import Navbar from "./components/Navbar";
import { Route, Routes } from 'react-router-dom';
import CreateCampaign from "./pages/createCampaign";
import { useStateContext } from "./context"
import Landingpage from './pages/Landingpage';
import Singleproject from './components/Singleproject';
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getProjects } = useStateContext();

  const fetchProjects = async () => {
    setIsLoading(true);
    const data = await getProjects();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchProjects();
  }, [address, contract]);


  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

  return (
    <main className="main">

      <Navbar/>
      <Routes>
      <Route path="/create" element={<CreateCampaign />} />
      <Route path="/project" element={<Singleproject />} />
      <Route path="/" element={<Landingpage />} />
      </Routes>
      
    </main>
  );
}
