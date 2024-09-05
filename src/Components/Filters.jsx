import RangeInputs from "./RangeInputs";

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
      <RangeInputs
        label="Hp"
        minValue={stats.hpMin}
        maxValue={stats.hpMax}
        setMinValue={(value) => setStats({ ...stats, hpMin: value })}
        setMaxValue={(value) => setStats({ ...stats, hpMax: value })}
      />
      <RangeInputs
        label="Attack"
        minValue={stats.attackMin}
        maxValue={stats.attackMax}
        setMinValue={(value) => setStats({ ...stats, attackMin: value })}
        setMaxValue={(value) => setStats({ ...stats, attackMax: value })}
      />
      <RangeInputs
        label="Defense"
        minValue={stats.defenseMin}
        maxValue={stats.defenseMax}
        setMinValue={(value) => setStats({ ...stats, defenseMin: value })}
        setMaxValue={(value) => setStats({ ...stats, defenseMax: value })}
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
