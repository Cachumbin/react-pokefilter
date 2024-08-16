import React from 'react'
import { FaSearch } from "react-icons/fa";

const App = () => {
  return (
    <div>
      <header className='p-2 bg-slate-900'>
        <div>
          <form action="" className='flex'>
            <div>
              <label htmlFor="search-bar" className='m-2 text-slate-200 font-semibold'>Search for Pokemons</label>
              <input type="text" id="search-bar" className='bg-blue-900 rounded-lg m-2 p-2' />
            </div>
            <button className='m-2 rounded-lg p-2 bg-blue-900 text-slate-200'><FaSearch className='fill-slate-200'/></button>
          </form>
        </div>
      </header>
      <main className='grid grid-cols-4'>
        <div className='col-span-1'>
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
        <div className='col-span-3'>
          <ul className='flex'>
            <li className='relative m-2 bg-slate-500 h-96 w-96 rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]'>
                <div className='absolute inset-0 [backface-visibility:hidden]'>
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="" />
                  <h2>Ditto</h2>
                  <p>Type: Normal</p>
                  <p>Attack: 48</p>
                  <p>Hp: 48</p>
                  <p>Defense: 48</p>
                </div>
                <div className='absolute inset-0 h-full w-full rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                  <p>Special Attack: 48</p>
                  <p>Special Defense: 48</p>
                  <p>Speed: 48</p>
                  <h3>Ablilities</h3>
                  <ul>
                    <li>Limber</li>
                    <li>Imposter</li>
                  </ul>
                  <h3>Moves</h3>
                  <ul>
                    <li>Transform</li>
                  </ul>
                </div>
            </li>
            <li className='relative m-2 bg-slate-500 h-96 w-96 rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]'>
                <div className='absolute inset-0 [backface-visibility:hidden]'>
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="" />
                  <h2>Ditto</h2>
                  <p>Type: Normal</p>
                  <p>Attack: 48</p>
                  <p>Hp: 48</p>
                  <p>Defense: 48</p>
                </div>
                <div className='absolute inset-0 h-full w-full rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                  <p>Special Attack: 48</p>
                  <p>Special Defense: 48</p>
                  <p>Speed: 48</p>
                  <h3>Ablilities</h3>
                  <ul>
                    <li>Limber</li>
                    <li>Imposter</li>
                  </ul>
                  <h3>Moves</h3>
                  <ul>
                    <li>Transform</li>
                  </ul>
                </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App