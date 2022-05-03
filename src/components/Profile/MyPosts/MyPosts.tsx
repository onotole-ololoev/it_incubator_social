import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostsType[]
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} like={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        // let text = newPostElement.current?.value;
        props.addPost();


    }
    const updateNewPostText = () => {
        let text = newPostElement.current?.value;
        props.updateNewPostText(text ? text : '')
    }

    return (
        <div className={style.postsBlock}>
            <h2>my posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement} value={"it-kama"} onChange={updateNewPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
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