import Image from "next/image";
import React from "react";

function Certificates() {
  return (
    <div className="tonni_tm_section" id="home">
      <div className="tonni_tm_hero">
        <div className="background">
          <div className="image fadeIn">
            <Image
              src="/img/certificates/cert.png"
              alt="Description of the image"
              layout="fill"
              sizes="100vw"
            />
          </div>{" "}
          <div className="overlay" />
        </div>
      </div>
    </div>
  );
}

export default Certificates;
