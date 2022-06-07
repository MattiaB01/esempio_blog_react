import { render } from "@testing-library/react";
import React from "react";
import Footer from "../components/Footer";

import image2 from "../1638902.jpg"

const Home =()=> {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>

    <div >
    <div className='mb-20 z-10'>
      <h1 className='sm:text-4xl text-2xl font-bold mt-6 mb-6 min-w-full text-gray-900'>
        Hello, Welcome to my Blog! {!data ? "Loading..." : data}
      </h1>
      <p className='mx-auto leading-relaxed text-justify mb-4'   >
        Welcome to my Blog! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Excepturi ad aut dolorum, consectetur a molestiae quis neque alias
        quod quos qui vitae, accusantium quisquam doloribus inventore, enim
        labore ab laboriosam delectus maxime? Veniam ab dolorum ipsa, odit
        magnam facilis quaerat veritatis?
      </p>
      <p className='mx-auto leading-relaxed text-base mb-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eum.
        Iste, totam reiciendis. Laborum officia architecto atque quo saepe
        praesentium recusandae! Voluptas, natus delectus cum amet quidem ipsum
        odit. Corrupti reiciendis sapiente dolorum ipsam magni, aspernatur nam
        dolore commodi quos facilis facere cupiditate ipsa obcaecati rerum error
        ea quae dignissimos!
      </p>
      <p className='mx-auto leading-relaxed text-base mb-4'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque possimus
        perspiciatis, in natus illo, dolore porro sequi vitae neque expedita
        maxime ratione aspernatur hic at exercitationem doloremque cumque quo!
        Hic provident minima dignissimos maxime eum molestias non illo cum! Eius
        tempora nisi quisquam incidunt molestiae voluptatum delectus pariatur
        rerum minima, inventore consequatur. Aut velit dolore in, iusto cumque
        culpa adipisci quisquam unde suscipit vel ipsa odit praesentium
        voluptate possimus reprehenderit ex similique repellendus nemo magni
        soluta consequuntur aliquid? Qui ea hic soluta eaque ad ipsam! Aliquam
        ea maiores enim, perspiciatis hic deleniti minima pariatur quaerat
        placeat tempora repellat sit nisi!
      </p>
     
    </div>
  
  
  </div>
 
  </>    
  );
};

export default Home;
