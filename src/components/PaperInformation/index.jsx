import { Paper, Stack, Typography } from '@mui/material';
import React from 'react';

const PaperInformation = (props) => {
    const { userState } = props;
    const { public_repos,
    followers,
following
 } = userState;

 const responsiveCustom = {
 }
  return (
    <>
        <Paper
         elevation={3}
        sx={{backgroundColor: "#a5c3a7"}}
        >
            <Stack
            spacing={3} direction='row'
            sx={{
                justifyContent: 'space-evenly',
                margin:'20px',
                color: "#47667b"
            }}
            >
                <Stack>
                    <Typography variant='h5'>
                        Repos
                    </Typography>
                    <Typography variant='h6'>
                        {public_repos}
                    </Typography>
                </Stack>
                <Stack>
                    <Typography variant='h5'>
                        Followers
                    </Typography>
                    <Typography variant='h6'>
                        {followers}
                    </Typography>
                </Stack>
                <Stack>
                    <Typography variant='h5'>
                        Following
                    </Typography>
                    <Typography variant='h6'>
                        {following}
                    </Typography>
                </Stack>
            </Stack>
        </Paper>
    </>
  )
}

export default PaperInformation;