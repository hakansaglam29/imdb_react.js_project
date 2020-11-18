import React from 'react'
import { Link} from "react-router-dom";
import {StyledDiv, StyledLink }  from './Navbar.style'

export default function Navbar() {
    return (
        <StyledDiv>
            <StyledLink><Link style={{textDecoration:'none', color: 'white'}}to="/">MOVIES</Link></StyledLink>
            <StyledLink><Link style={{textDecoration:'none', color: 'white'}} to="/TvShow"> TV SHOWS </Link></StyledLink>
            <StyledLink><Link style={{textDecoration:'none', color: 'white'}} to="/Collection"> COLLECTIONS </Link></StyledLink>
        </StyledDiv>
    )
}