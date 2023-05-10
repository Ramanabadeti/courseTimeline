// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectItems} = props
  return (
    <div className="project">
      <img className="image" src={projectItems.imageUrl} alt="projectImg" />
      <div className="innerHead">
        <h1>{projectItems.projectTitle}</h1>
        <div>
          <AiFillCalendar />
          <p>{projectItems.duration}</p>
        </div>
      </div>
      <p>{projectItems.description}</p>
      <a href={projectItems.projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
