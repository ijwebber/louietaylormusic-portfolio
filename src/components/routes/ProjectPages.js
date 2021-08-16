function PopupContent(props) {
    return (
        <>
            <b>{props.title}</b>
            <div>
                {props.text}
            </div>
        </>
    );
}

export default class ProjectPages {
    static SymphonyNo1 = function() {
        return (
            <PopupContent
                title="Symphony No. 1"
                text="My first symphony was composed between 2020 and 2021, being completed in May. It was a huge achievement for me as my first major work and I’m very proud of how this turned out and that it received a first class mark as my final year project for my university degree. 

                This symphony has been both an expression of my artistic identity and an exercise in abstract music. I was strongly inclined to write a some-what programmatic piece of music. Something that would depict a series of events in my life that meant a great deal to me and had a huge impact. However, after consideration and guidance, I realised that to truly express myself and transcend past a literal depiction of my experiences, abstraction should be my focus. It has been a great challenge to prioritise the music over my own ego, but in doing so I feel I have become more mindful as a person and more focused on the art itself rather than expressing my own feelings as they are. Which, as a result, has concluded in the same way I originally intended with a programmatic depiction: to write honest music which accurately expresses my emotions and experiences. 
                
                You can find a demo of my Symphony on my soundcloud here: https://soundcloud.com/louiejtaylor/sets/symphony-no-1-demo 
                
                And if you wish to see the full score please contact me for more information. Also, if you’re interested in performing my work, then please contact me too and we can arrange for the parts and score to be shared.
                "
            ></PopupContent>
        );
    }

    static InnerSpirits = function() {
        return (
            <PopupContent
                title="Inner Spirits for String Quartet"
                text="This composition was written about the nature of the mind and my own experiences discovering my own mind and its nature, temperament and weaknesses. Furthermore, the piece draws on topics from nature itself and tries to express the relationship of nature and its laws with the mind. 

                It was recorded fully by the wonderful string performer Liz Lister. The recording and score video can be found here: https://youtu.be/MhKT3YNcqcA 
                "
            ></PopupContent>
        );
    }
}

