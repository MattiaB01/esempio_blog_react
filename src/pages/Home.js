import { color, display } from "@mui/system";
import { render } from "@testing-library/react";
import React, { useState } from "react";
import Footer from "../components/Footer";

import image2 from "../images/esp32_3d_large.JPG"

const Home = () => {
  const [data, setData] = React.useState(null);
  const [loadImg,setLoadImg]= useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <>
    <div class="image pic">
  <img src={image2}  />
  </div>
    
   <div classname="" style={{background:'white',width:'100%', height:95}}>
        

     
     </div>    
    

    </>
  );
};

export default Home;
