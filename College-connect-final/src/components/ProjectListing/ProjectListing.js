import React,{useEffect,useState} from 'react'
import './projectListing.css'
import ProjectCard from './ProjectCard'
import Stats from './Stats'
import { getProject } from '../../routes/routes'

const ProjectListing = ({user}) => {
    const [project,setProject] = useState()
    useEffect(() => {
        const functi=async()=>{
            const {data}=await getProject();
            setProject(data)
            // console.log(project)
        }
        functi()
    }, []);
    return (
        <div className="m-16">
            <h1 className="text-4xl font-bold mb-16 underline text-red-600">Overall Stats...</h1>
            <Stats />
            <h1 className="text-4xl font-bold mb-16 underline text-red-600">All Project...</h1>
            <div class="grid grid-cols-4 gap-12">
                {
                    project && project.map((project,index)=>{
                        return <ProjectCard project={project} key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default ProjectListing