import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const TitleAndStars = ({ fullName, stars }) => (
    <Box display="flex" justifyContent="space-between">
        <Box>{ fullName }</Box>
        <Box display="inline-block">
            <Box component="span" mr="5px">{ stars }</Box>
            <svg aria-label="star" className="octicon octicon-star" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
        </Box>
    </Box>
);

const Description = ({ description }) => <Typography component="span">{ description }</Typography>;

const mapSearchItems = item => {
    const { id, full_name, html_url, description, stargazers_count } = item;
    return (
        <React.Fragment key={id} >
            <ListItem button component="a" href={html_url}>
                <ListItemText 
                    primary={ <TitleAndStars fullName={full_name} stars={stargazers_count}/>}
                    secondary={ <Description description={description} /> } />
            </ListItem>
            <Divider />
        </React.Fragment>
    );
};

const SearchItems = ({ searchItems }) => <List>{ searchItems.map(mapSearchItems) }</List>;

SearchItems.propTypes = {
    searchItems: PropTypes.array.isRequired
};

export default SearchItems;