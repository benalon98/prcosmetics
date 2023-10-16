import Image from "next/image";

const About = () => {
  return (
    <div className="tonni_tm_section" id="about">
      <div className="tonni_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <div className="left_inner">
                <div className="year">
                  <h3>4</h3>
                  <span className="rounded">
                    <Image src="/img/about/flower.png" alt="" layout="fill" />
                  </span>
                </div>
                <div className="experience">
                  <h3>+</h3>
                  <p>שנות ניסיון</p>
                  <span className="shape">
                    <Image src="/img/about/dots.png" alt="" layout="fill" />
                  </span>
                  <span className="circle_shape">
                    <Image src="/img/svg/icon1.svg" alt="" layout="fill" />
                  </span>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title">
                <span>אודות</span>
                <h3>קצת עלי</h3>
              </div>
              <div className="text">
                <p>
                  עבורי, להיות קוסמטיקאית זה לא רק לעשות טיפולים ולהתעסק עם
                  מוצרים. אני מאמינה שזה נותן לי הזדמנות ליצור אינטראקציה מיוחדת
                  עם כל אחת מהלקוחות שלי. המטרה שלי היא לשפר את העור שלך ולעזור
                  לך להרגיש יפה מבחוץ ושלווה מבפנים. אני מאמינה שיופי מתחיל
                  בהרמוניה פנימית ולכן אני משקיעה בחיבור אישי איתך, תוך התחשבות
                  במצבך הרגשי והפיזי. כשאת מגיעה אלי להליך, זה הזמן שלך להתפנק!
                  והמטרה שלי היא ליצור אווירה נעימה ורגועה שבה תוכלי להירגע
                  לחלוטין.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
