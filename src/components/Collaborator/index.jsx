import "./Collaborator.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Collaborator = (props)=>{
  const { id, name, job, img, team, fav } = props.data
  const { primaryColor, deleteCollaborator, like } = props
  return <div className="collaborator">
    <AiFillCloseCircle className="delete" onClick={()=> deleteCollaborator(id)}/>
    <div className="header" style={{background: primaryColor}}>
      <img src={img} alt={name} />
    </div>
    <div className="info">
      <h4>{name}</h4>
      <h5>{job}</h5>
      { fav ? <AiFillHeart color="red" onClick={()=> like(id)}/> : <AiOutlineHeart onClick={()=> like(id)}/> }

    </div>
  </div>
}

export default Collaborator