import React, { use } from "react";
import { NavLink } from "react-router";
const catagoriesPromise = fetch("/categories.json").then((res) => res.json());

const Catagories = () => {
  const categories = use(catagoriesPromise); //* when any items render at once we can {use} methood.
  return (
    <div>
      <h2 className="font-bold">All Catagories</h2>
      <div className="catagoriesBox flex flex-col mt-5 gap-y-2">
        {categories.map((card) => (
          <NavLink
            to={`/catagoris/${card.id}`}
            className="btn bg-base-100 hover:bg-base-200 border-0"
            key={card.id}
          >
            {card.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
