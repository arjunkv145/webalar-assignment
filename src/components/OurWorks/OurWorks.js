import ProjectCard from '../ProjectCard/ProjectCard';
import Button from '../Button/Button';
import './ourWorks.scss';
import { useState } from 'react';

const ourWorks_data = [
    {
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        title: "Project 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        title: "Project 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        title: "Project 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        title: "Project 7",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
];

export default function OurWorks() {
    const [viewState, setViewState] = useState({
        text: "More",
        data: ourWorks_data.slice(0, 3)
    })

    const handleClick = () => setViewState(prev => {
        if (prev.text === "More") {
            return { text: "Less", data: ourWorks_data }
        }
        else {
            return { text: "More", data: ourWorks_data.slice(0, 3) }
        }
    })

    return (
        <div className='our-works'>
            <h2 className='our-works__title'>Our Works</h2>
            <div className='our-works--grid'>
                {
                    viewState.data.map(({ title, description }) => (
                        <ProjectCard 
                            title={title}
                            description={description}
                            key={title}
                        />
                    ))
                }
            </div>
            <div className='our-works--center'>
                <Button onClick={handleClick}>View { viewState.text }</Button>
            </div>
        </div>
    );
}