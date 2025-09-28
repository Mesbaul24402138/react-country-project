import './App.css'
import Countries from './componants/countries/Countries'



const fetchData=fetch("https://openapi.programming-hero.com/api/all")
.then(res=>res.json())

function App() {


  return (
    <>
        <Countries fetchData={fetchData}></Countries>
    </>
  )
}

export default App
