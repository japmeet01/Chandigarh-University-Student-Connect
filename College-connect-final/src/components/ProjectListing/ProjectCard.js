import React from 'react'

const ProjectCard = ({project}) => {
    console.log(project)
    return (
        <div className=""> 
        <article class="rounded-xl shadow-lg transform hover:bg-gray-500 transition duration-500 hover:scale-110">

            <a href="#">
                <img alt="Placeholder" class="block h-auto w-full" src={`http://localhost:4000/${project.image}` }/>
            </a>

            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                    <a class="no-underline hover:underline text-black" href="#">
                        {project.projectName}
                    </a>
                </h1>
                <p class="text-grey-darker text-sm">
                    11/1/19
                </p>
            </header>
            {/* <div>
                {project.description}
            </div> */}
            <div className="p-2">
                {
                    project?.tags.map(tag => {
                        return (
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
                        )}
                    )
                }
            </div>

            <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                <a class="flex items-center no-underline hover:underline text-black" href="#">
                    <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" />
                    <p class="ml-2 text-sm">
                        {project.owner}
                    </p>
                </a>
                <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                    <span class="hidden">Like</span>
                    <i class="fa fa-heart"></i>
                </a>
            </footer>

        </article></div>
    )
}

export default ProjectCard