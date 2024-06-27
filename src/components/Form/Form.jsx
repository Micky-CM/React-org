import { useState } from "react"
import "./Form.css"
import Input from "../Input"
import OptionList from "../OptionList"
import ButtonForm from "../ButtonForm"

const Form = (props)=> {

  const [name, setName] = useState("")
  const [job, setJob] = useState("")
  const [img, setImg] = useState("")
  const [team, setTeam] = useState("")

  const [title, setTitle] = useState("")
  const [color, setColor] = useState("")

  const {registerCollaborator, createTeam} = props

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

  const handleNewTeam = (e)=>{
    e.preventDefault()
    createTeam({title, primaryColor: color})
  }
  return <section className="form">
    <form onSubmit={handleSubmit}>
      <h2>Rellena el formulario para crear el colaborador</h2>
      <Input
        title="Nombre"
        placeholder="Ingresar nombre"
        required
        value={name}
        setValue={setName}
      />
      <Input
        title="Puesto"
        placeholder="Ingresar puesto"
        required
        value={job}
        setValue={setJob}
      />
      <Input
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
    <form onSubmit={handleNewTeam}>
      <h2>Rellena el formulario para crear el equipo</h2>
      <Input
        title="Título"
        placeholder="Ingresar título"
        required
        value={title}
        setValue={setTitle}
      />
      <Input
        title="Color"
        placeholder="Ingresar el color en Hex"
        required
        value={color}
        setValue={setColor}
        type="color"
      />
      <ButtonForm>Registrar equipo</ButtonForm>

    </form>
  </section>
}

export default Form