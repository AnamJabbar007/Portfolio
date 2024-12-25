import React from 'react'
import ExperienceCard from './cards/ExperienceCard'
import EducationCard from './cards/EducationCard'

const Grid = () => {
  return (
    <div className='w-3/4 mx-auto h-screen '>
        <div className="w-full flex flex-row h-full gap-5">
        <EducationCard/>
        <ExperienceCard/>
        </div>
    </div>
  )
}

export default Grid