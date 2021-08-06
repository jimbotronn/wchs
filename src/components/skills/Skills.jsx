import React from "react";
import Reveal from "react-reveal/Reveal";
import Iframe from "react-iframe"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const SkillsTwo = () => {
  return (
    <>
      <div className="shane_tm_section" id="donate">
        <div className="shane_tm_about">
        <div className="container donation_container">
        <div className="shane_tm_title donation_right">
                <div className="title_flex">
                  <div className="right dl_right">
                    <span>About This Campaign</span>
                    <p>         Your sponsorship will allow Westerville Central Boys Volleyball program
                         provide an energetic, healthy, and competitive team environment to continue
                         our growth and success for years to come, creating the opportunity for 
                         more student-athletes to discover their potential in boys volleyball  </p>
           
                  </div>
                </div>
              </div>
                   <div className="portfolio_filter donation_left">
                  <div className="portfolio_list left dl_left">
              
                      <Reveal effect="fadeInLeft">
                        <Iframe url="https://givebutter.com/embed/c/wchsbvbIIU"
                          width="100%"
                          height="615px"
                          style="max-width: 601px;"
                          name="givebutter" 
                          frameborder="0"
                          scrolling="no"
                          id="myId"
                          className="myClassname"
                          display="initial"
                          seamless allowpaymentrequest
                         />
                      </Reveal>

                     
                  
               
                  </div>
       
              </div>
 
          </div>
          {/* End .conainer */}
        </div>
      </div>
    </>
  );
};

export default SkillsTwo;
