import React, { useState } from 'react';
import Search from '../search';
import SearchItems from '../search-items';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import CircularProgress from '@material-ui/core/CircularProgress';

import githubService from '../../services/githubService';

const Main = () => {
    const [searchText, setSearchText] = useState("");
    const [searchItems, setSearchItems] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const [pages, setPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const searchUserRepositories = (event, page = 1) => {
        if (!searchText) return;

        setIsError(false);
        setErrorMessage("");
        setLoading(true);

        githubService.searchUserRepositories(searchText, page, itemsPerPage)
            .then(response => {
                const { errors, message } = response;
                if (errors || message) {
                    setIsError(true);
                    setErrorMessage(
                        errors ? errors[0].message : message
                    );
                };

                const { items, total_count } = response;
                const pages = Math.floor(total_count / itemsPerPage);

                setSearchItems(items);
                setPages(pages);
                setLoading(false);
            });
    };

    const displaySearchItems = () => {
        if (loading) {
            return <CircularProgress />;
        } else if (isError) {
            return (
                <Box mt="15px">
                    <Typography>{ errorMessage }</Typography>
                </Box>
            );
        } else {
            return <SearchItems searchItems={searchItems} />;
        }
    };

    const displayPagination = () => {
        if (pages) {
            return (
                <Pagination
                    color="primary"
                    count={pages}
                    onChange={handlePageChange} />
            );
        } else {
            return null;
        }
    };

    const handleKeyPress = event => {
        if (event.key === "Enter") searchUserRepositories();
    };

    const handlePageChange = (event, value) => searchUserRepositories(event, value);

    return (
        <Container maxWidth="sm">
            <Box mt="100px">
                <Box mb="20px" display="flex" justifyContent="center" textAlign="center">
                    <Typography variant="h3">GitHub User Repo Search</Typography>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Search
                        searchText={searchText}
                        setSearchText={setSearchText}
                        searchUserRepositories={searchUserRepositories} 
                        handleKeyPress={handleKeyPress} />
                </Box>
                <Box display="flex" justifyContent="center">
                    { displaySearchItems() }
                </Box>
                <Box display="flex" justifyContent="center">
                    { displayPagination() }
                </Box>
            </Box>
        </Container>
    );
};


export default Main;