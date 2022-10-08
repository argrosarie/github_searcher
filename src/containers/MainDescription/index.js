import { Typography, Stack } from '@mui/material';
import React from 'react';
import PaperInformation from '../../components/PaperInformation/index.jsx';
import LocalInformation from '../../components/LocalInformation/index.jsx';

const MainDescription = (props) => {
  const { userState } = props;
  const { bio } = userState;
  return (
    <>
    <Stack>
        {
          bio !== null
          ? <Typography>{bio}</Typography>
          : <Typography>No tiene bio</Typography>
        }
    </Stack>
    <PaperInformation userState={userState}/>
    <LocalInformation userState={userState}/>
    </>
  )
}

export default MainDescription;