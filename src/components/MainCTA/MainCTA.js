import Button from "../Button/Button";
import "./mainCTA.scss";

export default function MainCTA(props) {
    return (
        <div className={`main_cta ${props.display} ${props.color}`}>
            <h1 className="main_cta__title">{ props.children }</h1>
            <div className="main_cta--wrapper">
                <p className="main_cta__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc,
                    libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam
                    arcu.
                </p>
                <Button>Let's Talk</Button>
            </div>
        </div>
    );
}