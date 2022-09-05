import Page from './Page';
import './About.css';

// Images
//import About1 from '../../assets/about1.jpg';
//import About2 from '../../assets/about2.jpg';
import imgAbout from '../../assets/about.jpg';

export default function About(props) {
    return (
        <Page position={props.position}>
            <div className="About" style={{ marginTop: (props.marginTop + 75).toString() + "px" }}>
                <div className="content">
                    <div className="row">
                        <div className="text">
                            Louie is a composer from the United Kingdom, currently specializing in children’s entertainment, animation and video games. Louie completed his Bachelor of Art’s Degree in Music at the University of Bristol with a First Class Honours in 2021 and then he has been a regular composer and producer across the CoComelon brand including its main YouTube series content, Netflix compilation series, CoComelon Dance series, the new CoComelon Storytime series for Spotify Originals and CoComelon Albums. Louie also writes music for computer games such as Adapt, an indie game focusing on evolutionary simulation, and working with award-winning composer Joris de Man on orchestrating the music for an upcoming Toy Logic video game. 
                            <br></br>
                            <br></br>
                            Louie also works on more niche children’s content, for example a quirky internet series for children about coding, called Coding with QMO produced by Playa Digital and directed by BBC director Geoff Coward, which is proving to be a popular method for children to learn about coding on YouTube!
                            <br></br>
                            <br></br>
                            Growing up surrounded by the natural world, taking long family walks into the stunning rural landscape as often as possible, Louie was very much inspired by nature; it is at the heart of his music. Being a composer that is inspired by any and all music, from all around the world, he loves writing  for all mediums: film, games, TV, classical concerts or my own solo projects.
                        </div>
                        <div className="image-wrapper">
                            <img id="about-image-1" classname="image" src={imgAbout} alt="Louie Taylor"></img>
                        </div>
                    </div>               
                </div>     
            </div>
        </Page>
    );
}