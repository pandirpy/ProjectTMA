//import React from 'react'

function Cars({cars}) {
  return (
    cars.map(car => <li key={car}>{car}</li>)
  )
}

export default Cars