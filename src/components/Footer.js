import React from "react";
import "./Footer.css"




class Footer extends React.Component {

    render() {
        return(
            <div className="footer-box">
                <p className="logo-name"> Retro Perspective </p>
                <div className="footer-icons">
                <img src={"https://i.imgur.com/x2AIn6N.png"} alt="Logo" />
                <img src={"https://i.imgur.com/MZopKUP.png"} alt="Logo" />
                </div>

                <div className="bottom-footer">
                <p className="Footer-link-names">  Shows - Games  </p>
                <p className="Footer-link-terms">  Terms of Use - Privacy Policy   </p>
                <p className="Footer-link-date">  &copy; 2022 Retro Perspective    </p>
                </div>
            </div>
        )
    }


}

export default Footer;