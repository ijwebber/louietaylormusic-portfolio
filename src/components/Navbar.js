import './Navbar.css';

export default function Navbar(props) {

    function homeClicked() {
        props.onClicked("home");
    }

    function musicClicked() {
        props.onClicked("music");
    }

    function aboutClicked() {
        props.onClicked("about");
    }

    function takenotesClicked() {
        props.onClicked("takenotes");
    }

    function contactClicked() {
        props.onClicked("contact");
    }

    return (
        <div className="header">
            <div className="links">
                <a className="link" href="/#home" onClick={homeClicked}>Home</a>
                <a className="link" href="/#music" onClick={musicClicked}>Music</a>
                <a className="link" href="/#about" onClick={aboutClicked}>About</a>
                <a className="link" href="/#takenotes" onClick={takenotesClicked}>TakeNotes</a>
                <a className="link" href="/#contact" onClick={contactClicked} style={{ marginRight: "0px" }}>Contact</a>
            </div>
        </div>
    );
}