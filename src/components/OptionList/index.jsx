import "./OptionList.css"

const OptionList = (props)=>{
  const handleChange = (e)=>{
    props.setTeam(e.target.value)
  }
  return <fieldset className="optionList">
    <label>Equipos</label>
    <select value={props.value} onChange={handleChange}>
      <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
      {props.teams.map((team, index)=> <option key={index} value={team}>{team}</option>)}
    </select>
  </fieldset>
}

export default OptionList