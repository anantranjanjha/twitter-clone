import React from 'react';
import "./trending.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Trending({ topic,
    details,
    footer
}) {
    return (
        <div className='trending'>
            <div className='trending__header'>
                <p>{topic} . <span className="news__time">Trending</span></p>

                <MoreHorizIcon className='trending__more' />
            </div>
            <h4>
                #{details}
            </h4>
            <p>
                Trending with #{footer}
            </p>
        </div>
    )
}

export default Trending