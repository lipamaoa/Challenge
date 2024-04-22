const API_BASE_URL = `https://pokeapi.co/api/v2/pokemon`;

export const fetchAllPokemons = async (signal) => {
  try {
    const res = await fetch(`${API_BASE_URL}?limit=2000`, { signal });

    if (!res.ok) {
      throw new Error("Failed to fetch all pokemons");
    }

    const data = await res.json();

    if (!data) {
      throw new Error("Pokemons not found");
    }

    const pokemonsData = data.results.map((pokemon) => ({
      name: pokemon.name,
      url: pokemon.url,
    }));

    return pokemonsData;
  } catch (error) {
    throw error;
  }
};

export const fetchPokemonByName = async (name, signal) => {
  try {
    const res = await fetch(`${API_BASE_URL}/${name}`, { signal });

    if (!res.ok) {
      throw new Error("Pokémon not found");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchPokemonById = async (id, signal) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      signal,
    });

    if (!res.ok) {
      throw new Error("Pokémon not found");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
