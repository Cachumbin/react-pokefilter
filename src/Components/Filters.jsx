const Filters = ({
  generation,
  setGeneration,
  type,
  setType,
  stats,
  setStats,
  clearFilters,
}) => {
  return (
    <div className="col-span-2 p-10 bg-violet-950 text-slate-200 font-semibold grid grid-cols-2 h-[calc(100vh-72px)]">
      <p className="place-self-center text-lg col-span-2">Generation</p>
      <select
        className="h-10 col-span-2 p-2 rounded-lg text-indigo-900 mx-4"
        name="generation"
        id="generation-select"
        onChange={(e) => setGeneration(e.target.value)}
        value={generation}
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
        value={(stats.hpMin == 0 && "") || (stats.hpMin != 0 && stats.hpMin)}
        onChange={(e) =>
          setStats({
            ...stats,
            hpMin: parseInt(e.target.value) || 0,
          })
        }
      />
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
        className="h-10 col-start-1 mx-4 p-2 rounded-lg text-indigo-900"
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
        className="h-10 col-start-1 mx-4 p-2 rounded-lg text-indigo-900"
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
  );
};

export default Filters;
