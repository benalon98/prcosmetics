import { Fragment, useState } from "react";
import Counter from "./Counter";
import ContactPopup from "./popup/ContactPopup";

const Contact = () => {
  const [active, setActive] = useState(false);
  return (
    <Fragment>
      <ContactPopup show={active} close={() => setActive(false)} />
      <div className="tonni_tm_section" id="contact">
        <div className="tonni_tm_contact">
          <div className="container">
            <div
              className="tonni_tm_counter_list wow fadeInUp"
              data-wow-duration="1s"
            >
              <ul>
                <li>
                  <div className="list_inner">
                    <span className="title">שנות נסיון</span>
                    <h3>
                      <Counter end={4} />+
                    </h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <span className="title">מוצרים</span>
                    <h3>
                      <Counter end={50} />+
                    </h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <span className="title">לקוחות מדי יום</span>
                    <h3>
                      <Counter end={12} />+
                    </h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <span className="title">איכות ושירות</span>
                    <h3>
                      <Counter end={100} />%
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
            <div className="contact_box">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <h3>
                  מצפה לשמוע ממך
                  <br />
                  לחץ{" "}
                  <a
                    className="contact_modalbox_link c-pointer"
                    onClick={() => setActive(true)}
                  >
                    ליצירת קשר
                  </a>
                </h3>
              </div>
            </div>
            <div className="short wow fadeInUp" data-wow-duration="1s">
              <div className="left">
                <span>
                  <a href="mailto:Polinaraishevich@gmail.com">
                    Polinaraishevich@gmail.com{" "}
                  </a>
                  <img className="svg" src="img/svg/vector3.svg" alt="" />
                </span>
              </div>
              <div className="right">
                <div className="social">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=61550588790705&mibextid=ZbWKwL">
                        <img
                          className="svg"
                          src="img/svg/social/facebook-stroke.svg"
                          alt=""
                        />
                      </a>
                    </li>

                    <li>
                      <a href="https://instagram.com/polinaray_8?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
                        <img
                          className="svg"
                          src="img/svg/social/instagram-stroke.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="copyright">
                  <p>
                    © {new Date().getFullYear()} by{" "}
                    <a
                      href="https://avihaymedia.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ben Argaman.
                    </a>{" "}
                    All rights reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
          <span className="shape">
            <img className="svg" src="img/svg/vector.svg" alt="" />
          </span>
          <span className="shape2">
            <img className="svg" src="img/svg/vector2.svg" alt="" />
          </span>
        </div>
      </div>
    </Fragment>
  );
};
export default Contact;
