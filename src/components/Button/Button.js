import './button.scss';

export default function Button(props) {
    return (
        <button className='btn' {...props}>
            {props.children}
        </button>
    );
}