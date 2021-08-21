import "./ProjectPages.css"

function PopupContent(props) {
    const vids = props.vids != null ? props.vids.map((vid) => 
        <iframe 
            className="video"
            src={vid}
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
        >           
        </iframe>
    ) : null;
    
    console.log(props.vids)

    return (
        <div className="popup-content">
            <b className="title">{props.title}</b>
            <div className="content">
                <div className="text">{props.text}</div>
                {vids != null ? <b className="title vid-title">Videos</b> : null}
                <div className="vids">
                    {vids}
                </div>
            </div>
        </div>
    );
}

export default class ProjectPages {
    static SymphonyNo1 = function() {
        return (
            <PopupContent
                title="Symphony No. 1"
                text={<div>My first symphony was composed between 2020 and 2021, being completed in May. It was a huge achievement for me as my first major work and I’m very proud of how this turned out and that it received a first class mark as my final year project for my university degree. 
                <br></br>
                <br></br>
                This symphony has been both an expression of my artistic identity and an exercise in abstract music. I was strongly inclined to write a some-what programmatic piece of music. Something that would depict a series of events in my life that meant a great deal to me and had a huge impact. However, after consideration and guidance, I realised that to truly express myself and transcend past a literal depiction of my experiences, abstraction should be my focus. It has been a great challenge to prioritise the music over my own ego, but in doing so I feel I have become more mindful as a person and more focused on the art itself rather than expressing my own feelings as they are. Which, as a result, has concluded in the same way I originally intended with a programmatic depiction: to write honest music which accurately expresses my emotions and experiences. 
                <br></br>
                <br></br>
                You can find a demo of my Symphony on my soundcloud here: <a href="https://soundcloud.com/louiejtaylor/sets/symphony-no-1-demo">https://soundcloud.com/louiejtaylor/sets/symphony-no-1-demo</a>
                <br></br>
                <br></br>
                And if you wish to see the full score please contact me for more information. Also, if you’re interested in performing my work, then please contact me too and we can arrange for the parts and score to be shared.
                </div>}
            ></PopupContent>
        );
    }

    static InnerSpirits = function() {
        return (
            <PopupContent
                title="Inner Spirits for String Quartet"
                text={<div>
                This composition was written about the nature of the mind and my own experiences discovering my own mind and its nature, temperament and weaknesses. Furthermore, the piece draws on topics from nature itself and tries to express the relationship of nature and its laws with the mind. 
                <br></br>
                <br></br>
                It was recorded fully by the wonderful string performer Liz Lister. The recording and score video can be found here: <a href="https://youtu.be/MhKT3YNcqcA">https://youtu.be/MhKT3YNcqcA </a>
                </div>}
                vids={["https://www.youtube.com/embed/MhKT3YNcqcA"]}
            ></PopupContent>
        );
    }

    static Cocomelon = function() {
        return (
            <PopupContent
                title="CoComelon"
                text={<div>
                    I have been a composer for the exciting and vibrant children's show ‘CoComelon’. I have been on board the composing team since January 2021 and hope to spend much more time involved. I am currently involved in the creation of their songs for their YouTube channel and the upcoming netflix series ‘CoComelon Lane’. I am also a composer on a new project called ‘Cocomelon Storytime’ which I hope to be able to disclose more information about in the coming months.
                    <br></br>
                    <br></br>
                    You can find CoComelon’s YouTube channel here: <a href="https://www.youtube.com/channel/UCbCmjCuTUZos6Inko4u57UQ">https://www.youtube.com/channel/UCbCmjCuTUZos6Inko4u57UQ</a>
                </div>}
            ></PopupContent>
        );
    }

