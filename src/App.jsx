import React from "react";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const App = () => {
  const [pokemonsRaw, setPokemonsRaw] = useState(null);
  const [pokemons, setPokemons] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [generation, setGeneration] = useState("1");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/generation/${generation}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPokemonsRaw(data);
      });
  }, [generation]);

  useEffect(() => {
    const getPokemon = async (name) => {
      const pokeInfo = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await pokeInfo.json();
      return data;
    };

    const getPokemons = async () => {
      setPokemons([]);
      for (const pokemonInfo of pokemonsRaw.pokemon_species) {
        const pokemon = await getPokemon(pokemonInfo.name);
        setPokemons((currentPokemons) => {
          return [...currentPokemons, pokemon];
        });
      }
    };

    pokemonsRaw && getPokemons();
  }, [pokemonsRaw]);

  function handleSubmit(e) {
    e.preventDefault();
    /*let pokemonsCopy = [...pokemons];
    setFilterPokemons(
      pokemonsCopy.filter((pokemonData) => {
        return pokemonData.name.includes(searchWord);
      })
    );*/
  }
  /*,{" "}
                      {pokemonData.types[1].type.name && true}*/

  return (
    <div>
      <header className="p-2 bg-slate-900">
        <div>
          <form action="" className="flex" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="search-bar"
                className="m-2 text-slate-200 font-semibold"
              >
                Search for Pokemons
              </label>
              <input
                type="text"
                id="search-bar"
                className="bg-blue-900 rounded-lg m-2 p-2 text-slate-200"
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value.toLowerCase())}
              />
            </div>
            <button className="m-2 rounded-lg p-2 bg-blue-900">
              <FaSearch className="fill-slate-200" />
            </button>
          </form>
        </div>
      </header>
      <main className="grid grid-cols-5 a">
        <div className="col-span-1 p-10 bg-violet-950 text-slate-200 font-semibold grid grid-cols-2 h-[calc(100vh-72px)]">
          <p className="place-self-center text-lg col-span-2">Generation</p>
          <select
            className="h-10 col-span-2"
            name="generation"
            id="generation-select"
            onChange={(e) => setGeneration(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          <p className="place-self-center text-lg col-span-2">Type</p>
          <select className="h-10 col-span-2" name="type" id="type-select">
            <option value="fire">Fire</option>
            <option value="ice">Ice</option>
            <option value="normal">Normal</option>
          </select>
          <h3>Hp</h3>
          <input type="number" placeholder="min" className="h-10 col-start-1" />
          <input type="number" placeholder="max" className="h-10" />
          <h3>Attack</h3>
          <input type="number" placeholder="min" className="h-10 col-start-1" />
          <input type="number" placeholder="max" className="h-10" />
          <h3>Defense</h3>
          <input type="number" placeholder="min" className="h-10 col-start-1" />
          <input type="number" placeholder="max" className="h-10" />
          <button className="col-span-2">Clear</button>
        </div>
        <div className="col-span-4 bg-indigo-950 overflow-auto h-[calc(100vh-72px)]">
          <ul className="grid grid-cols-4">
            {pokemons.map((pokemonData) => {
              return (
                pokemonData.name.includes(searchWord) && (
                  <li
                    key={pokemonData.id}
                    className="relative m-5 bg-sky-700 h-[450px] w-72 rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]"
                  >
                    <div className="absolute inset-0 [backface-visibility:hidden] grid gris-rows-6 font-semibold text-slate-200">
                      <img
                        src={pokemonData.sprites.front_default}
                        alt=""
                        className="size-48 place-self-center"
                      />
                      <h2 className="p-1  mx-3 text-lg">
                        {pokemonData.name.charAt(0).toUpperCase() +
                          pokemonData.name.slice(1).toLowerCase()}
                      </h2>
                      <h3 className="p-1 mx-3">Type</h3>
                      <ul className="h-12">
                        {pokemonData.types.map((typeinfo) => {
                          return (
                            <li key={typeinfo.type.name} className="mx-8">
                              - {typeinfo.type.name}
                            </li>
                          );
                        })}
                      </ul>
                      <p className="p-1 mx-3">
                        Attack: {pokemonData.stats[1].base_stat}
                      </p>
                      <p className="p-1 mx-3">
                        Hp: {pokemonData.stats[0].base_stat}
                      </p>
                      <p className="p-1 mx-3">
                        Defense: {pokemonData.stats[2].base_stat}
                      </p>
                    </div>
                    <div className=" overflow-hidden absolute inset-0 h-full w-full rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] text-slate-200 font-semibold">
                      <p className="p-1 mx-3 mt-4">
                        Special Defense: {pokemonData.stats[4].base_stat}
                      </p>
                      <p className="p-1 mx-3">
                        Speed: {pokemonData.stats[5].base_stat}
                      </p>
                      <h3 className="p-1 mx-3 text-lg">Ablilities</h3>
                      <ul>
                        {pokemonData.abilities.map((ab) => {
                          return (
                            <li key={ab.ability.name} className="p-1 mx-3">
                              - {ab.ability.name}
                            </li>
                          );
                        })}
                      </ul>
                      <h3 className="p-1 mx-3 text-lg">Moves</h3>
                      <ul>
                        {pokemonData.moves.map((mo) => {
                          return (
                            <li key={mo.move.name} className="p-1 mx-3">
                              - {mo.move.name}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                )
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default App;
