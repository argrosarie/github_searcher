import { Typography, Stack } from '@mui/material';
import React from 'react';

const MainInformation = (props) => {
    const { userState } = props;
    const { 
        name,
        login, 
        created_at
        } = userState;
    const isoDate = created_at;
    const theFirstLogin = new Date(isoDate);
    const firstLogin = theFirstLogin.toLocaleDateString('es-AR');
  return (
    <>
    <Stack direction="row"
        sx={{
            justifyContent: 'space-between'
        }}>
        <Typography
        variant='h4'>
            {name}
        </Typography>
        <Typography
        variant='subtitle2'>
            First login: {firstLogin}
        </Typography>
    </Stack>
        <Typography
        variant='caption'>
            {`@${login}`}
        </Typography>
    </>
  )
}

export default MainInformation