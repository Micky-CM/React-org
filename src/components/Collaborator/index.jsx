import "./Collaborator.css"
import { AiFillCloseCircle } from "react-icons/ai"

const Collaborator = (props)=>{
  const {name, job, img, team} = props.data
  const {primaryColor, deleteCollaborator} = props
  return <div className="collaborator">
    <AiFillCloseCircle className="delete" onClick={deleteCollaborator}/>
    <div className="header" style={{background: primaryColor}}>
      <img src={img} alt={name} />
    </div>
    <div className="info">
      <h4>{name}</h4>
      <h5>{job}</h5>
    </div>
  </div>
}

export default Collaborator