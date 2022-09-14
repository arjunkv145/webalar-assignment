import logo_white from '../../logos/logo-white.png';
import logo_black from '../../logos/logo-black.png';
import './logo.scss';

export default function Logo(props) {

    const getLogo = logo => (
        <img 
            src={logo}
            alt="company logo"
            className="logo-img"
        />
    )

    return (
        <>
            {
                props.color === "white" ? getLogo(logo_white) : getLogo(logo_black)
            }
        </>
    );
}