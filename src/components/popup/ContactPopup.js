import Image from "next/image";
import useClickOutside from "../../useClickOutside";

const ContactPopup = ({ show, close }) => {
  let domNode = useClickOutside(() => {
    close();
  });
  return (
    <div className={`tonni_tm_modalbox ${show ? "opened" : ""}`}>
      <div className="box_inner" ref={domNode}>
        <div className="close">
          <a className="c-pointer" onClick={() => close()}>
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">
          <div className="tonni_tm_modalbox_contact">
            <div className="contact_title">
              <span>צור קשר</span>
              <h3>דברו איתנו</h3>
            </div>
            <div className="tonni_tm_map">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width="100%"
                    height={375}
                    id="gmap_canvas"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.3260009874275!2d34.7896468!3d31.2393975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15026610c6b0d829%3A0xdea0ba16c9ade4b4!2sKakal%20St%20139%2C%20Beersheba%2C%208420015!5e0!3m2!1sen!2sil!4v1694709354251!5m2!1sen!2sil"
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                  />

                  <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon" />
                  <br />
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".mapouter{position:relative;text-align:right;height:375px;width:100%;}",
                    }}
                  />
                  <a href="https://www.embedgooglemap.net">
                    how to add google map
                  </a>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".gmap_canvas {overflow:hidden;background:none!important;height:375px;width:100%;}",
                    }}
                  />
                </div>
              </div>
              {/* Get your API here https://www.embedgooglemap.net */}
            </div>
            <div className="fields">
              <form
                action="/"
                method="post"
                className="contact_form"
                id="contact_form"
                autoComplete="off"
              >
                <div
                  className="returnmessage"
                  data-success="Your message has been received, We will contact you soon."
                />
                <div className="empty_notice">
                  <span>Please Fill Required Fields</span>
                </div>
                <div className="first">
                  <ul>
                    <li>
                      <input id="name" type="text" placeholder="שם" />
                    </li>
                    <li>
                      <input id="email" type="text" placeholder="כתובת דוא״ל" />
                    </li>
                  </ul>
                </div>
                <div className="last">
                  <textarea
                    id="message"
                    placeholder="הודעה"
                    defaultValue={""}
                  />
                </div>
                <div className="tonni_tm_button">
                  <a id="send_message" href="#">
                    שלח{" "}
                    <Image
                      src="/img/svg/arrow-right.svg"
                      alt=""
                      width={10}
                      height={10}
                      className="svg"
                    />
                  </a>
                </div>
                {/* If you want to change mail address to yours, please open modal.php and go to line 4 */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPopup;
