import React from 'react';
import { Stack, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { alpha, styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#d5e0b5',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#6d8b89',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: ' #a5c3a7 ',
      },
      '&:hover fieldset': {
        borderColor: '#d5e0b5',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#d5e0b5',
      },
    },
  });


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
        <CssTextField  id="custom-css-outlined-input"
       
        placeholder='Search user'
        variant='outlined'
        size='small'
        value={valueInput}
        onChange={onSearchValueChange}
        inputProps={{sx:{color:"#6d8b89",
    }}}
        sx={{
            width: '90%',
            backgroundColor: "#d5e0b5",
            color: "#47667b",
        }}/>


        <IconButton
        onClick={handleSubmit}
        sx={{
            left: '-45px',
            color: "#47667b"
        }}
        >
            <SearchIcon/>
        </IconButton>
    </Stack>
    )
}

export default Searcher;