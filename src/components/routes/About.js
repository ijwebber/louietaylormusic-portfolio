import Page from './Page';

export default function About(props) {
    return (
        <Page position={props.position}>
            <div className="Music">
                <div style={{ height: "72px" }}></div>
                About
            </div>
        </Page>
    );
}