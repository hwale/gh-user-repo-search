import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Search = ({ searchText, setSearchText, searchUserRepositories, handleKeyPress }) => (
    <Box>
        <TextField 
            label="Search GitHub User"
            type="text"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            onKeyPress={handleKeyPress} />
        <Box component="div" display="inline-block" mt="10px" ml="5px">
            <Button variant="contained" onClick={searchUserRepositories}>Go!</Button>
        </Box>
    </Box>
);

Search.propTypes = {
    searchText: PropTypes.string.isRequired,
    setSearchText: PropTypes.func.isRequired,
    searchUserRepositories: PropTypes.func.isRequired,
    handleKeyPress: PropTypes.func.isRequired
};

export default Search;

