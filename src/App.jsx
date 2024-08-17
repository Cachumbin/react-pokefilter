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
              <input type="text" id="search-bar" className='bg-blue-900 rounded-lg m-2 p-2 text-slate-200' />
            </div>
            <button className='m-2 rounded-lg p-2 bg-blue-900'><FaSearch className='fill-slate-200'/></button>
          </form>
        </div>
      </header>
      <main className='grid grid-cols-4 a'>
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
        <div className='col-span-3 bg-indigo-950'>
          <ul className='flex'>
            <li className='relative m-5 bg-sky-700 h-96 w-72 rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]'>
                <div className='absolute inset-0 [backface-visibility:hidden] grid gris-rows-6 font-semibold text-slate-200'>
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" alt="" className='size-48 place-self-center'/>
                  <h2  className='p-1  mx-3 text-lg'>Ditto</h2>
                  <p className='p-1 mx-3'>Type: Normal</p>
                  <p className='p-1 mx-3'>Attack: 48</p>
                  <p className='p-1 mx-3'>Hp: 48</p>
                  <p className='p-1 mx-3'>Defense: 48</p>
                </div>
                <div className='absolute inset-0 h-full w-full rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] text-slate-200 font-semibold'>
                  <p className='p-1 mx-3 mt-4'>Special Defense: 48</p>
                  <p className='p-1 mx-3'>Speed: 48</p>
                  <h3 className='p-1 mx-3 text-lg'>Ablilities</h3>
                  <ul>
                    <li className='p-1 mx-3'>- Limber</li>
                    <li className='p-1 mx-3'>- Imposter</li>
                  </ul>
                  <h3 className='p-1 mx-3 text-lg'>Moves</h3>
                  <ul>
                    <li className='p-1 mx-3'>- Transform</li>
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