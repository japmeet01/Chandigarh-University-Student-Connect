import React, { useEffect, useState } from 'react'
import './profile.css'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { getProject } from '../../routes/routes'




const ProfilePage = ({ user }) => {
    const [project, setProject] = useState()

    console.log("profile console", user)
    useEffect(() => {
        const funti = async () => {
            const { data } = await getProject()
            setProject(data)
            console.log(data)
        }
        funti()
        // console.log(project)
    }, []);
    return (
        <>

            { project && user ?
                (<div className="container bg-white items-center justify-center py-20 px-20 ">
                    <div className='container-fluid  flex mb-12 '>
                        <img src={user.photoURL} alt="" srcset="" className="  h-52 w-52 rounded-full border-4 border-red-500" />

                        <div className="flex flex-col  ml-32">
                            <h1 className="text-6xl">{user.displayName}</h1>
                            <span className="text-xs w-1/2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam fuga ipsam dolor quas ut provident, quae necessitatibus, voluptas nisi molestiae quis ea omnis officia ullam odio vel veniam eveniet ducimus?</span>
                            <div className="flex">
                                <div className="flex flex-col mr-12 ">
                                    <h3 className="leading-1 py-0 mx-auto ">21</h3>
                                    <span className="mx-auto">followers...</span>
                                </div>
                                <div className="flex flex-col mr-12  ">
                                    <h3 className="leading-1 py-0 mx-auto">21</h3>
                                    <span className="mx-auto">followings...</span>
                                </div>
                                <div className="flex flex-col  ">
                                    <h3 className="leading-1 py-0 mx-auto ">4.3🌟</h3>
                                    <span className="mx-auto">Rank</span>
                                </div>
                            </div>
                            <div class="flex flex-row px-4 mt-4">
                                <button class="h-10 w-32 text-white text-md rounded bg-red-500 hover:bg-red-600">Follow</button>
                                <button class="h-10 w-32 text-white text-md rounded bg-red-500 hover:bg-red-600 ml-2">Message</button>
                            </div>

                        </div>
                    </div>


                    <div className="flex justify-between">
                        <div className="w-1/4  border-r-2 border-gray-500" >
                            <div className="mx-auto">
                                <h2>Details:</h2>
                                <hr />
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-l mr-8"> Full Name  : </span>
                                <span className="text-l text-right">{user.displayName}</span>
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-l mr-8">Email : </span>
                                <span className="text-l text-right">{user.email}</span>
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-l mr-8">Phone : </span>
                                <span className="text-l text-right">{user.phoneNumber}</span>
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-l mr-8">Total Projects : </span>
                                <span className="text-l text-right">12</span>
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-l mr-8">Total resources : </span>
                                <span className="text-l text-right">10</span>
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-l mr-8">Rank : </span>
                                <span className="text-l text-right">524</span>
                            </div>

                        </div>

                        <div className="w-3/4 p-4 flex flex-col">


                            <div>

                                <h2>Projects</h2>
                                <div class="p-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3  h">


                                    {project && project?.map((item, index) => {
                                        return (
                                            <div class="rounded overflow-hidden shadow-lg">
                                            <img class="w-full" src={`http://localhost:4000/${item.image}`} alt="" />
                                            <div class=" px-2 py-2">
                                                <div class="font-bold text-xl mb-4">{item.projectName}</div>
                                            </div>
                                            <div class="px-2 ">
                                                {
                                                    item.tags.map((curr, index) => {
                                                        {/* { console.log(curr)} */ }
                                                       return  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-4">#{curr}</span>
                                                    })
                                                }
                                            </div>
                                        </div>)
                                    })

                                    }


                                </div>
                            </div>
                            <div>

                                <h2>Projects</h2>
                                <div class="p-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3  h">

                                    <div class="rounded overflow-hidden shadow-lg">
                                        <img class="w-full" src="https://resumegenius.com/wp-content/uploads/programming-projects-for-resumes-png.png" alt="Forest" />
                                        <div class=" px-2 py-2">
                                            <div class="font-bold text-xl mb-2">Forest</div>
                                        </div>
                                        <div class="px-2 ">
                                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
                                        </div>
                                    </div>
                                    <div class="rounded overflow-hidden shadow-lg">
                                        <img class="w-full" src="https://resumegenius.com/wp-content/uploads/programming-projects-for-resumes-png.png" alt="Forest" />
                                        <div class=" px-2 py-2">
                                            <div class="font-bold text-xl mb-2">Forest</div>
                                        </div>
                                        <div class="px-2 ">
                                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
                                        </div>
                                    </div>
                                    <div class="rounded overflow-hidden shadow-lg">
                                        <img class="w-full" src="https://resumegenius.com/wp-content/uploads/programming-projects-for-resumes-png.png" alt="Forest" />
                                        <div class=" px-2 py-2">
                                            <div class="font-bold text-xl mb-2">Forest</div>
                                        </div>
                                        <div class="px-2 ">
                                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>) : "...loading"}

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

export default connect(mapStateToProps)(ProfilePage)




