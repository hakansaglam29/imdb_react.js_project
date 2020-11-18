import { useContext } from 'react';
import { CollectionContext } from "../../Collection";
import { StyledDiv, StyledInput } from "./SearchBar.style"

export const SearchBar = (props) => {

    const { setInputData, setPage } = useContext(CollectionContext);

    return (
        <StyledDiv>
            <StyledInput
                placeholder='Search your Collection...'
                onChange={(e) => {
                    setInputData(e?.target?.value)
                    setPage(1)
                }} />
        </StyledDiv>
    )
}