import SocialIcons from "../SocialIcons/SocialIcons";
import "./contactDetails.scss"

export default function ContactDetails() {
    return (
        <div className="contact-details">
            <div>
                <h3>Address</h3>
                <p>0199 Taylor Park, North Dakota, USA</p>
            </div>
            <div>
                <h3>Call us on</h3>
                <ul>
                    <li>+1 98723 42023</li>
                    <li>info@logoipsum.com</li>
                </ul>
            </div>
            <div>
                <h3>Social Media</h3>
                <SocialIcons color="blue"/>
            </div>
        </div>
    );
}