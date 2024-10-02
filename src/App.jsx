import { useState } from 'react'
import './App.css'
import { Person } from './components/Person';

function App() {

  const [people, setPeople] = useState([
    {
      id: 1,
      name: "Inés Oliveros",
      role: "Backend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar8.png"
    },
    {
      id: 2,
      name: "Kerly",
      role: "Fronted Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar3.png"
    },
    {
      id: 3,
      name: "Vanessa",
      role: "Scrum",
      img: "https://bootdey.com/img/Content/avatar/avatar6.png"
    },
  ]);

  return (
    <div>
      <Person/>

    </div>
  )
}

export default App