import React, { useState } from 'react';
import './tweetbox.css'
import { Avatar, Button } from '@mui/material';
import TweetIcons from './TweetIcons';
import CollectionsIcon from '@mui/icons-material/Collections';
import GifIcon from '@mui/icons-material/Gif';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import EventIcon from '@mui/icons-material/Event';
import PlaceIcon from '@mui/icons-material/Place';
import db from './firebase';
import { addDoc, collection } from 'firebase/firestore';


function TweetBox() {
    const [text, settext] = useState("")

    const handleInput = (e) => {
        e.preventDefault();
        const docRef = addDoc(collection(db, "posts"), {
            avatar: "https://pbs.twimg.com/profile_images/1571878082604335106/WR3UEFBA_400x400.jpg",
            displayName: "Anant Kumar",
            userName: "jhaanant",
            verified: true,
            text,
            image: "https://media0.giphy.com/media/26tk0jALFpsXmAF8c/giphy.gif?cid=790b76114939b4dc56289da162a3f0d064ad3e9d16024e5f&rid=giphy.gif&ct=g"
        });
        console.log("Document written with ID: ", docRef.id);
        settext("")

    }

    const handleChange = (e) => {
        settext(e.target.value);
    }

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetbox__input'>
                    <Avatar src="https://pbs.twimg.com/profile_images/1571878082604335106/WR3UEFBA_400x400.jpg" />
                    <div className='tweetbox_right'>
                        <input id="tweetbox" placeholder='What`s happening?' type="text"
                            onChange={handleChange}
                            value={text} />
                        <div className='tweetbox_icon'>
                            <div className='tweetbox__icons'>
                                <TweetIcons Icons={CollectionsIcon} />
                                <TweetIcons Icons={GifIcon} />
                                <TweetIcons Icons={AlignHorizontalLeftIcon} />
                                <TweetIcons Icons={SentimentSatisfiedAltIcon} />
                                <TweetIcons Icons={EventIcon} />
                                <TweetIcons Icons={PlaceIcon} />
                            </div>
                            <Button className='tweetbox__tweetbutton'
                                onClick={handleInput}
                            >Tweet</Button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default TweetBox