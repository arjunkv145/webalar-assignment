import arrow_circle from '../../icons/arrow-circle.png';
import './projectCard.scss';

export default function ProjectCard(props) {
    return (
        <div className='project'>
            <div className='project__image'></div>
            <div className='project__content'>
                <div className='project--wrapper'>
                    <h3 className='project__title'>{ props.title }</h3>
                    <p className='project__description'>{ props.description }</p>
                </div>
                <img 
                    src={arrow_circle} 
                    alt="an arrow icon which is a link that opens a detailed page of this project"
                    className='project__link' 
                />
            </div>
        </div>
    );
}