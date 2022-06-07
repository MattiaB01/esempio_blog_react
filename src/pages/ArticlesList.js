import React from "react";
import articleContent from "./article-content";

import Articles from "../components/Articles";
import { margin } from "@mui/system";
import Foot from "../components/Bottom";

const ArticlesList = () => {
  return (
    <>
      <h1 className='sm text-2xl font-bold mt-6 mb-6 ml-5 text-gray-900 '>
        Articles
      </h1>
      <div style={{margin:"2%"}}>
        In questa sezione vedremo a cosa servono e come si implementanto i design pattern in Java
      </div>
      <div className='container py-4 mx-auto '>
        <div className='flex flex-wrap  '>
          <Articles articles={articleContent} />
        </div>
      </div>
    
    </>
  );
};

export default ArticlesList;
