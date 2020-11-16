import Page from './Page';

export default function TakeNotes(props) {
    return (
        <Page position={props.position}>
            <div className="Music">
                <div style={{ height: "72px" }}></div>
                TakeNotes
            </div>
        </Page>
    );
}