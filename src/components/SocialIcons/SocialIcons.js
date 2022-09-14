import instagram_white from '../../icons/instagram-white.png';
import twitter_white from '../../icons/twitter-white.png';
import facebook_white from '../../icons/facebook-white.png';

import instagram_blue from '../../icons/instagram-blue.png';
import twitter_blue from '../../icons/twitter-blue.png';
import facebook_blue from '../../icons/facebook-blue.png';

import './socialIcons.scss';

export default function SocialIcons(props) {

    const icons_white = [
        { src: instagram_white, alt: "instagram icon" }, 
        { src: twitter_white, alt: "twitter icon" }, 
        { src: facebook_white, alt: "facebook icon" }
    ];
    const icons_blue = [
        { src: instagram_blue, alt: "instagram icon" }, 
        { src: twitter_blue, alt: "twitter icon" }, 
        { src: facebook_blue, alt: "facebook icon" }
    ];

    const getIcons = icons => icons.map(icon => {
        return <img src={icon.src} alt={icon.alt} key={icon.alt} />
    })

    return (
        <div className='icons'>
            {
                props.color === "blue" ? getIcons(icons_blue) : getIcons(icons_white)
            }
        </div>
    );
}