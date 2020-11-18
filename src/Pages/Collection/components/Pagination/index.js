import { useContext } from 'react';
import { CollectionContext } from "../../Collection";
import { Pagination } from "@material-ui/lab";

import { StyledPagination } from "./Pagination.style"

export const PaginationBar = () => {

    const { countPage, page, handleChange } = useContext(CollectionContext);

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