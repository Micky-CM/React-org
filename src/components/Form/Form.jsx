import { useState } from "react"
import "./Form.css"
import InputText from "../InputText"
import OptionList from "../OptionList"
import ButtonForm from "../ButtonForm"

const Form = (props)=> {

  const [name, setName] = useState("")
  const [job, setJob] = useState("")
  const [img, setImg] = useState("")
  const [team, setTeam] = useState("")

  const {registerCollaborator} = props

  const handleSubmit = (e)=>{
    e.preventDefault()
    let dataToSend = {
      name,
      job,
      img,
      team
    }
    registerCollaborator(dataToSend)
  }
  return <section className="form">
    <form onSubmit={handleSubmit}>
      <h2>Rellena el formulario para crear el colaborador</h2>
      <InputText
        title="Nombre"
        placeholder="Ingresar nombre"
        required
        value={name}
        setValue={setName}
      />
      <InputText
        title="Puesto"
        placeholder="Ingresar puesto"
        required
        value={job}
        setValue={setJob}
      />
      <InputText
        title="Imagen"
        placeholder="Ingresar enlace de foto"
        required
        value={img}
        setValue={setImg}
      />
      <OptionList
        value={team}
        setTeam={setTeam}
        teams={props.teams}
      />
      <ButtonForm>Crear</ButtonForm>
    </form>
  </section>
}

export default Form