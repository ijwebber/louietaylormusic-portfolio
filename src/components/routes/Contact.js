import Page from './Page';
import './Contact.css'


export default function Contact(props) {
    return (
        <Page position={props.position}>
            <div className="Contact" style={{ marginTop: "122px" }}>
                <div className="back-form">
                    <p className="title">Contact</p>
                </div>
            </div>
        </Page>
    );
}