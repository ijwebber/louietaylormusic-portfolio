import './Home.css';
import logo from '../../assets/logo.png';
import notes from '../../assets/music-notes.png';

export default function Home() {
    return (
        <div className="Home">
            <div style={{ height: "72px" }}></div>
            <img src={notes} className="music-notes" alt="musical-notes" />
            <div className="title">
                <img src={logo} className="logo" alt="logo" />
                <p className="name">Louie Taylor</p>
                <p className="about">Composer & Educator</p>
            </div>
        </div>
    );
} 