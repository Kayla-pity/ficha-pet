import PetCard from "./components/PetCard";


function App() {
  return(
    <div className= "card">
    <PetCard nome="Olivia" especie="Coelho" /> 
    <PetCard nome="Pitico" especie="Calopsita" /> 
    <PetCard nome="Tchuco" especie="Maritaca" /> 


    </div>
  )
}
export default App