import Page from './Page';
import './Contact.css';
import louie_image from '../../assets/contact_photo.png';

export default function Contact(props) {
    return (
        <Page position={props.position}>
            <div className="Contact" style={{ marginTop: "122px" }}>
                <div className="back-form">
                    <p className="title">Contact me at <a href="mailto:louie@louietaylor.co.uk">louie@louietaylor.co.uk</a>
                        <br />or message me on <a href="https://m.me/louietaylormusic" target="_blank" rel="noopener noreferrer">Facebook</a>!</p>
                    <img src={louie_image} alt="louie taylor" className="profile"></img>
                </div>

            </div>
        </Page>
    );
}