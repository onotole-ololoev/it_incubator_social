import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {addPost, RootStateType, subscribe, updateNewPostText} from "./redux/state";


// type RerenderEntireTreeType = {
//     state: RootStateType
//
// }

let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

subscribe(rerenderEntireTree);
rerenderEntireTree(state);



reportWebVitals();
