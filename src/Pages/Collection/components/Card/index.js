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
                            </Styledowerview>
                            <StyledImage src={props.poster_path} alt='movie poster'/>
                        </Relativdiv>
                    </Show>
                    <RelativdivTitle>
                        <StyledText>{props.name}</StyledText>
                    </RelativdivTitle>
                </div>
            </StyledCardWrapper>
        </div>
    )
}

// "adult": false,
// "backdrop_path": "/k98iowBJdKDRKbllrpdpk4SarJE.jpg",
// "id": 135498,
// "name": "King Kong Collection",
// "original_language": "en",
// "original_name": "King Kong Collection",
// "overview": "An American giant monster film series remake based on the 1933 film of the same name, about a giant ape that is captured and imported to New York City for exhibition.",
// "poster_path": "/uf59XiQnBOEo6l7kV2O3WvPciAs.jpg"