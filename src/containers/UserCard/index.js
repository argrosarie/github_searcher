import { Grid,CardMedia, Stack, Box } from '@mui/material';
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
      //xs: 'column',
      // md: 'row-reverse',
      // lg: 'column-reverse'
    }
  
  }
 
  return (
    <Stack 
    variant="div"
      // container 
     // spacing={2}
      // columns={{ xs: 12 }}
       sx={responsiveCustom}
      // sx={{marginTop:'15px'}}
      >
        <Stack
        //  item 
       // xs={3}
        >
          <CardMedia
          component='img'
          alt='GitHub User'
          image={avatar_url}
          sx={
            {
              borderRadius: '50%',
              marginLeft: '5px',
            }
          }
           />
        </Stack>
        <Stack
        //  item xs={9}
         >
          <Stack
          direction="column"
          spacing={1}
          sx={{
            margin: '30px'
          }}>
            <MainInformation userState={userState} />
            <MainDescription userState={userState}/>
          </Stack>
        </Stack>

    </Stack>
  )
}

export default UserCard;