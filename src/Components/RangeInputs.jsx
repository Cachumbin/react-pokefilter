const RangeInputs = ({
  label,
  minValue,
  maxValue,
  setMinValue,
  setMaxValue,
}) => {
  return (
    <div className="col-span-2">
      <h3 className="place-self-center text-lg col-span-2">{label}</h3>
      <input
        type="number"
        placeholder="min"
        className="h-10 col-start-1 mx-4 p-2 rounded-lg text-indigo-900"
        value={minValue === 0 ? "" : minValue}
        onChange={(e) => setMinValue(parseInt(e.target.value) || 0)}
      />
      <input
        type="number"
        placeholder="max"
        className="h-10 mx-4 p-2 rounded-lg text-indigo-900"
        value={maxValue === 300 ? "" : maxValue}
        onChange={(e) => setMaxValue(parseInt(e.target.value) || 300)}
      />
    </div>
  );
};

export default RangeInputs;
