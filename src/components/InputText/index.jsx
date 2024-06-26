import "./InputText.css"

const InputText = (props)=>{
  const modifiedPlaceholder = `${props.placeholder}...`

  const handleChange = (e)=>{
    props.setValue(e.target.value)
  }
  return <fieldset className="input-text">
    <label>{props.title}</label>
    <input
      placeholder={modifiedPlaceholder}
      required={props.required}
      value={props.value}
      onChange={handleChange}
    />
  </fieldset>
}

export default InputText