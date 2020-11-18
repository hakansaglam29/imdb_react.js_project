import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { Styledp, Show, RelativdivTitle, Relativdiv, StyledCardWrapper, StyledText, StyledImage, Styledowerview } from "./Card.style"

export const Card = (props) => {
    const [showData, setShowData] = useState('none');
    const history = useHistory();


    function Overview() {
        if (showData === 'none') {
            setShowData('block')
        } else setShowData('none');
    }

    return (
        <div>
            <StyledCardWrapper>
                <div>
                    <Show onMouseOver={Overview} onMouseOut={Overview} onClick={() => history.push(`/detail/${props.id}`)}>
                        <Relativdiv>
                            <Styledowerview style={{ display: showData }}>
                                <Styledp>{props.overview}</Styledp>
                            <Styledp>Release Date: {props.release_date}</Styledp>
                                <Styledp style={{ color: 'yellow', fontSize: 15 }}>Avarage Vote: {props.vote_average}</Styledp>
                            </Styledowerview>
                            <StyledImage src={props.poster_path} alt='movie poster'/>
                        </Relativdiv>
                    </Show>
                    <RelativdivTitle>
                        <StyledText>{props.original_name}</StyledText>
                    </RelativdivTitle>
                </div>
            </StyledCardWrapper>
        </div>
    )
}

// adult: false
// backdrop_path: "/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg"
// genre_ids: (3) [12, 28, 878]
// id: 11
// original_language: "en"
// original_title: "Star Wars"
// overview: "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire."
// popularity: 70.339
// poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"
// release_date: "1977-05-25"
// title: "Star Wars"
// video: false
// vote_average: 8.2
// vote_count: 14549