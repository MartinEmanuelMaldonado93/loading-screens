//@ts-check
import React, { useEffect, useState } from 'react';
import axios from "axios";
//import reactLogo from './assets/react.svg';
import './App.css';
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Feed from "./components/Feed";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      try {
        const url = "http://localhost/api/user/1";
        const res = await axios.get(url);
        setUser(res.data);
      } catch (err) { 
        console.log(err);
      }
      setIsLoading(false);
    };
    getUser();
  }, []);

  return (
    <div className="container">
      <Sidebar isLoading={isLoading} />
      <div className="home">
        <Topbar isLoading={isLoading} user={user} />
        <Feed />
      </div>
    </div>
  );
}

export default App;
