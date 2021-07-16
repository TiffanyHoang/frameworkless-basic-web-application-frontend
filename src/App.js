import './App.css';
import React, { useEffect, useState } from 'react'
import { getList, setItem } from './services/list'

function App() {
  const [state, setState] = useState([])
  const [itemInput, setItemInput] = useState('')
  const [shouldFetch, setShouldFetch] = useState(true);

  useEffect(() => {
    if (shouldFetch === true) {
      getList().then(items => { // get database
        setState(items)
      })
    }
    setShouldFetch(false)
  }, [shouldFetch])

  const handleSubmit = (event) => {
    event.preventDefault();
    setItem(itemInput) // add to database
      .then(() => {
        setItemInput("")
        setShouldFetch(true)
      })
  }

  return (
    <div className="wrapper">
      <h1>My Grocery List</h1>
      <ul>
        {state.map(item => <li key={item.Name}>{item.Name}</li>)}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          <p>New Item</p>
          <input key="here" type="text" onChange={event => setItemInput(event.target.value)} value={itemInput} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
