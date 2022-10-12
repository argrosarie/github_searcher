import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from '@mui/icons-material/Business';

const LocalInformation = (props) => {
    const { userState } = props;
    const {
        location,
        twitter_username,
        blog,
        company
    } = userState;

  
   
  return (
    <Grid container
    spacing={2}
    sx={{
        marginTop: '15px',
        color: "#d5e0b5"
    }}>
        <Grid item xs={6}>
            <Stack direction='row' spacing={2}>
            <LocationOnIcon/>
            {
                location != null
                ? <Typography>{location}</Typography>
                : <Typography>Not avaiable</Typography>
            }
            </Stack>
        </Grid>
        <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
            <TwitterIcon/>
            {twitter_username != null
                ? <Typography>{`@${twitter_username}`}</Typography>
                : <Typography>Not avaiable</Typography>
            }
        </Stack>
        </Grid>
        <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
            <LanguageIcon/>
            {blog != ''
                ? <a target='_blank' href={blog}><Typography>{blog}</Typography></a>
                : <Typography>Not avaiable</Typography>
            }
        </Stack>
        </Grid>
        <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
            <BusinessIcon/>
            {company != null
                ? <Typography>{company}</Typography>
                : <Typography>Not avaiable</Typography>
            }
        </Stack>
        </Grid>
    </Grid>
  )
}

export default LocalInformation;