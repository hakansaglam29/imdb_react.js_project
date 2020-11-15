import { useContext } from 'react';
import { MovieContext } from "../../Movie";
import { Pagination } from "@material-ui/lab";

import { StyledPagination } from "./Pagination.style"

export const PaginationBar = () => {

    const { countPage, page, handleChange } = useContext(MovieContext);

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