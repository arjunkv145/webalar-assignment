import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import OurWorks from '../../components/OurWorks/OurWorks';
import MainCTA from '../../components/MainCTA/MainCTA';
import TrustedCompanies from '../../components/TrustedCompanies/TrustedCompanies';
import OurServices from '../../components/OurServices/OurServices';
import main_image from '../../images/main-image.png';
import "./home.scss"

export default function Home() {
    return (
        <>
            <Navbar />
            <section className='section section-one'>
                <div className='section-one--wrapper'>
                    <MainCTA display="column" color="dark">
                        Let's create something great together
                    </MainCTA>
                    <img 
                        src={main_image}
                        alt=""
                    />
                </div>
            </section>
            <section className='section section-two'>
                <TrustedCompanies />
                <hr />
                <OurServices />
            </section>
            <section className='section section-three'>
                <OurWorks />
            </section>
            <Footer />
        </>
    );
}