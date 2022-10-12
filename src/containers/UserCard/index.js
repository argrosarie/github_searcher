import { Grid,CardMedia, Stack } from '@mui/material';
import React from 'react'
import MainInformation from '../../components/MainInformation/index';
import MainDescription from '../../containers/MainDescription/index';

const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;

  const responsiveCustom = {
    display: 'flex',
    marginTop:'15px',
    flexDirection: {
      sx: 'column',
      md: 'row-reverse',
      lg: 'column-reverse'
    }
  }
  return (
    <Grid 
      container 
      // spacing={2}
      sx={responsiveCustom}
      // sx={{marginTop:'15px'}}
      >
        <Grid item xs={3}>
          <CardMedia
          component='img'
          alt='GitHub User'
          image={avatar_url}
          sx={
            {
              borderRadius: '50%',
              marginLeft: '5px'
            }
          }
           />
        </Grid>
        <Grid item xs={9}>
          <Stack
          direction="column"
          spacing={1}
          sx={{
            margin: '30'
          }}>
            <MainInformation userState={userState} />
            <MainDescription userState={userState}/>
          </Stack>
        </Grid>

    </Grid>
  )
}

export default UserCard;