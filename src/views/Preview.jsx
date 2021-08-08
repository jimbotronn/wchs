import React from "react";
import { Link } from "react-router-dom";
import Reveal from "react-reveal/Reveal";

const Preview = () => {
  return (
    <div className="shane_tm_all_wrap">
      <div className="shane_tm_intro">
        <div
          className="hero"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/wchs/img/video/1.jpg"
            })`,
          }}
        >
          <div className="content">
          <Reveal effect="fadeInUp">
           <img
              src="/wchs/img/logo/new/wclogo.png"
               className="prev-logo"
              alt="logo"
            />

           <p>Westerville Central H.S. Boys Volleyball</p>
    

           <a href="/wchs-donate" target="_blank" className="white-fill-bg btn-outline btn-medium">
              Make A Donation
            </a>
            <a href="/wchs/sponsor" className="white-fill-bg btn-outline btn-medium">
              Become A Sponsor
            </a>

            </Reveal>
            
            {/* End purchase_button */}
          </div>
        </div>
        {/* End .hero */}



      </div>
      {/* End shame_tm_intro */}



      <div className="shane_tm_section">
        <div className="shane_tm_copyright">
          <div className="container">
            <div className="inner">
              <p>
                &copy; {new Date().getFullYear()} by{" "}
               
                  Westerville Central H.S. Boys Volleyball
               
                . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  /COPYRIGHT */}
    </div>
  );
};

export default Preview;
