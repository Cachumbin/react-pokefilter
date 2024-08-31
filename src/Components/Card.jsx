import React from "react";

const Card = ({ id, image, bgImage, name, types, stats, abilities }) => {
  return (
    <li key={id} className=" w-[510px] pt-8 bg-stone-300 m-5">
      <p className="relative bottom-3 mx-10">Pokemon Info</p>
      <div className="grid grid-cols-5">
        <div className="col-span-2 bg-amber-300">
          <div className="bg-violet-300 rounded-xl m-2 border-2 border-neutral-400 p-1">
            <h3>No.{id}</h3>
            <div className="relative border-2 m-2 border-neutral-400 h-40 w-40">
              <img
                className="absolute inset-0 w-full h-full object-cover z-0"
                src={bgImage}
                alt=""
              />
              <img
                src={image}
                className="absolute size-36 inset-0 w-40 h-40 object-cover m-auto z-10"
                alt=""
              />
            </div>
            <h2>
              {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
            </h2>
          </div>
        </div>
        <div className="col-span-3 bg-amber-300">
          <div className="bg-amber-100 rounded-xl m-2 p-1 h-14">
            <h3>Types</h3>
            <ul className="h-12 flex">
              {types.map((typeinfo) => {
                return (
                  <li key={typeinfo.type.name} className="mx=8">
                    {typeinfo.type.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="bg-amber-100 rounded-xl m-2 p-1">
            <h3>Stats</h3>
            <p className="p-1 mx-3">Attack: {stats[1].base_stat}</p>
            <p className="p-1 mx-3">Hp: {stats[0].base_stat}</p>
            <p className="p-1 mx-3">Defense: {stats[2].base_stat}</p>
          </div>
          <div className="bg-amber-100 rounded-xl h-32 m-2 p-1">
            <h3>Abilities</h3>
            <ul>
              {abilities.map((ab) => {
                return (
                  <li key={ab.ability.name} className="p-1 mx-3">
                    - {ab.ability.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
