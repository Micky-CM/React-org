import "./Team.css"
import Collaborator from "../Collaborator"
import hexToRgba from "hex-to-rgba"

const Team = (props)=>{
  //Destructuracion
  const { title, primaryColor, secondaryColor} = props.data
  const {collaborators, deleteCollaborator, setColor} = props

  const sectionStyle = {background: hexToRgba(primaryColor, 0.6)}
  const titleStyle = {borderColor: primaryColor}

  return <>
  {
    collaborators.length > 0 &&
    <section className="team" style={sectionStyle}>
      <input
        type="color"
        className="input-color"
        value={hexToRgba(primaryColor, 0.6)}
        onChange={(e)=>{
          setColor(e.target.value, title)
        }}
      />
      <h3 style={titleStyle}>{title}</h3>
      <div className="collaborators">
        {
          collaborators.map((collaborator, index)=> <Collaborator
            data={collaborator}
            key={index}
            primaryColor={primaryColor}
            deleteCollaborator={deleteCollaborator}
          />)
        }
      </div>
    </section>
  }
  </>
}

export default Team