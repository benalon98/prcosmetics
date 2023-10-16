import { useEffect } from "react";
import { scroll_ } from "../utilits";

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", scroll_);
  }, []);

  return (
    <div className="tonni_tm_header">
      <div className="container bigger">
        <div className="header_in">
          <div className="logo">
            <a href="#">
              <img src="img/logo/logo.png" alt="" />
            </a>
          </div>
          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">בית</a>
              </li>
              <li>
                <a href="#about">אודות</a>
              </li>
              <li>
                <a href="#news">טיפולים</a>
              </li>
              <li>
                <a href="#portfolio">חוות דעת</a>
              </li>

              <li>
                <a href="#contact">צור קשר</a>
              </li>
            </ul>
            <span className="ccc" />
          </div>
          <div className="follow">
            <span>עקבו אחרינו:</span>
            <ul>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61550588790705&mibextid=ZbWKwL">
                  <img
                    className="svg"
                    src="img/svg/social/facebook.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/polinaray_8?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
                  <img
                    className="svg"
                    src="img/svg/social/instagram.svg"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
