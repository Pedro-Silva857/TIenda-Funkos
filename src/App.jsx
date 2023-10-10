import Container from "./components/Container"
import NavBar from "./components/NavBar/NavBar"

function App() {

  return (
    <> 
      <div className='bg-black fixed left-0 top-0 w-full'>
        <NavBar/>
        <Container greeting={'Bienvenidos'}/> 
      </div>
      
     
    </>
  )
}

export default App
