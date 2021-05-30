import Page from './Page';
import './About.css';

export default function About(props) {
    return (
        <Page position={props.position}>
            <div className="About">
                This page is coming soon.
            </div>
        </Page>
    );
}