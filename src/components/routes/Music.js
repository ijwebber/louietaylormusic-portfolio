import './Music.css';
import Page from './Page';

function Soundcloud() {
    return (

        <div className="soundcloud">

            <div className="element">
                <iframe title="fantasy" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1099852030&color=%23ff6c00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
            </div>

            <div className="element">
                <iframe title="action" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1099856086&color=%23ff6c00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
            </div>

            <div className="element">
                <iframe title="drama" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1152406642&color=%23ff6c00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
            </div>

            <div className="element">
                <iframe title="classical" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/545734701&color=%23ff6c00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
            </div>

            <div className="element">
                <iframe title="piano" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1099866190&color=%23ff6c00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
            </div>

            <div className="element">
                <iframe title="electronic" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1099853356&color=%23ff6c00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
            </div>
        </div>
    );
}

export default function Music(props) {
    return (
        <Page position={props.position}>
            <div className="Music" style={{ marginTop: (props.marginTop - 47 + 122).toString() + "px" }}>
                <Soundcloud />
            </div>
        </Page>
    );
}