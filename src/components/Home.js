import Image from "next/image";

const Home = () => {
  return (
    <div className="tonni_tm_section" id="home">
      <div className="tonni_tm_hero">
        <div className="background">
          <div className="image fadeIn">
            <Image
              src="/img/hero/1.png"
              alt="Description of the image"
              layout="fill"
              sizes="100vw"
            />
          </div>{" "}
          <div className="overlay" />
        </div>
        <div className="container">
          <div className="content">
            <div className="content_in">
              <h3 className="name">
                <span>היי</span> אני
                <br />
                פולינה.
              </h3>
              <span className="welcome">ברוכים הבאים לקליניקה שלי</span>
              <div className="tonni_tm_button">
                <a className="anchor" href="#news">
                  לחץ לראות את הטיפולים שלנו{" "}
                  <Image
                    src="/img/svg/arrow-right.svg"
                    width={10}
                    height={10}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="play_button">
          <a
            className="popup-youtube"
            href="//www.youtube.com/embed/d5a69220ohc?autoplay=1"
          />
        </div>
        <span className="shape1">
          <img className="svg anim_circle" src="img/svg/icon5.svg" alt="" />
        </span>
        <span className="shape2">
          <Image src="/img/svg/icon7.svg" width={70} height={70} />
        </span>
        <span className="shape3">
          <Image src="/img/svg/icon3.svg" width={70} height={70} />
        </span>
        <span className="shape4">
          <Image src="/img/svg/icon6.svg" width={70} height={70} />
        </span>
        <span className="shape5">
          <Image src="/img/svg/icon1.svg" width={70} height={70} />
        </span>
        <span className="shape6">
          <Image src="/img/svg/icon5.svg" width={70} height={70} />
        </span>
        <span className="shape7">
          <Image src="/img/svg/icon2.svg" width={70} height={70} />
        </span>
      </div>
    </div>
  );
};
export default Home;
