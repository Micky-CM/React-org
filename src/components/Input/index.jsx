import "./Input.css"

const Input = (props)=>{
  const modifiedPlaceholder = `${props.placeholder}...`

  //Destructuracion
  const {type = "text"} = props

  const handleChange = (e)=>{
    props.setValue(e.target.value)
  }
  return <fieldset className={`input input-${type}`}>
    <label>{props.title}</label>
    <input
      placeholder={modifiedPlaceholder}
      required={props.required}
      value={props.value}
      onChange={handleChange}
      type={type}
    />
  </fieldset>
}

export default Input