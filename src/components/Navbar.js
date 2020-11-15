import './Navbar.css';

export default function Navbar() {
    return (
        <div className="header">
            <div className="links">
                <a className="link" href="/">Home</a>
                <a className="link" href="/music">Music</a>
                <a className="link" href="/about">About</a>
                <a className="link" href="/takenotes">TakeNotes</a>
                <a className="link" href="/contact" style={{ marginRight: "0px" }}>Contact</a>
            </div>
        </div>
    );
}