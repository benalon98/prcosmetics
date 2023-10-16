import Isotope from "isotope-layout";
import { Fragment, useEffect, useState } from "react";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
import Videos from "./Videos";
const Portfolio = () => {
  const [activeDetailsPopup, setActiveDetailsPopup] = useState(false);

  const youtubeVideoIds = [
    "7xTLimLHXj8",
    "SXPYxiEGk7I",
    "Bj3S73ZIkIk",
    "ePr4fkkGksY",
    // Add more video IDs as needed
  ];

  // Isotope
  useEffect(() => {
    dataImage();
    setTimeout(() => {
      new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
      });
    }, 500);
  }, []);
  return (
    <Fragment>
      <DetailsPopup
        show={activeDetailsPopup}
        close={() => setActiveDetailsPopup(false)}
      />
      <div className="tonni_tm_section" id="portfolio">
        <div className="container">
          <div className="tonni_tm_portfolio">
            <div className="container bigger">
              <div className="tonni_tm_main_title" data-type="flex">
                <div className="title">
                  <span>חוות דעת</span>
                  <h3>המלצות</h3>
                </div>
              </div>
            </div>
            <div className="service_in">
              <div className="container">
                <Videos youtubeVideoIds={youtubeVideoIds} />
              </div>
              <span className="shape">
                <img className="svg" src="img/svg/vector4.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
