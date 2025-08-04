import React from "react";
const Footer = () => {
  return (
    <>
      <footer>
        <h1>
          Let's
          <br />
          #ConnectOnCutting?
        </h1>
        <aside>
          <a href="/" className="footerlink">home</a>
          <a href="/story" className="footerlink">story</a>
          <a href="/media" className="footerlink">media</a>
          <a href="/franchise" className="footerlink">franchise</a>
          <a href="/events" className="footerlink">Events</a>
          <a href="/chaiwalacares" className="footerlink">chai wala cares</a>
        </aside>

        <div>
          <h5>Email</h5>
          <a href="mailto:info@mbachaiwala.com">Info@mbachaiwala.com</a><br />
          <a href="mailto:franchise@mbachaiwala.com">Franchise@mbachaiwala.com</a>
        </div>

        <div>
          <h5>Phone</h5>
          <a href="tel:+91722905222">+91722905222</a>
        </div>

        <p>
          ©CopyRight 2022 MB CHAIWALA. MADE BY 
        </p>
      </footer>
      <div className="footer"></div>
    </>
  );
};

export default Footer;
