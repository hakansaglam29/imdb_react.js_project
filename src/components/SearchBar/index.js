import { StyledDiv, StyledInput } from "./SearchBar.style"

export const SearchBar = (props) => {
    return (
        <StyledDiv>
            <StyledInput placeholder='Search your movie...' onChange={(value) => props.onChange(value)} />
        </StyledDiv>
    )
}