import React from 'react';
import './widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';
import News from './News';
import Trending from './Trending';
import People from './People';

function Widgets() {
    return (
        <div className='widgets'>
            <div className='widgets__input'>
                <SearchIcon className='widgets__searchIcon' />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className='widgets__widgetContainer'>
                <h2>What's happening</h2>
                <News />
                <Trending topic="Airtel" details="Airtel5gLaunch"
                    footer="5gLaunch" />

                <Trending topic="Digital India" details="UPI"
                    footer="DigitalIndia"
                />
                <Trending topic="Sports" details="Sarfaraz Khan"
                    footer="IraniCUP"
                />


                <News />
            </div>
            <div className='widget__bottom'>
                <h2>Who to follow</h2>
                <People name="Anant Kumar" userId="jhaanant9" />
                <People name="Nishant Pandey" userId="pandeyji" />
                <People name="Gai Shukla" userId="gaiya" />
            </div>
        </div>
    )
}

export default Widgets
