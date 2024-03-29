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
                text={<div>
                My first symphony was composed between 2020 and 2021, being completed in May. It was a huge achievement for me as my first major work and I’m very proud of how this turned out and that it received a first class mark as my final year project for my university degree.     
                <br></br>
                <br></br>
                This symphony has been both an expression of my artistic identity and an exercise in abstract music. I was strongly inclined to write a some-what programmatic piece of music. Something that would depict a series of events in my life that meant a great deal to me and had a huge impact. However, after consideration and guidance, I realised that to truly express myself and transcend past a literal depiction of my experiences, abstraction should be my focus. It has been a great challenge to prioritise the music over my own ego, but in doing so I feel I have become more mindful as a person and more focused on the art itself rather than expressing my own feelings as they are. Which, as a result, has concluded in the same way I originally intended with a programmatic depiction: to write honest music which accurately expresses my emotions and experiences. 
                <br></br>
                <br></br>
                The amazing Dad Village Symphony Orchestra produced a wonderful virtual performance of my symphony which you can find here: 
                <iframe 
                    title="Symphony No.1 Spotify"
                    style={{
                        width: "100%",
                        padding: "0 20%",
                        marginTop: "1vh",
                    }}
                            src="https://open.spotify.com/embed/album/1ea99yUudrKMfzuPDC6vhk" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                
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
                It was recorded fully by the wonderful string performer Liz Lister. The recording and score video can be found here: <a href="https://youtu.be/MhKT3YNcqcA" target="_blank" rel="noreferrer noopener">https://youtu.be/MhKT3YNcqcA </a>
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
                        I have been a composer for the exciting and vibrant children's show ‘CoComelon’. I have been on board the composing team since January 2021 and hope to spend much more time involved. I am currently involved in the creation of their songs for their Core Production content which is for their YouTube channel. I am also a composer on a new project called ‘Cocomelon Storytime’ which I hope to be able to disclose more information about in the coming months.
                        <br></br>
                        <br></br>
                        You can find CoComelon’s YouTube channel here: <a href="https://www.youtube.com/channel/UCbCmjCuTUZos6Inko4u57UQ">https://www.youtube.com/channel/UCbCmjCuTUZos6Inko4u57UQ</a>
                        <br></br>
                        <br></br>
                        Here is a playlist of some of the CoComelon Songs I've written for their channel: <a href="https://www.youtube.com/playlist?list=PLBmHf_yrPS1KjpdYHtKC5Xvbit4qtXILF">https://www.youtube.com/playlist?list=PLBmHf_yrPS1KjpdYHtKC5Xvbit4qtXILF</a>
                    </div>}
            ></PopupContent>
        );
    }

    static CocomelonNetflix = function() {
        return (
            <PopupContent
                title="CoComelon Netflix Compilations"
                text={<div>
                    I have been working on a great new kids show for Netflix called "CoComelon Lane". It's a sequel to the original CoComelon series on Netflix which can be found here: <a href="https://www.netflix.com/title/81273085">https://www.netflix.com/title/81273085</a> . The new series is due to be released around 2022-2023
                    </div>}
            ></PopupContent>
        )
    }

    static Adapt = function() {
        return (
            <PopupContent
                title="Adapt"
                text={<div>
                    Adapt is a really fun and exciting new video game that is currently under development by Paul Herve. Paul invited me on his team as the game’s composer back in May 2020. Since then we have been working hard to create a unique and interactive soundtrack. We’ve been working with FMOD to create adaptive music that changes along with your environment and game state. 
                    <br></br>
                    <br></br>
                    The game is set to release in 2023 and is being published on Steam by Slug Disco.
                    <br></br>
                    <br></br>
                    You can watch the trailer here.
                </div>}
                vids={["https://www.youtube.com/embed/H-qXKSp_zJY"]}
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
                    The full film will be released late 2021, but the full soundtrack album can be found here: <a href="https://youtu.be/ycahy6llWe8" target="_blank" rel="noreferrer noopener">https://youtu.be/ycahy6llWe8</a>
                    <br></br>
                    <br></br>
                    It is also available on most major streaming services, such as spotify:
                    <iframe 
                    title="Circling the Drain Spotify"
                    style={{
                        width: "100%",
                        padding: "0 20%",
                        marginTop: "1vh",
                    }}
                            src="https://open.spotify.com/embed/album/6nqDswuTP9mk8ahxDi4beU" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
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
                    My entry to the Score Relief 2021 competition can be found here: <a href="https://youtu.be/oTfYuihK0ZM" target="_blank" rel="noreferrer noopener">https://youtu.be/oTfYuihK0ZM</a>
                    <br></br>
                    <br></br>
                    Also, a full breakdown walkthrough of my project logic session can be found on my YouTube channel here: <a href="https://youtu.be/sLBYwxKgjK0" target="_blank" rel="noreferrer noopener">https://youtu.be/sLBYwxKgjK0</a>
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
                    A sample of my work on the film can be found here: <a href="https://www.youtube.com/watch?v=r8SNA3-S1Tw" target="_blank" rel="noreferrer noopener">https://www.youtube.com/watch?v=r8SNA3-S1Tw</a>
                    <br></br>
                    <br></br>
                    And the full album is on my bandcamp here: <a href="https://louietaylor.bandcamp.com/releases" target="_blank" rel="noreferrer noopener">https://louietaylor.bandcamp.com/releases</a>
                </div>}
                vids={["https://www.youtube.com/embed/r8SNA3-S1Tw "]}
            ></PopupContent>
        );
    }

    static AlchemyEarth = function() {
        return (
            <PopupContent
                title="Alchemy of the Earth"
                text={<div>
                    Alchemy of the earth is an upcoming, open world, RPG, fantasy video game about alchemy and magic. The player is placed into a beautifully diverse island which they construct using the power of alchemy and magic. The music is dreamy, ambient and epic.
                    <br></br>
                    <br></br>
                    Here is a taster of some of the music:
                    <div style={{
                        marginTop: "1vh",
                    }}>
                        <iframe title="Alchemy of the Earth Soundcloud" style={{width: "100%"}} scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1305703372&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                    </div>
                </div>}
            ></PopupContent>
        );
    }

    static CocomelonStorytime = function() {
        return (
            <PopupContent
                title="Cocomelon Storytime"
                text={<div>
                    Between June 2021 and January 2022 I worked as a composer for Moonbug Entertainment and Spotify’s new production called ‘Cocomelon Storytime’, an amazing new podcast for children with each episode consisting of a beautifully well told story from varying different places around the world. I was on a team with 3 other composers and between us we scored over 40 episodes of this season.
                    <br></br>
                    <br></br>
                    The great thing about this was that each composer had something unique to offer and since each episode was from somewhere different around the world we could all play to our strengths, for example Mikey Johnson being an expert in african music, and myself leaning toward more traditional western music as well as eastern european and asian music too! Check out the trailer below.
                    <br></br>
                    <br></br>
                    You can find the Cocomelon Storytime Spotify page here: https://open.spotify.com/show/6GP2OFWwUqSvVq2J0rO7wp
                </div>}
                vids={["https://www.youtube.com/embed/v3We83Y8kn0"]}
            ></PopupContent>
        );
    }

    static Stages = function() {
        return (
            <PopupContent
                title="Stages"
                text={<div>
                    Stages is my new album with the Dad Village Symphony Orchestra. Together we produced this exciting new compilation of my latest concert compositions, mainly thanks to the incredible talents of my good friend Jordan M Holloway, the director of the orchestra and a brilliant composer in his own right. The album includes 3 pieces, my first symphony, a string impromptu called ‘Flora and Ferro’ as well as my single movement wind quintet ‘Ashton Odyssey’.
                    <br></br>
                    <br></br>
                    You can find the full performance on YouTube below.
                    <br></br>
                    <br></br>
                    And the digital album can be found on all major streaming platforms.
                    <br></br>
                    <br></br>
                    Special thanks to Andrea Koen for producing the beautiful artwork to accompany the music.
                </div>}
                vids={["https://www.youtube.com/embed/O2wlGmFdmYs"]}
            ></PopupContent>
        );
    }

    static CocomelonAlbum = function() {
        return (
            <PopupContent
                title="CoComelon Albums"
                text={<div>
                    CoComelon albums are being released regularly on all major streaming platforms. I was brought on as composer and producer in June 2022 to help with the production of some fantastic new albums coming soon!
                    <div style={{
                        marginTop: "1vh",
                    }}>
                        <iframe 
                    title="Circling the Drain Spotify"
                    style={{
                        width: "100%",
                        padding: "0 20%",
                        marginTop: "1vh",
                    }}
                    src="https://open.spotify.com/embed/artist/6SXTTUJxIVwMbc1POrviTr" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
                </div>}
            ></PopupContent>
        );
    }

    static CodingQMO = function() {
        return (
            <PopupContent
                title="Coding with QMO"
                text={<div>
                    This fantastic kid’s show for YouTube directed by BBC director Geoff Coward is all about learning to code. It helps children learn new techniques and terms for coding in a simple yet informative manner, with a great comedic twist too! The music for this was incredibly varied and comprised all sorts of genres: epic, orchestral, electronic and jazz to name a few, which made it so much fun to work on!
                    <br></br>
                    <br></br>
                    You can check out the the Coding with QMO YouTube channel here: 
                    <br></br>
                    <a href="https://www.youtube.com/playlist?list=PLETGO5vu82Zgq_p3Dzo-BHecChnocObq5" target="_blank" rel="noreferrer noopener">https://www.youtube.com/playlist?list=PLETGO5vu82Zgq_p3Dzo-BHecChnocObq5</a>
                </div>}
            ></PopupContent>
        );
    }
}

