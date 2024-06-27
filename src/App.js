import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MyOrg from './components/MyOrg';
import Team from './components/Team';
import Footer from './components/Footer';

function App(){
  const [showForm, updateShowForm] = useState(false)
  const [collaborators, setCollaborators] = useState([{
    id: uuid(),
    team: "Front End",
    img: "https://github.com/harlandlohora.png",
    name: "Harland Lohora",
    job: "Instructor",
    fav: false
  },
  {
    id: uuid(),
    team: "Programación",
    img: "https://github.com/genesysR-dev.png",
    name: "Genesys Rondón",
    job: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    team: "UX y Diseño",
    img: "https://github.com/JeanmarieAluraLatam.png",
    name: "Jeanmarie Quijada",
    job: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    team: "Programación",
    img: "https://github.com/christianpva.png",
    name: "Christian Velasco",
    job: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    team: "Innovación y Gestión",
    img: "https://github.com/JoseDarioGonzalezCha.png",
    name: "Jose Gonzalez",
    job: "Dev FullStack",
    fav: false
  }])

  //Lista de equipos
  const [teams, setTeams] = useState([
    {
      id: uuid(),
      title: "Programación",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9"
    },
    {
      id: uuid(),
      title: "Front End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      id: uuid(),
      title: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2"
    },
    {
      id: uuid(),
      title: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8"
    },
    {
      id: uuid(),
      title: "UX y Diseño",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5"
    },
    {
      id: uuid(),
      title: "Mobile",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9"
    },
    {
      id: uuid(),
      title: "Innovación y Gestión",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF"
    }
  ])

  const changeShowForm = ()=>{
    updateShowForm(!showForm)
  }
  //Ternario -> condicion ? seMuestra : noSeMuestra
  //Corto circuito -> condicion && seMuestra

  //Registrar colaborador
  const registerCollaborator = (collaborator)=>{
    //Spread operator
    setCollaborators([...collaborators, collaborator])
  }

  //Eliminar colaborador
  const deleteCollaborator = (id) => {
    console.log("Eliminar colaborador")
    const newCollaborators = collaborators.filter((collaborator)=> collaborator.id !== id)
    setCollaborators(newCollaborators)
  }

  //Actualizar color de equipo
  const setColor = (color, id) => {
    const updateTeams = teams.map((team) => {
      if (team.id === id) {
        team.primaryColor = color
      }
      return team
    })

    setTeams(updateTeams)
  }

  //Crear equipo
  const createTeam = (newTeam)=>{
    console.log(createTeam)
    setTeams([...teams, {...newTeam, id: uuid()}])
  }

  //Cambiar like
  const like = (id)=>{
    const updateCollaborators = collaborators.map((collaborator)=>{
      if(collaborator.id === id){
        collaborator.fav = !collaborator.fav
      }
      return collaborator
    })
    setCollaborators(updateCollaborators)
  }

  return (
    <div>
      <Header/>
      {/* {showForm ? <Form/> : <></>} */}
      {
        showForm && <Form
          teams={teams.map((team)=> team.title)}
          registerCollaborator = {registerCollaborator}
          createTeam={createTeam}
        />
      }
      <MyOrg changeShowForm={changeShowForm} />
      {
        teams.map((team)=> <Team
          data={team}
          key={team.title}
          collaborators={collaborators.filter(collaborator => collaborator.team === team.title)}
          deleteCollaborator={deleteCollaborator}
          setColor={setColor}
          like={like}
        />)
      }
      <Footer/>
    </div>
  );
}

export default App;
