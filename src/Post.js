import React from 'react';
import './post.css';
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import PublishRoundedIcon from '@mui/icons-material/PublishRounded';


function Post({
    displayName,
    userName,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className='post'>
            <div className='post__avatar'>
                <Avatar src={avatar} />
            </div>
            <div className='post__body'>
                <div className='post__headerText'>
                    <h3>
                        {displayName} <span className='post__headerSpecial'>

                            {
                                verified ?
                                    <VerifiedIcon className='post__badge' /> : undefined
                            }
                            @{userName}
                        </span>
                    </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>
                        {text}
                    </p>
                </div>
                <img src={image}
                    alt="img" />
                <div className='post__footer'>
                    <ChatBubbleOutlineRoundedIcon fontSize="small" />
                    <RepeatRoundedIcon fontSize="small" />
                    <FavoriteBorderRoundedIcon fontSize="small" />
                    <PublishRoundedIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post