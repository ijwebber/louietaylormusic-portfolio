import Page from './Page';
import './Projects.css';


// Images
import AdaptPic from '../../assets/project-photos/Adapt_Logo.png';
import AOTE from '../../assets/project-photos/AOTE_Cover.png';
import Cocomelon from '../../assets/project-photos/cocomelon.png';
import CocomelonNetflix from '../../assets/project-photos/netflix_cocomelon.jpeg'
import Drain from '../../assets/project-photos/drain.png';
import InnerSpirits from '../../assets/project-photos/inner_spirits.png';
import PastByJune from '../../assets/project-photos/past_by_june.jpg';
import ScoreRelief from '../../assets/project-photos/Score_Relief.jpeg';
import Summer from '../../assets/project-photos/summer.png';
import SymphonyNo1 from '../../assets/project-photos/Symphony_No1.png';
import CocoStoryPic from '../../assets/project-photos/CCMStory.jpeg';
import StagesPic from '../../assets/project-photos/Stages.png';
import imgCocomelonAlbums from '../../assets/project-photos/cocomelon_albums.jpeg';
import imgCodingQMO from '../../assets/project-photos/CodingQMO.jpeg';


import ProjectPopup from './ProjectPopup';
import { useState } from 'react';
import ProjectPages from './ProjectPages';

function Project(props) {
    return (
        <div className="project" id={props.name} onClick={props.togglePopup}>
            <img src={props.img} alt="project" />
            <div className="text-wrapper">
                <div className="text">
                    <p className="title">{props.title}</p>
                    -
                    <p className="subtitle">{props.subtitle}</p>
                    -
                    <p className="role">{props.role}</p>
                </div>
            </div>
        </div>
    );
}

function ProjectGrid(props) {
    const togglePopup = props.togglePopup;

    // Closures for each popup
    const popupSymphonyNo1 = () => {return togglePopup(ProjectPages.SymphonyNo1())}
    const popupInnerSpirits = () => {return togglePopup(ProjectPages.InnerSpirits())}
    const popupCocomelon = () => {return togglePopup(ProjectPages.Cocomelon())}
    const popupCocomelonNetflix = () => {return togglePopup(ProjectPages.CocomelonNetflix())}
    const popupAdapt = () => {return togglePopup(ProjectPages.Adapt())}
    const popupCirclingTheDrain = () => {return togglePopup(ProjectPages.CirclingTheDrain())}
    const popupSummerHeat = () => {return togglePopup(ProjectPages.SummerHeat())}
    const popupScoreRelief2021 = () => {return togglePopup(ProjectPages.ScoreRelief2021())}
    const popupPastByJune = () => {return togglePopup(ProjectPages.PastByJune())}
    const popupAlchemyEarth = () => {return togglePopup(ProjectPages.AlchemyEarth())}
    const popupCocomelonStorytime = () => {return togglePopup(ProjectPages.CocomelonStorytime())}
    const popupStages = () => {return togglePopup(ProjectPages.Stages())}
    const popupCocomelonAlbum = () => {return togglePopup(ProjectPages.CocomelonAlbum())}
    const popupCodingQMO = () => {return togglePopup(ProjectPages.CodingQMO())}

    return (
        <div className="project-pics">
            <Project img={imgCocomelonAlbums} name="CocomelonAlbums" title={<span>CoComelon<br></br>Albums</span>} subtitle={<span>Children’s Music</span>} role="Composer" togglePopup={popupCocomelonAlbum}></Project>
            <Project img={imgCodingQMO} name="CodingQMO" title={<span>Coding with QMO</span>} subtitle={<span>Children’s Show</span>} role={"Composer"} togglePopup={popupCodingQMO}></Project>
            <Project img={CocoStoryPic} name="CocomelonStorytime" title={<span>CoComelon<br></br>Storytime</span>} subtitle={<span>Narrated Children’s<br></br>Stories Podcast</span>} role="Composer" togglePopup={popupCocomelonStorytime}/>
            <Project img={AdaptPic} name="AdaptPic" title="Adapt" subtitle="Video Game" role="Composer" togglePopup={popupAdapt}/>
            <Project img={CocomelonNetflix} name="CocomelonNetflix" title= {<span>CoComelon<br></br>Netflix<br></br>Compilations</span>} subtitle="Netflix Children's Show" role="Composer & Songwriter" togglePopup={popupCocomelonNetflix}/>
            <Project img={SymphonyNo1} name="SymphonyNo1" title="Symphony No. 1" subtitle="Concert Music" role="Composer" togglePopup={popupSymphonyNo1}/>
            <Project img={StagesPic} name="Stages" title="Stages" subtitle={<span>Virtual Performance of<br></br>Classical Concert Works</span>} role="Composer" togglePopup={popupStages}/>    
            <Project img={Cocomelon} name="Cocomelon" title="CoComelon" subtitle="YouTube Children's Show" role="Composer & Songwriter" togglePopup={popupCocomelon}/>
            <Project img={InnerSpirits} name="InnerSpirits" title={<span>Inner Spirits<br></br>for<br/>String Quartet</span>} subtitle="Concert Music" role="Composer" togglePopup={popupInnerSpirits}/>
            <Project img={Drain} name="Drain" title={<span>Circling <br></br>The Drain</span>} subtitle="Film" role="Composer" togglePopup={popupCirclingTheDrain}/>
            <Project img={Summer} name="Summer" title={<span>Summer <br></br> Heat</span>} subtitle="Film" role="Composer" togglePopup={popupSummerHeat}/>
            <Project img={AOTE} name="AOTE" title={<span>Alchemy<br></br>of the Earth</span>} subtitle="Video Game" role="Composer" togglePopup={popupAlchemyEarth}/>
            <Project img={ScoreRelief} name="ScoreRelief" title={<span>Score Relief <br></br> Competition 2021</span>} subtitle="Film (Rescore)" role="Composer" togglePopup={popupScoreRelief2021}/>
            <Project img={PastByJune} name="PastByJune" title={<span>The Past <br></br> by June</span>} subtitle="Film" role="Composer" togglePopup={popupPastByJune}/>            
        </div>
    );
}

export default function Projects(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [popup, setPopup] = useState(ProjectPages.SymphonyNo1());
 
    const togglePopup = () => {
        setIsOpen(!isOpen);        
    }

    const togglePopupWithChange = (content) => {
        setPopup(content);
        setIsOpen(!isOpen);
    }

    return (
        <Page position={props.position}>
            <div className="Projects" style={{ marginTop: (props.marginTop + 50).toString() + "px" }}>
                <ProjectGrid togglePopup={togglePopupWithChange}/>

                {<ProjectPopup
                    content={
                        popup
                    }
                    handleClose={togglePopup}
                    isOpen={isOpen}
                />}
            </div>

            
        </Page>
    );
}