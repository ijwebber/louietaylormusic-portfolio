import Page from './Page';
import './Contact.css';
import emailjs from 'emailjs-com';

export default function Contact(props) {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qos5io9', 'template_v0p096w', e.target, 'user_lbxHNDSazycTCY07CDlvG')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    }

    return (
        <Page position={props.position}>
            <div className="Contact" style={ { marginTop: (props.marginTop - 47 + 122).toString() + "px" }}>
                    <form className="contact-form" onSubmit={sendEmail}>
                        <div className="title">Contact Me</div>
                        <div className="enter-box">
                            <input type="text" className="" placeholder="Name" name="name"/>
                        </div>
                        <div className="enter-box">
                            <input type="email" className="" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="enter-box">
                            <input type="text" className="" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="enter-box">
                            <textarea className="" id="" cols="30" rows="8" placeholder="Message" name="message"></textarea>
                        </div>
                        <div className="">
                            <input className = "submit" type="submit" value="Send Message"></input>
                        </div>
                    </form>
                    <p className="alternative">Alternatively: <br></br>Email Me: <a href="mailto:louie@louietaylor.co.uk">louie@louietaylor.co.uk</a>
                        <br />Send me a message on <a href="https://m.me/louietaylormusic" target="_blank" rel="noopener noreferrer">Facebook</a></p>

            </div>
        </Page>
    );
}