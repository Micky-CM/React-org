//import { useState } from "react"
import "./MyOrg.css"

const MyOrg = (props)=>{
  //Estado - hooks: useState
  //const [nombreVariable, funcionActualiza] = useState(valorInicial)
/*   const [show, updateShow] = useState(true)
  const clickHandle = ()=>{
    updateShow(!show)
  } */
  return <section className="orgSection">
    <h3 className="title">Mi organización</h3>
    <img src="/img/add.png" alt="logo para agregar" onClick={props.changeShowForm}/>
  </section>
}

export default MyOrg