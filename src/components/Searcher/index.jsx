import React from 'react';
import { Stack, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const Searcher = (props) => {

    const {
        setInputUser
    } = props;

    const [valueInput, setValueInput] = useState('');

    const onSearchValueChange = (event) => {
        const inputValue = event.target.value
        setValueInput(inputValue)
    };
    
    const handleSubmit = () => {
      setInputUser(valueInput);
     
    };
    return (
    <Stack
    direction='row'
     sx={{
        marginTop: '30px',
        width: '80%'
    }}>
        <TextField
        id='outlined-basic'
        label='Github User'
        placeholder='Search user'
        variant='outlined'
        size='small'
        value={valueInput}
        onChange={onSearchValueChange}
        sx={{
            width: '90%'
        }}>

        </TextField>
        <IconButton
        onClick={handleSubmit}
        sx={{
            left: '-45px',

        }}
        >
            <SearchIcon/>
        </IconButton>
    </Stack>
    )
}

export default Searcher;