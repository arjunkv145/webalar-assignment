import design_icon from '../../icons/design.png';
import development_icon from '../../icons/development.png';
import marketing_icon from '../../icons/marketing.png';
import './ourServices.scss'

export default function OurServices() {

    const services = [
        {
            img_src: design_icon,
            img_alt: "design icon",
            title: "Design",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Et ut nunc, libero dolor, gravida. 
                In metus, tortor, nunc sed egestas erat diam arcu.`
        },
        {
            img_src: development_icon,
            img_alt: "development icon",
            title: "Development",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Et ut nunc, libero dolor, gravida. 
                In metus, tortor, nunc sed egestas erat diam arcu.`
        },
        {
            img_src: marketing_icon,
            img_alt: "marketing icon",
            title: "Marketing",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Et ut nunc, libero dolor, gravida. 
                In metus, tortor, nunc sed egestas erat diam arcu.`
        },
    ];


    return (
        <div className='services'>
            <div className='services__wrapper-one'>
                <h2 className='services__title'>Our services that we provide</h2>
                <p className='services__description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc,
                    libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam
                    arcu. Laoreet orci nisl etiam risus ut nec. Facilisi ipsum viverra diam
                    arcu massa amet non metus ornare.
                </p>
            </div>
            <div className='services__wrapper-two'>
                {
                    services.map(service => (
                        <div key={service.title} className='service'>
                            <div className='service__icon--wrapper'>
                                <img src={service.img_src} alt={service.img_alt} className='service__icon'/>
                            </div>
                            <h3 className='service__title'>{ service.title }</h3>
                            <p className='service__description'>{ service.description }</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}