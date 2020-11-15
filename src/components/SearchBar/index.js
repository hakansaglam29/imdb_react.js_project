import { useContext } from 'react';
import { MovieContext } from "../../Movie";
import { StyledDiv, StyledInput } from "./SearchBar.style"

export const SearchBar = (props) => {

    const { setInputData, setPage } = useContext(MovieContext);

    return (
        <StyledDiv>
            <StyledInput
                placeholder='Search your movie...'
                onChange={(e) => {
                    setInputData(e?.target?.value)
                    setPage(1)
                }} />
        </StyledDiv>
    )
}