import React from "react";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Card from "./Components/Card";
import bug from "./assets/backgrounds/bug.jpg";
import dark from "./assets/backgrounds/dark.jpg";
import dragon from "./assets/backgrounds/dragon.jpg";
import electric from "./assets/backgrounds/electric.jpg";
import fairy from "./assets/backgrounds/fairy.jpg";
import fighting from "./assets/backgrounds/fighting.jpg";
import fire from "./assets/backgrounds/fire.jpg";
import flying from "./assets/backgrounds/flying.jpg";
import ghost from "./assets/backgrounds/ghost.jpg";
import grass from "./assets/backgrounds/grass.jpg";
import ground from "./assets/backgrounds/ground.jpg";
import ice from "./assets/backgrounds/ice.jpg";
import normal from "./assets/backgrounds/normal.jpg";
import poison from "./assets/backgrounds/poison.jpg";
import psychic from "./assets/backgrounds/psychic.jpg";
import rock from "./assets/backgrounds/rock.jpg";
import steel from "./assets/backgrounds/steel.jpg";
import water from "./assets/backgrounds/water.jpg";

const App = () => {
  const [pokemonsRaw, setPokemonsRaw] = useState(null);
  const [pokemons, setPokemons] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [generation, setGeneration] = useState("1");
  const [type, setType] = useState("");
  const [stats, setStats] = useState({
    hpMin: 0,
    hpMax: 300,
    attackMin: 0,
    attackMax: 300,
    defenseMin: 0,
    defenseMax: 300,
  });

  const backgrounds = {
    bug: bug,
    dark: dark,
    dragon: dragon,
    electric: electric,
    fairy: fairy,
    fighting: fighting,
    fire: fire,
    flying: flying,
    ghost: ghost,
    grass: grass,
    ground: ground,
    ice: ice,
    normal: normal,
    poison: poison,
    psychic: psychic,
    rock: rock,
    steel: steel,
    water: water,
  };

  const colours = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

  useEffect(() => {
    setPokemons([]);
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
  }

  function clearFilters() {
    setType("");
    setStats({
      hpMin: 0,
      hpMax: 300,
      attackMin: 0,
      attackMax: 300,
      defenseMin: 0,
      defenseMax: 300,
    });
  }

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
      <main className="grid grid-cols-11 a">
        <div className="col-span-2 p-10 bg-violet-950 text-slate-200 font-semibold grid grid-cols-2 h-[calc(100vh-72px)]">
          <p className="place-self-center text-lg col-span-2">Generation</p>
          <select
            className="h-10 col-span-2 p-2 rounded-lg text-indigo-900 mx-4"
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
          <select
            onChange={(e) => setType(e.target.value)}
            className="h-10 col-span-2 p-2 rounded-lg text-indigo-900 mx-4"
            name="type"
            id="type-select"
            value={type}
          >
            <option value="">All</option>
            <option value="bug">Bug</option>
            <option value="dark">Dark</option>
            <option value="dragon">Dragon</option>
            <option value="electric">Electric</option>
            <option value="fairy">Fairy</option>
            <option value="fighting">Fighting</option>
            <option value="fire">Fire</option>
            <option value="flying">Flying</option>
            <option value="ghost">Ghost</option>
            <option value="grass">Grass</option>
            <option value="ground">Ground</option>
            <option value="ice">Ice</option>
            <option value="normal">Normal</option>
            <option value="poison">Poison</option>
            <option value="psychic">Psychic</option>
            <option value="rock">Rock</option>
            <option value="steel">Steel</option>
            <option value="water">Water</option>
          </select>
          <h3>Hp</h3>
          <input
            type="number"
            placeholder="min"
            className="h-10 col-start-1 mx-4 p-2 rounded-lg text-indigo-900"
            value={
              (stats.hpMin == 0 && "") || (stats.hpMin != 0 && stats.hpMin)
            }
            onChange={(e) =>
              setStats({
                ...stats,
                hpMin: parseInt(e.target.value) || 0,
              })
            }
          />{" "}
          <input
            type="number"
            placeholder="max"
            className="h-10 mx-4 p-2 rounded-lg text-indigo-900"
            value={
              (stats.hpMax == 300 && "") || (stats.hpMax != 300 && stats.hpMax)
            }
            onChange={(e) =>
              setStats({
                ...stats,
                hpMax: parseInt(e.target.value) || 300,
              })
            }
          />
          <h3>Attack</h3>
          <input
            type="number"
            placeholder="min"
            className="h-10 col-start-1 mx-4 p-2 rounded-lg  text-indigo-900"
            value={
              (stats.attackMin == 0 && "") ||
              (stats.attackMin != 0 && stats.attackMin)
            }
            onChange={(e) =>
              setStats({
                ...stats,
                attackMin: parseInt(e.target.value) || 0,
              })
            }
          />
          <input
            type="number"
            placeholder="max"
            className="h-10 mx-4 p-2 rounded-lg text-indigo-900"
            value={
              (stats.attackMax == 300 && "") ||
              (stats.attackMax != 300 && stats.attackMax)
            }
            onChange={(e) =>
              setStats({
                ...stats,
                attackMax: parseInt(e.target.value) || 300,
              })
            }
          />
          <h3>Defense</h3>
          <input
            type="number"
            placeholder="min"
            className="h-10 col-start-1 mx-4 p-2 rounded-lg  text-indigo-900"
            value={
              (stats.defenseMin == 0 && "") ||
              (stats.defenseMin != 0 && stats.defenseMin)
            }
            onChange={(e) =>
              setStats({
                ...stats,
                defenseMin: parseInt(e.target.value) || 0,
              })
            }
          />
          <input
            type="number"
            placeholder="max"
            className="h-10 mx-4 p-2 rounded-lg text-indigo-900"
            value={
              (stats.defenseMax == 300 && "") ||
              (stats.defenseMax != 300 && stats.defenseMax)
            }
            onChange={(e) =>
              setStats({
                ...stats,
                defenseMax: parseInt(e.target.value) || 300,
              })
            }
          />
          <button
            className="col-span-2 bg-indigo-700 rounded-xl"
            onClick={() => clearFilters()}
          >
            Clear
          </button>
        </div>
        <div className="col-span-9 bg-rose-300 overflow-auto h-[calc(100vh-72px)]">
          <ul className="grid grid-cols-3 place-items-center">
            {pokemons.map((pokemonData) => {
              const pokemonType = pokemonData.types[0]?.type?.name || "normal";
              const backgroundImage =
                backgrounds[pokemonType] || backgrounds.normal;

              return (
                pokemonData.name.includes(searchWord) &&
                pokemonData.types.some((element) =>
                  element.type.name.includes(type)
                ) &&
                pokemonData.stats[0].base_stat >= stats.hpMin &&
                pokemonData.stats[0].base_stat <= stats.hpMax &&
                pokemonData.stats[1].base_stat >= stats.attackMin &&
                pokemonData.stats[1].base_stat <= stats.attackMax &&
                pokemonData.stats[2].base_stat >= stats.defenseMin &&
                pokemonData.stats[2].base_stat <= stats.defenseMax && (
                  <Card
                    id={pokemonData.id}
                    image={pokemonData.sprites.front_default}
                    bgImage={backgroundImage}
                    name={pokemonData.name}
                    types={pokemonData.types}
                    stats={pokemonData.stats}
                    abilities={pokemonData.abilities}
                  />
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
