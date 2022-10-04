import React from 'react';
import './people.css';
import { Avatar, Button } from '@mui/material';

function People({ name, userId }) {
    return (
        <div className='people'>
            <div className='people__avatar'>
                <Avatar src="https://pbs.twimg.com/profile_images/1571878082604335106/WR3UEFBA_400x400.jpg" sx={{ width: 50, height: 50 }} />
            </div>
            <div className='people__details'>
                <h4>
                    {name}
                </h4>
                <span className='people__userName'> @{userId}</span>
            </div>
            <Button className='people__btn' >Follow</Button>
        </div>
    )
}

export default People