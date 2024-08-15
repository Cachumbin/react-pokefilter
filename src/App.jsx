import React from 'react'

const App = () => {
  return (
    <div>
      <header>
        <div>
          <form action="">
            <div>
              <label htmlFor="search-bar">Search</label>
              <input type="text" id="search-bar" />
            </div>
            <button>icono</button>
          </form>
        </div>
      </header>
      <main>
      <div>
          <p>Generation</p>
          <select name="generation" id="generation-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <p>Type</p>
          <select name="type" id="type-select">
            <option value="fire">Fire</option>
            <option value="ice">Ice</option>
            <option value="normal">Normal</option>
          </select>
          <h3>Hp</h3>
          <input type="number" /><input type="number" />
          <h3>Attack</h3>
          <input type="number" /><input type="number" />
          <h3>Defense</h3>
          <input type="number" /><input type="number" />
          <button>Clear</button>
        </div>
        <div>
          <ul>
            <li>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="" />
              <h2>Ditto</h2>
              <p>Type: Normal</p>
              <p>Attack: 48</p>
              <p>Hp: 48</p>
              <p>Defense: 48</p>
            </li>
            <li>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="" />
              <h2>Ditto</h2>
              <p>Type: Normal</p>
              <p>Attack: 48</p>
              <p>Hp: 48</p>
              <p>Defense: 48</p>
            </li>
            <li>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="" />
              <h2>Ditto</h2>
              <p>Type: Normal</p>
              <p>Attack: 48</p>
              <p>Hp: 48</p>
              <p>Defense: 48</p>
            </li>
            <li>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="" />
              <h2>Ditto</h2>
              <p>Type: Normal</p>
              <p>Attack: 48</p>
              <p>Hp: 48</p>
              <p>Defense: 48</p>
            </li>
            <li>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="" />
              <h2>Ditto</h2>
              <p>Type: Normal</p>
              <p>Attack: 48</p>
              <p>Hp: 48</p>
              <p>Defense: 48</p>
            </li>
            <li>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="" />
              <h2>Ditto</h2>
              <p>Type: Normal</p>
              <p>Attack: 48</p>
              <p>Hp: 48</p>
              <p>Defense: 48</p>
            </li>
            <li>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="" />
              <h2>Ditto</h2>
              <p>Type: Normal</p>
              <p>Attack: 48</p>
              <p>Hp: 48</p>
              <p>Defense: 48</p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App