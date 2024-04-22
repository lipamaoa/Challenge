function Results({ pokemon }) {
  if (!pokemon) {
    return <p>No Pokémon data available</p>;
  }
  return (
    <div className="flex justify-center py-5">
      <li className="flex gap-4 py-2">
        {pokemon.sprites && (
          <img
            src={pokemon.sprites.back_default}
            alt={pokemon.name}
            className="h-24"
          />
        )}
        <div className=" flex grow flex-col pt-0.5">
          <p className="font-medium capitalize">Name: {pokemon.name}</p>
          <p className="text-sm capitalize italic text-stone-500">
            Number: {pokemon.id}
          </p>
        </div>
      </li>
    </div>
  );
}

export default Results;
