import React, { useEffect, useState } from 'react'
import project from '../../studio/schemas/project.js'
import sanityClient from '../client.js'

export default function Projects() {
  const [projectData, setProjectData] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'project']{
         title,
         date,
         place,
         description,
         project,
         link,
         tags   
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error)
  }, [])

  return (
    <div
      name="projectsBg"
      className="h-screen w-full bg-gradient-to-b from-emerald-600 to-emerald-400"
    >
      <main className="text-xl text-black h-screen w-full ">
        <section className="container mx-auto">
          <h1 className="text-5xl flex justify-center font-family: 'Rubik Microbe', cursive;">
            My Projects
          </h1>
          <h2 className="text-lg text-gray-300 flex justify-center mb-12">
            ...That's a feature!
          </h2>
          <section className="grid grid-cols-2 gap-8">
            {projectData &&
              projectData.map((project, index) => (
                <article className="relative rounded-lg shadow-xl bg-gray-300 p-16">
                  <h3 className="text-orange-600 text-3xl font-bold mb-2 hover:text-orange-700">
                    <a
                      href={project.link}
                      alt={project.title}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="text-gray-500 text-xs space-x-4">
                    <span>
                      <strong className="font-bold">Finished on</strong>:{' '}
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                    <span>
                      <strong className="font-bold">Company</strong>:
                      {project.place}
                    </span>
                    <span>
                      <strong className="font-bold">Type</strong>:{' '}
                      {project.projectType}
                    </span>
                    <p className="my-6 text-lg text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-orange-600 font-bold hover:underline hover:text-orange-700 text-xl"
                    >
                      View The Project{' '}
                      <span role="img" aria-label="right pointer">
                        👉
                      </span>
                    </a>
                  </div>
                </article>
              ))}
          </section>
        </section>
      </main>
    </div>
  )
}
