import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import './feed.css';
import db from './firebase';
import Post from './Post';
import TweetBox from './TweetBox';

function Feed() {
    const [posts, setposts] = useState([]);
    useEffect(() => {
        const q = query(collection(db, 'posts'));
        onSnapshot(q, (querySnapshot) => {
            setposts(querySnapshot.docs.map((post) => post.data()))
        })
    }, [])
    return (
        <div className='feed'>
            {/*Header*/}
            <div className='feed__header'>
                <h2>Home</h2>
            </div>
            {/*Tweet Box*/}
            <TweetBox />

            {posts.map((post) => (

                <Post image={post.image}
                    avatar={post.avatar}
                    displayName={post.displayName}
                    verified={post.verified}
                    userName={post.userName}
                    text={post.text}
                />
            ))
            }
        </div>
    )
}

export default Feed