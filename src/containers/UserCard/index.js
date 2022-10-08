import { Grid,CardMedia } from '@mui/material';
import React from 'react'
import MainInformation from '../../components/MainInformation/index';
import MainDescription from '../../containers/MainDescription/index';

const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;
  return (
    <Grid container spacing={2}>
        <Grid item xs={3}>
          <CardMedia
          component='img'
          alt='GitHub User'
          image={avatar_url}
           />
        </Grid>
        <Grid item xs={9}>
          <MainInformation userState={userState} />
          <MainDescription userState={userState}/>
        </Grid>

    </Grid>
  )
}

export default UserCard;