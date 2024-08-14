import React from 'react'

const App = () => {
  return (
    <div>
      <header>
        <div>
          <select name="generation" id="generation-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <select name="type" id="type-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <input type="number" />
        </div>
        <div>
          <input type="text" />
        </div>
      </header>
      <main>
        <div>
          <ul>
            <li>
              <img src="" alt="" />
              <h2></h2>
              <p></p>
              <p></p>
              <p></p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App