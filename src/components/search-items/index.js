import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const mapSearchItems = item => {
    const { id, full_name, html_url } = item;
    return (
        <ListItem key={id} button component="a" href={html_url}>
            <ListItemText 
                primary={full_name}
            />
        </ListItem>
    )
}


const SearchItems = ({ searchItems }) => (
    <List>
        { searchItems.map(mapSearchItems) }
    </List>
)

SearchItems.propTypes = {
    searchItems: PropTypes.array.isRequired
}

export default SearchItems;