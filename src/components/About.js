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
                  <h3>80 / 20</h3>
                  <span className="rounded">
                    <Image src="/img/about/flower.png" alt="" layout="fill" />
                  </span>
                </div>
                <div className="experience">
                  <h3>.</h3>
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
                <h3>השיטה הייחודית שלנו</h3>
              </div>
              <div className="text">
                <p>
                  הטיפול בקליניקה מהווה 20% והטיפול בבית 80% משגרת טיפוח הפנים.
                  אני תמיד אומרת ללקוחות שלטיפול בקליניקה יש תוצאות מידיות
                  שנראות לעין, אך כדי לשמור ולשמר אותן ישנה חשיבות רבה להמשך
                  טיפול בבית והוא חלק בלתי נפרד. התמדה בשימוש בחומרים פעילים
                  בבית בהמשך לטיפול בקליניקה מאריך את יעילות הטיפול ומבטיח עור
                  בריא לאורך כל התקופה שבין הביקורים בקליניקה, שומר ומשפר את
                  תוצאות ההליכים. טיפול ביתי כולל ניקוי יסודי של העור, הנחת
                  מוצרי לחות והזנה וכן קרם הגנה מהשמש . הטיפול מסייע בהסרת
                  לכלוך, פיח , עודפי חלב ותאים מתים, מה שמקדם חדירה טובה יותר של
                  החומרים הפעילים לעור ומסייע בשמירה על רמת לחות עור אופטימלית
                  ומשפר את מבנה העור וגמישותו. זה דוחה את הופעת סימני ההזדקנות
                  ומסייע בחיזוק תפקודי ההגנה הטבעיים של העור שעוזרים לעור להילחם
                  בהשפעות סביבתיות מזיקות.
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
