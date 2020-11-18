import { useContext } from 'react';
import { TvShowContext } from "../../TvShow";
import { Pagination } from "@material-ui/lab";

import { StyledPagination } from "./Pagination.style"

export const PaginationBar = () => {

    const { countPage, page, handleChange } = useContext(TvShowContext);

    return (
        <StyledPagination>
            <Pagination
                variant="outlined"
                count={countPage}
                page={page}
                onChange={handleChange}
                color='standart'
            />
        </StyledPagination>
    )
}