import React from 'react';
import './news.css';

function News() {
    return (
        <div className='news'>
            <div className='news__body'>
                <p>Politics . <span className="news__time">LIVE</span></p>
                <h4 className='news__discription'>
                    Three leaders file nominations for the Congress presidential election
                </h4>
            </div>
            <div className='news__img'>
                <img src='https://pbs.twimg.com/media/Fd89476UcAESyNN?format=jpg&name=small' height="75px" width="75px" />
            </div>
        </div>
    )
}

export default News