import React from 'react'
import ExperienceCard from './cards/ExperienceCard'
import EducationCard from './cards/EducationCard'
import ProjectCard from './cards/ProjectCard'
import ContectsCard from './cards/ContectsCard'
import SkillsCard from './cards/SkillsCard'

const Grid = () => {
  return (
    <>
    
    <div className='w-3/4 mx-auto h-auto grid grid-cols-1 md:grid-rows-2 grid-rows-1 gap-y-5 mb-28'>
        <div className="w-full flex md:flex-row flex-col h-full gap-5">
        <EducationCard/>
        <ExperienceCard/>
        </div>
      <div className="w-full flex md:flex-row flex-col  h-full gap-5">
        <ProjectCard/>
        <ContectsCard/>
        <SkillsCard/>
      </div>
    </div>
    </>
  )
}

export default Grid