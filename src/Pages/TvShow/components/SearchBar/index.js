import { useContext } from 'react';
import { TvShowContext } from "../../TvShow";
import { StyledDiv, StyledInput } from "./SearchBar.style"

export const SearchBar = (props) => {

    const { setInputData, setPage } = useContext(TvShowContext);

    return (
        <StyledDiv>
            <StyledInput
                placeholder='Search your TvShow...'
                onChange={(e) => {
                    setInputData(e?.target?.value)
                    setPage(1)
                }} />
        </StyledDiv>
    )
}