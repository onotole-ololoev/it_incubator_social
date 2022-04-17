import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import state from "../../../redux/state";

const MyPosts = () => {

    let postsElements = state.profilePage.posts.map(p => <Post message={p.message} like={p.likesCount}/>)
    return (
        <div className={style.postsBlock}>
            <h2>my posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
                <div>
                    <button>remove post</button>
                </div>
            </div>
            {postsElements}
        </div>
    );
};

export default MyPosts;