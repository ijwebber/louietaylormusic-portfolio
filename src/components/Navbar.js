import './Navbar.css';
import facebook from '../assets/logos/facebook.png';
import instagram from '../assets/logos/instagram.png';
import youtube from '../assets/logos/youtube.png';
import soundcloud from '../assets/logos/soundcloud.png';


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


            <div class="column side" >
                <div className="logos">
                    <a href="https://www.facebook.com/louietaylormusic" target="_blank" rel="noreferrer noopener" className="logo-lg"><img src={facebook} className="lg" alt="facebook" /></a>
                    <a href="https://www.instagram.com/louie_taylorrrrr/" target="_blank" rel="noreferrer noopener" className="logo-lg"><img src={instagram} className="lg" alt="instagram" /></a>
                    <a href="https://www.youtube.com/user/1LEDGEProductions1" target="_blank" rel="noreferrer noopener" className="logo-sm"><img src={youtube} className="sm" alt="youtube" /></a>
                    <a href="https://soundcloud.com/louiejtaylor" target="_blank" rel="noreferrer noopener" className="logo-sm" style={{ marginTop: "3px" }}><img src={soundcloud} className="sm" alt="soundcloud" /></a>
                </div>
            </div>
            <div class="column middle" >
                <div className="links">
                    <a className="link" href="/#home" onClick={homeClicked} style={{ color: props.current === "home" ? "white" : "#FF6C00" }}>Home</a>
                    <a className="link" href="/#music" onClick={musicClicked} style={{ color: props.current === "music" ? "white" : "#FF6C00" }}>Music</a>
                    <a className="link" href="/#about" onClick={aboutClicked} style={{ color: props.current === "about" ? "white" : "#FF6C00" }}>About</a>
                    <a className="link" href="/#takenotes" onClick={takenotesClicked} style={{ color: props.current === "takenotes" ? "white" : "#FF6C00" }}>TakeNotes</a>
                    <a className="link" href="/#contact" onClick={contactClicked} style={{ color: props.current === "contact" ? "white" : "#FF6C00" }}>Contact</a>
                </div>
            </div>
            <div class="column side"> </div>
        </div >
    );
}