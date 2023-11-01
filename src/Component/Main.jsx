import React, { useEffect, useState } from 'react';
 import './Loading.css'
import { Vortex } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
const Main = () => {
  const [loading, setLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);
   useEffect(() => {
     // Simulate loading time with setTimeout
     setTimeout(() => {
       setLoading(false);
     }, 2000);

      setTimeout(() => {
        setShowContent(true);
      }, 2500);
   }, []);
  return (
    <div>
      {loading ? (
        <div className={`loading-state bg-black text-white ${showContent ? "show-content" : ""}`}>
          <h1 className="text-7xl text-center">Welcome to my website</h1>
          <div className="spnier flex justify-center items-center">
            <Vortex
              visible={true}
              height="80"
              width="80"
              ariaLabel="vortex-loading"
              wrapperStyle={{}}
              wrapperClass="vortex-wrapper"
              colors={["red", "green", "blue", "yellow", "orange", "purple"]}
            />
          </div>
        </div>
      ) : (
        <div className="content">
            {/* Render the rest of your website components */}
            <Header></Header>
         <Outlet></Outlet>
        </div>
      )}
    </div>
  );
   
  
};

export default Main;