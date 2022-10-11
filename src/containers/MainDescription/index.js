import { Typography, Stack } from '@mui/material';
import React from 'react';
import PaperInformation from '../../components/PaperInformation/index.jsx';
import LocalInformation from '../../components/LocalInformation/index.jsx';

const MainDescription = (props) => {
  const { userState } = props;
  const { bio } = userState;
  return (
    <>
    <Stack
    sx={{
      justifyContent: 'center',
      color: "#d5e0b5"
    }}>
        {
          bio !== null
          ? <Typography variant='body1'>{bio}</Typography>
          : <Typography variant='body1'>No tiene bio</Typography>
        }
    </Stack>
    <PaperInformation userState={userState}/>
    <LocalInformation userState={userState}/>
    </>
  )
}

export default MainDescription;