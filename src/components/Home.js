import Image from "next/image";

const Home = () => {
  return (
    <div className="tonni_tm_section" id="home">
      <div className="tonni_tm_hero">
        <div className="background">
          <div className="image fadeIn">
            <Image
              src="/img/hero/1c.png"
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
                <span>קצת</span> עליי
              </h3>
              <span className="welcome">
                {" "}
                עבורי, להיות קוסמטיקאית זה לא רק לעשות טיפולים ולהתעסק עם
                מוצרים.
                <br />
                אני מאמינה שזה נותן לי הזדמנות ליצור אינטראקציה מיוחדת עם כל אחת
                <br />
                מהלקוחות שלי.
                <br /> המטרה שלי היא לשפר את העור שלך ולעזור לך להרגיש יפה
                <br /> מבחוץ ושלווה מבפנים.
                <br /> אני מאמינה שיופי מתחיל בהרמוניה פנימית ולכן אני משקיעה
                <br />
                בחיבור אישי איתך,
                <br /> תוך התחשבות
                <br /> במצבך הרגשי והפיזי. <br />
                כשאת מגיעה אלי להליך, זה הזמן שלך להתפנק!
                <br /> והמטרה שלי היא ליצור אווירה נעימה
                <br /> ורגועה שבה תוכלי להירגע לחלוטין.
              </span>
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
      </div>
    </div>
  );
};
export default Home;
