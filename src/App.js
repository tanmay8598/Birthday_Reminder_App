import React, { useState } from 'react'
import List from './List'
import data from './data'

const App = () => {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <div className='container'>
        <h2>{people.length} birthdays today</h2>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </div>
    </main>
  )
}

export default App
