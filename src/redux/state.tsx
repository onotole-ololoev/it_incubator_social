let rerenderEntireTree = () => {
    console.log('state changed')
}

export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type PostsType = {
    id: number
    message?: string
    likesCount: number
}

type ProfilePageType = {
    newPostText: string
    posts: Array<PostsType>

}
type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}
type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}



let state: RootStateType = {
    profilePage: {
        newPostText: "it-kamasutra",
        posts: [
            {id: 1, message: 'atching TV now?', likesCount: 12},
            {id: 2, message: 'Hi, are you wa?', likesCount: 10},
            {id: 3, message: 'Hi, are ', likesCount: 12},
            {id: 4, message: 'e you watching TVw?', likesCount: 14},
            {id: 5, message: 'Hi, are you  now?', likesCount: 15},
        ],
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi!!!!'},
            {id: 2, message: 'Hi!!!!'},
            {id: 3, message: 'Hi!!!!s'},
            {id: 4, message: 'Hi!!!!'},
            {id: 5, message: 'Hi!!!!s'},
        ],
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Don'},
            {id: 3, name: 'Denis'},
            {id: 4, name: 'Di'},
            {id: 5, name: 'Dimas'},
        ]
    },
    sidebar: {}
}

export const addPost = () => {
    let newPost: PostsType = {
        id: 6,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree()
}
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree()
}
export const subscribe = (observer: any) => {
    rerenderEntireTree = observer;
}

export default state;

