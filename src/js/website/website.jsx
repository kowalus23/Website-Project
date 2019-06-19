import React from "react";
import {WebsiteVideo} from "./websitevideo.jsx";
import {WebsiteInfo} from "./websiteinfo.jsx";
import {WebsiteLeftButton} from "./websiteleftbtn.jsx";
import {WebsiteLogo} from "./websitelogo.jsx";
import {WebsiteRightButton} from "./websiterightbtn.jsx";

const Website = () => {
  return (
    <div>
      <WebsiteVideo/>
      <div className="container">
        <div className="column">
          <WebsiteInfo/>
          <WebsiteLeftButton/>
        </div>
        <div className="column">
          <WebsiteLogo/>
          <WebsiteRightButton/>
        </div>
      </div>
    </div>
  )
};

export default Website;
