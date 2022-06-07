import React from "react";

const NotFound = (props) => {
  return (
    <h1 className='sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900'>
      404: Page not found with title {props.name}
    </h1>
  );
};

export default NotFound;
