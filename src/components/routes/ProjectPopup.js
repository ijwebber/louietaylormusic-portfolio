import './ProjectPopup.css';

export default function ProjectPopup(props) {
    const opacity = props.isOpen ? 1 : 0;
    const pointerEvents = props.isOpen ? "auto" : "none";

    return (
        <div className="popup-box" style={{opacity: opacity, pointerEvents: pointerEvents}}>
            <div className="back" onClick={props.handleClose}></div>
            <div className="box">
                {props.content}
            </div>
            <div className="close-icon" onClick={props.handleClose}>Close</div>
        </div>
    );
}