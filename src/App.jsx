//@ts-check
import React, { useEffect, useState } from 'react';
import axios from "axios";
//import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("/api/user/1");
        setUser(res.data);
      } catch (err) { }
      setIsLoading(false);
    };
    getUser();
  }, []);

  return (
    <div className="container">
      {/* <Sidebar isLoading={isLoading} /> */}
      <div className="home">
        {/* <Topbar isLoading={isLoading} user={user} />
        <Feed /> */}
      </div>
    </div>
  );
}

export default App;
