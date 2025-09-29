
import { Suspense } from 'react'
import './App.css'
import Countries from './componants/countries/Countries'

let fetchData=fetch("https://openapi.programming-hero.com/api/all")
.then(res=>res.json())



function App() {


  return (
    <>

    <Suspense fallback={<p>Loading...</p>}>
            <Countries fetchData={fetchData}></Countries>
    </Suspense>
       
        
    </>
  )
}

export default App
