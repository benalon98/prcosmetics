import { useState } from "react";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="tonni_tm_mobile_menu">
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          <div className="logo">
            <a href="#">
              <img src="img/logo/logo.png" alt="" />
            </a>
          </div>
          <div className="trigger">
            <div className="hamburger hamburger--slider">
              <div className="hamburger-box" onClick={() => setToggle(!toggle)}>
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown" style={{ display: toggle ? "block" : "none" }}>
        <div className="dropdown_inner">
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
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;