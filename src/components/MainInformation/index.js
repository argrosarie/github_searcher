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
            justifyContent: 'space-between',
            color: "#d5e0b5",
        }}>
        <Typography
        variant='h4'
        >
            {name}
        </Typography>
        <Typography
        variant='body1'
        >
            First login: {firstLogin}
        </Typography>
    </Stack>
        <Typography sx={{ color: "#d5e0b5"}}
        variant='caption'>
            {`@${login}`}
        </Typography>
    </>
  )
}

export default MainInformation