    static Adapt = function() {
        return (
            <PopupContent
                title="Adapt"
                text={<div>
                    Adapt is a really fun and exciting new video game that is currently under development by Paul Herve. Paul invited me on his team as the game’s composer back in May 2020. Since then we have been working hard to create a unique and interactive soundtrack. We’ve tried to utilise FMOD to create adaptive music that changes along with your environment and game state. 
                    <br></br>
                    <br></br>
                    The game is set to release in mid-2022 and is being published on Steam by Slug Disco.
                    <br></br>
                    <br></br>
                    You can find an example of my work on adapt here: <a href="https://youtu.be/MnFdXfAAoDU ">https://youtu.be/MnFdXfAAoDU</a>
                </div>}
                vids={["https://www.youtube.com/embed/MnFdXfAAoDU"]}
            ></PopupContent>
        );
    }

    static CirclingTheDrain = function() {
        return (
            <PopupContent
                title="Circling The Drain"
                text={<div>
                    ‘Circling The Drain’ is a gripping short drama/thriller film that is set in the south of england. The film shows two old friends meet up and, out of desperation decide to commit a robbery and burglarize a country home. This results in some catastrophic and tragic outcomes. 
                    <br></br>
                    <br></br>
                    The full film will be released late 2021, but the full soundtrack album can be found here: <a href="https://youtu.be/ycahy6llWe8">https://youtu.be/ycahy6llWe8</a>
                    <br></br>
                    <br></br>
                    It will also be released on streaming services, such as spotify, very soon. 

                </div>}
                vids={["https://www.youtube.com/embed/ycahy6llWe8"]}
            ></PopupContent>
        );
    }

    static SummerHeat = function() {
        return (
            <PopupContent
                title="Summer Heat"
                text={<div>
                    This short, romantic, coming of age film was written about a young woman exploring her sexuality and finding out who she is. A sweet, progressive romance that explores some important themes such as parental acceptance and being okay with who you are. 
                    <br></br>
                    <br></br>
                    The soundtrack and films will be released in due course after a festival run.
                </div>}
            ></PopupContent>
        );
    }

    static ScoreRelief2021 = function() {
        return (
            <PopupContent
                title="Score Relief 2021: Spring - Rescore"
                text={<div>
                    I took part in the Score Relief 2021 Competition in early 2021 and had a great time doing so. I’m very proud of my work that I did for it and so you can find it below along with a full breakdown of my process and project session.
                    <br></br>
                    <br></br>
                    My entry to the Score Relief 2021 competition can be found here: <a href="https://youtu.be/oTfYuihK0ZM">https://youtu.be/oTfYuihK0ZM</a>
                    <br></br>
                    <br></br>
                    Also, a full breakdown walkthrough of my project logic session can be found on my YouTube channel here: <a href="https://youtu.be/sLBYwxKgjK0">https://youtu.be/sLBYwxKgjK0</a>
                </div>}
                vids={["https://www.youtube.com/embed/oTfYuihK0ZM", "https://www.youtube.com/embed/sLBYwxKgjK0"]}
            ></PopupContent>
        );
    }

    static PastByJune = function() {
        return (
            <PopupContent
                title="The Past By June"
                text={<div>
                    This film was a very theatrical and unique short-film about a young and insecure girl at school confronting her past actions through a long therapeutic monologue in front of her teacher. After complaining for a while in a rage about her peers, she comes to the realisation that she, too, can be in the wrong.
                    <br></br>
                    <br></br>
                    A sample of my work on the film can be found here: <a href="https://www.youtube.com/watch?v=r8SNA3-S1Tw">https://www.youtube.com/watch?v=r8SNA3-S1Tw</a>
                    <br></br>
                    <br></br>
                    And the full album is on my bandcamp here: <a href="https://louietaylor.bandcamp.com/releases">https://louietaylor.bandcamp.com/releases</a>
                </div>}
                vids={["https://www.youtube.com/embed/r8SNA3-S1Tw "]}
            ></PopupContent>
        );
    }

    static AlchemyEarth = function() {
        return (
            <PopupContent
                title="Alchemy of the Earth"
                text={<div></div>}
            ></PopupContent>
        );
    }
}

