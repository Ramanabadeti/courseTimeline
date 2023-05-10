// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseItems} = props
  return (
    <div className="course">
      <div className="head">
        <h1>{courseItems.courseTitle}</h1>
        <div className="clock">
          <AiFillClockCircle />
          <p>{courseItems.duration}</p>
        </div>
      </div>

      <p>{courseItems.description}</p>
      <div className="courseTag">
        {courseItems.tagsList.map(eachTag => (
          <p className="tagName">{eachTag.name}</p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
