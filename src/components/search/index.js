import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Search = ({ searchText, setSearchText, searchUserRepositories }) => (
    <Box>
        <TextField 
            label="Search GitHub User"
            type="text"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
        />
        <Box component="div" display="inline-block" mt="10px" ml="5px">
            <Button variant="contained" onClick={searchUserRepositories}>Go!</Button>
        </Box>
    </Box>
);

export default Search;

