import React from 'react';
import './tweeticons.css'

function TweetIcons({ Icons, enabled }) {
    return (
        <div className='tweeticons'>
            <Icons onClick={() => {
                enabled && document.getElementById('input_file').click()
            }} />
            <input type='file' id="input_file" hidden />
        </div>
    )
}

export default TweetIcons