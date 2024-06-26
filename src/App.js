import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MyOrg from './components/MyOrg';
import Team from './components/Team';
import Footer from './components/Footer';

function App(){
  const [showForm, updateShowForm] = useState(false)
  const [collaborators, setCollaborators] = useState([{
    team: "Front End",
    img: "https://github.com/harlandlohora.png",
    name: "Harland Lohora",
    job: "Instructor"
  },
  {
    team: "Programación",
    img: "https://github.com/genesysR-dev.png",
    name: "Genesys Rondón",
    job: "Desarrolladora de software e instructora"
  },
  {
    team: "UX y Diseño",
    img: "https://github.com/JeanmarieAluraLatam.png",
    name: "Jeanmarie Quijada",
    job: "Instructora en Alura Latam"
  },
  {
    team: "Programación",
    img: "https://github.com/christianpva.png",
    name: "Christian Velasco",
    job: "Head de Alura e Instructor"
  },
  {
    team: "Innovación y Gestión",
    img: "https://github.com/JoseDarioGonzalezCha.png",
    name: "Jose Gonzalez",
    job: "Dev FullStack"
  }])

  //Lista de equipos
  const [teams, setTeams] = useState([
    {
      title: "Programación",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9"
    },
    {
      title: "Front End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      title: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2"
    },
    {
      title: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8"
    },
    {
      title: "UX y Diseño",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5"
    },
    {
      title: "Mobile",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9"
    },
    {
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
  const deleteCollaborator = () => {
    console.log("Eliminar colaborador")
  }

  //Actualizar color de equipo
  const setColor = (color, title) => {
    const updateTeams = teams.map((team) => {
      if (team.title === title) {
        team.primaryColor = color
      }
      return team
    })

    setTeams(updateTeams)
  }

  return (
    <div>
      <Header/>
      {/* {showForm ? <Form/> : <></>} */}
      {
        showForm && <Form
          teams={teams.map((team)=> team.title)}
          registerCollaborator = {registerCollaborator}
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
        />)
      }
      <Footer/>
    </div>
  );
}

export default App;
