import React from "react";
import Pet from "./Pet";

export default function Results({ pets }) {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {!pets.length ? (
        <h2>No Pets Found</h2>
      ) : (
        pets.map(({ id: key, name, animal, breed, images, city, state }) => (
          <Pet
            name={name}
            animal={animal}
            breed={breed}
            images={images}
            location={`${city}, ${state}`}
            key={key}
            id={key}
          />
        ))
      )}
    </div>
  );
}
