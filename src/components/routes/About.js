import Page from './Page';
import './About.css';

// Images
import About1 from '../../assets/about1.jpg';
import About2 from '../../assets/about2.jpg';

export default function About(props) {
    return (
        <Page position={props.position}>
            <div className="About" style={{ marginTop: (props.marginTop + 75).toString() + "px" }}>
                <div className="content">
                    <div className="row">
                        <div className="text">
                            My name is Louie Taylor, I’m a composer from the United Kingdom. 
                            Growing up surrounded by the natural world, 
                            taking long family walks into the stunning rural landscape as often as possible, 
                            I was very much inspired by nature; it is the heart of my music. 
                            I’m a composer that is inspired by all the music I can possibly consume, 
                            from all around the world. So, I love composing for all mediums: film, games, TV, classical concerts or my own solo projects.
                        </div>
                        <div className="image-wrapper">
                            <img id="about-image-1" classname="image" src={About1} alt="Louie Taylor"></img>
                        </div>
                    </div>

                    <div className="row">
                        <div className="image-wrapper">
                            <img id="about-image-2" classname="image" src={About2} alt="Louie Taylor"></img>
                        </div>
                        <div className="text">
                            Between 2018-2021 I have completed a Bachelor of Art’s Degree 
                            in Music at the University of Bristol and during my studies I have 
                            been working on several projects as a composer. Now that I have finished, 
                            I work full time as a composer and producer on several different projects. 
                            Currently, my main client is Moonbug Entertainment LTD, where I work primarily on CoComelon for YouTube, 
                            Netflix and more. I am also working on a video game called Adapt, 
                            a nature themed evolution and survival simulator, and several other projects whilst running a small YouTube channel 
                            where I release educational free music content. 
                            <br></br>
                            <br></br>
                            My aims for the next few years are to focus on film and video game music, 
                            whilst working on my second symphony. 
                            Please feel free to reach out if you think I might be right for your project.
                        </div>
                    </div>                    
                </div>     
            </div>
        </Page>
    );
}