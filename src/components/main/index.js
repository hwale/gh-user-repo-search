import React, { useState } from 'react';
import Search from '../search';
import SearchItems from '../search-items';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Pagination from '@material-ui/lab/Pagination';

import githubService from '../../services/githubService';

const Main = () => {
    const [searchText, setSearchText] = useState("");
    const [searchItems, setSearchItems] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [pages, setPages] = useState(0);

    const searchUserRepositories = (event, page = 1) => {
        if (!searchText) return;

        githubService.searchUserRepositories(searchText, page, itemsPerPage)
            .then(response => {
                const { items, total_count } = response;
                const pages = Math.floor(total_count / itemsPerPage);
                console.log(response);
                setSearchItems(items);
                setPages(pages);
            })
    };

    const handleKeyPress = event => {
        if (event.key === "Enter") searchUserRepositories();
    }

    const handlePageChange = (event, value) => {
        searchUserRepositories(event, value);
    };

    return (
        <Container maxWidth="sm">
            <Box mt="100px">
                <Box display="flex" justifyContent="center">
                    <div>hello world!</div>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Search
                        searchText={searchText}
                        setSearchText={setSearchText}
                        searchUserRepositories={searchUserRepositories} 
                        handleKeyPress={handleKeyPress} />
                </Box>
                <Box>
                    <SearchItems 
                        searchItems={searchItems} />
                </Box>
                <Box display="flex" justifyContent="center">
                    {
                        pages
                            ? <Pagination
                                color="primary"
                                count={pages}
                                onChange={handlePageChange} />
                            : null
                    }
                </Box>
            </Box>
        </Container>
    );
};


export default Main;