import MainCTA from "../MainCTA/MainCTA";
import Logo from "../Logo/Logo"
import SocialIcons from "../SocialIcons/SocialIcons";
import "./footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <MainCTA display="row" color="light">
                Let's work together
            </MainCTA>
            <div className="footer--wrapper">
                <div className="footer__socials">
                    <Logo color="white" />
                    <SocialIcons color="white" />
                </div>
                <div className="footer__info">
                    <div>
                        <p>Address</p>
                        <ul>
                            <li>0199 Taylor Park,</li>
                            <li>North Dakota, USA</li>
                        </ul>
                    </div>
                    <div>
                        <p>Call us on</p>
                        <ul>
                            <li>+1 98723 42023</li>
                            <li>info@logoipsum.com</li>
                        </ul>
                    </div>
                    <div>
                        <p>Our Policies</p>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms of Use</li>
                            <li>Terms of Use</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__copyrights">
                <p className="footer__copyrights__text">
                Copyright © Webalar. All Rights Reserved
                </p>
            </div>
        </footer>
    );
}