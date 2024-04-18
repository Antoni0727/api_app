import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './index.css'

function App() {

  

  const [dogs, setDogs] = useState([])


  const fetchData = ()=>{
    fetch("https://api.thedogapi.com/v1/breeds")
       .then( res => res.json())
       .then( data =>  setDogs(data) )
       .catch( err => console.log(err.message))
  }

useEffect(fetchData, [])

  return (
    <>
      <section>
        <h1 className='main-text'>The Dog App</h1>

        <div className='dog-list'>
          {dogs.map((dog)=>(
            <div className="card" key={dog.id}>
              <img src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}  className='dog-photo'></img>
              <h3>{dog.name}</h3>
              <p>Weight: {dog.weight.metric} kg</p>
              <p>Height: {dog.height.metric} cm</p>
              <p>Life span: {dog.life_span}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default App