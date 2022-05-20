import React, { useState } from 'react'
import './resources.css'
import axios from 'axios';
import { connect } from "react-redux";
import { addProjectPic } from '../../routes/routes';
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom"
const imgsvg = 'https://raw.githubusercontent.com/ShivamJoker/InShare/bc12a973876ef9ccbf8092d510f9c6a11eabcac6/file.svg'
const Resource = ({ user }) => {
    console.log(user)
    const [file, setFile] = useState()
    const [projectName, setProjectName] = useState()
    const [description, setDescription] = useState()
    const [tempTag, setTempTag] = useState()
    const [tags, setTags] = useState([])
    const history = useHistory()



    const onChangeFile = async (event) => {
        setFile(event.target.files[0])
    }
    const subitHandle = async() => {
        const formData = new FormData();
        const jsonfile = {
            uid: user.uid,
            tags:tags,
            description: description,
            projectName: projectName,
            owner:user.displayName,
        }   
        formData.append('image', file);
        formData.append('jsonfile', JSON.stringify(jsonfile));
        console.log("clicked")
        const data = await addProjectPic(formData)
        if(data) {
            await Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'project uploaded successfully',
                showConfirmButton: false,
                timer: 3000
            })
            history.push('/listproject')
        }
    }
    // console.log(tags)
    return (
        <div>
            {/* <section class="upload-container">
        <form action="">
            <div class="drop-zone">
                <div class="icon-container">
                    <img src={imgsvg} draggable="false" class="center" alt="File Icon"/>
                    <img src={imgsvg} draggable="false" class="left" alt="File Icon"/>
                    <img src={imgsvg} draggable="false" class="right" alt="File Icon"/>
                </div>
                <input type="file" id="fileInput"/> 
                <div class="title">Drop your Files here or, <span id="browseBtn">browse</span></div>
            </div>
        </form>
        <div class="progress-container">
            <div class="bg-progress"></div>

            <div class="inner-container">
                <div class="status">Uploading...</div>
                <div class="percent-container">
                    <span class="percentage" id="progressPercent">0</span>%
                </div>
                <div class="progress-bar"></div>
            </div>

        </div>
        <div class="sharing-container">
            <p class="expire">Link expires in 24 hrs</p>


            <div class="input-container">
                <input type="text" id="fileURL" readonly/>
                <img src="./copy-icon.svg" id="copyURLBtn" alt="copy to clipboard icon"/>
            </div>


            <p class="email-info">Or Send via Email</p>
            <div class="email-container">
                <form id="emailForm">
                    <div class="filed">
                        <label for="fromEmail">Your email</label>
                        <input type="email" autocomplete="email" required name="from-email" id="fromEmail"/>
                    </div>

                    <div class="filed">
                        <label for="toEmail">Receiver's email</label>
                        <input type="email" required autocomplete="receiver" name="to-email" id="toEmail"/>
                    </div>
                    <div class="send-btn-container">
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    <div class="image-vector"></div>
    </section>
    <div class="toast">Sample message</div> */}

            {/* <img src="./logo.png" alt="Inshare logo" class="logo"> */}

            <section class="upload-container ">
                <div class="image-vector"></div>
                <div class="flex justify-center mt-8 w-full">
                    <div class="max-w-2xl rounded-lg shadow-xl w-full bg-gray-50">
                        <div class="m-4">
                            <label class="inline-block mb-2 text-gray-500">File Upload</label>
                            <div class="flex items-center justify-center w-full">
                                <label
                                    class="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                    <div class="flex flex-col items-center justify-center pt-7">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>
                                        <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                            Attach a file</p>
                                    </div>
                                    <input type="file" class="opacity-0" onChange={(e) => onChangeFile(e)} />
                                </label>
                            </div>
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                    <label class="block text-center text-gray-500 font-bold  mb-1 md:mb-0 pr-4" for="inline-full-name">
                                        Title
                                    </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" onChange={(e) => setProjectName(e.target.value)} />
                                </div>
                            </div>
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                    <label class="block text-center text-gray-500 font-bold  mb-1 md:mb-0 pr-4" for="inline-full-name">
                                        Description
                                    </label>
                                </div>
                                <div class="md:w-2/3">
                                    <textarea class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" onChange={(e) => setDescription(e.target.value)} />
                                </div>
                            </div>
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                    <button class="block text-center bg-gray-500 text-gray-500 font-bold  mb-1 md:mb-0 pr-4" for="inline-full-name" onClick={(e) => setTags(oldArray => [...oldArray, tempTag])} >
                                        Add Tag
                                    </button>
                                </div>
                                <div class="md:w-2/3">
                                    <textarea class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" onChange={(e) => setTempTag(e.target.value)} />
                                </div>
                            </div>
                            <div class="flex justify-center">
                                <ul class="bg-white rounded-lg w-96 text-gray-900">
                                <h1 className="text-xl font-bold mb-8 underline text-red-600">All Tags Are Listed below</h1>
                                
                                {
                                    tags?.map((tag, index) => {
                                        return (
                                            <li key={index}  class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">{tag}</li>
                                        )
                                    })
                                }
                                    
                                </ul>
                            </div>
                        </div>
                        <div class="flex justify-center p-2">
                            <button class="w-full px-4 py-2 text-white bg-blue-500 rounded shadow-xl" onClick={subitHandle} >Create</button>
                        </div>
                    </div>
                </div>

            </section>

            {/* <script src="index.js"></script> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

export default connect(mapStateToProps)(Resource)