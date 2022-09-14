import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import trusted_company_1 from '../../logos/trusted-company-1.png';
import trusted_company_2 from '../../logos/trusted-company-2.png';
import trusted_company_3 from '../../logos/trusted-company-3.png';
import trusted_company_4 from '../../logos/trusted-company-4.png';
import './trustedCompanies.scss';

export default function TrustedCompanies() {

    const trusted_company_logos = [
        trusted_company_1,
        trusted_company_2,
        trusted_company_3,
        trusted_company_4,
        trusted_company_1,
        trusted_company_2,
        trusted_company_3,
        trusted_company_4
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2
                }
              },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="trusted-companies">
            <div className="trusted-companies--wrapper">
                <div className="trusted-companies__line"></div>
                <h2 className="trusted-companies__title">Trusted Companies</h2>
                <div className="trusted-companies__line"></div>
            </div>
            <div className="trusted-companies__slider">
            <Slider {...settings}>
                {
                    trusted_company_logos.map((logo, index) => (
                        <div key={index}>
                            <img src={logo} alt=""/>
                        </div>
                    ))
                }
            </Slider>
            </div>
        </div>
    );
}