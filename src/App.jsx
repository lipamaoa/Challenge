import React from "react";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import Results from "./components/Results";
import {
  fetchAllPokemons,
  fetchPokemonByName,
  fetchPokemonById,
} from "./services/pokemon";
import Loader from "./ui/Loader";
import Button from "./ui/Button";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [cache, setCache] = useState({});

  useEffect(() => {
    const loadAllPokemons = async () => {
      setIsLoading(true);
      setError("");
      try {
        const pokemonsData = await fetchAllPokemons();
        setPokemons(pokemonsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    const controller = new AbortController();

    loadAllPokemons();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (query.length < 3) {
      setPokemon("");
      return;
    }

    const match = pokemons.find((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    if (match) {
      fetchPokemon(match.name);
    } else {
      setPokemon(null);
    }
  }, [query, pokemons]);

  const fetchPokemon = async (name) => {
    const controller = new AbortController();
    try {
      setIsLoading(true);
      setError("");

      const cachedData = cache[name.toLowerCase()];
      if (cachedData) {
        setPokemon(cachedData);
        return;
      }

      const data = await fetchPokemonByName(name, controller.signal);
      setPokemon(data);
      setCache((prevCache) => ({ ...prevCache, [name.toLowerCase()]: data }));
    } catch (err) {
      console.error(err.message);
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
    return () => controller.abort();
  };

  const fetchPokemonbyId = async (identifier) => {
    const controller = new AbortController();

    try {
      setIsLoading(true);
      setError("");
      const data = await fetchPokemonById(identifier, controller.signal);
      setPokemon(data);
    } catch (err) {
      setError(err.message);
      setPokemon([]);
    } finally {
      setIsLoading(false);
    }

    return () => controller.abort();
  };

  const handlePrevNext = (direction) => {
    let newId;

    if (direction === "next") {
      newId = pokemon.id + 1;
    } else {
      newId = pokemon.id - 1;
    }

    if (newId > 0) {
      fetchPokemonbyId(newId);
    }
  };

  return (
    <div>
      <Search setQuery={setQuery} />
      {isLoading && <Loader />}
      {pokemon && !isLoading && !error && pokemon?.id && (
        <div className="flex flex-col justify-center py-5 border-2 border-slate-600">
          <Results pokemon={pokemon} />
          <Button
            onNavigate={handlePrevNext}
            isPrevDisabled={pokemon.id <= 1}
          />
        </div>
      )}
    </div>
  );
}

export default App;
