//import React from 'react'

function Array({stationery}) {
  return (
    <div>
        <ul>
            {stationery.map(stationeryItem => <li key={stationeryItem.name}>{stationeryItem.name} ${stationeryItem.cost} {stationeryItem.color}</li>)}
        </ul>
    </div>
  )
}

export default Array