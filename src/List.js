import React from 'react'

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { name, id, age, image } = person
        return (
          <div key={id} className='person'>
            <img src={image} alt={name} />
            <div className='info'>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default List
