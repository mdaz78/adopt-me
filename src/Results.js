import React from "react";
import Pet from "./Pet";

export default function Results({ pets }) {
  return (
    <div className="search">
      {/* {pets.map(({ id: key, name, animal, breed }) => (
        <Pet name={name} animal={animal} breed={breed} key={key} />
      ))} */}

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
