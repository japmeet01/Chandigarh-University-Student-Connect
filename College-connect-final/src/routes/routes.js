import axios from 'axios'


const api=axios.create({
    // baseURL:process.env.REACT_APP_API_URL,
    baseURL:'http://localhost:4000',
    withCredentials: true,
    headers:{
        'Content-Type':'application/json',
        Accept: 'application/json'
    }
})

// http://localhost:4000/add/post

//List of all end Points
export const addPost=(data)=>api.post('/add/post',data)
export const addUser=(data)=>api.post('/add/user',data)
export const addProjectPic=(data)=>api.post('/upload/project/profile',data)
export const addLike =(data)=>api.post('/add/like',data)

export const getPost=()=>api.get('/get/post')
export const getProject=()=>api.get('/get/projects')

