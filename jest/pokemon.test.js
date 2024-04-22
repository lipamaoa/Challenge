import { enableFetchMocks } from "jest-fetch-mock";
import {
  fetchAllPokemons,
  fetchPokemonByName,
  fetchPokemonById,
} from "../src/services/pokemon";
enableFetchMocks();

/*FetchAll Pokemons*/

describe("fetchAllPokemons", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("should fetche pokemons successfully from the API", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        results: [
          { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
          { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
        ],
      })
    );

    const pokemons = await fetchAllPokemons();
    expect(pokemons).toEqual([
      { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
    ]);
    expect(fetch).toHaveBeenCalledWith(
      "https://pokeapi.co/api/v2/pokemon?limit=2000",
      { signal: undefined }
    );
  });

  it("throws an error when API call fails", async () => {
    fetch.mockReject(new Error("API failed"));
    await expect(fetchAllPokemons()).rejects.toThrow("API failed");
  });
});

/*FetchPokemonByName*/

describe("fetchPokemonByName", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("fetch a single pokemon by name successfully", async () => {
    const mockPokemon = {
      name: "pikachu",
      sprites: {},
    };
    fetch.mockResponseOnce(JSON.stringify(mockPokemon));

    const data = await fetchPokemonByName("pikachu");
    expect(data).toEqual(mockPokemon);
    expect(fetch).toHaveBeenCalledWith(
      `https://pokeapi.co/api/v2/pokemon/pikachu`,
      { signal: undefined }
    );
  });

  it("handle errors when pokemon is not found", async () => {
    fetch.mockResponseOnce(JSON.stringify({}), { status: 404 });
    await expect(fetchPokemonByName("missingno")).rejects.toThrow(
      "Pokémon not found"
    );
  });
});

/*FetchPokemonById*/

describe("fetchPokemonById", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("should fetch a single pokemon by ID", async () => {
    const mockPokemon = {
      id: 25,
      name: "pikachu",
      sprites: {},
    };
    fetch.mockResponseOnce(JSON.stringify(mockPokemon));

    const data = await fetchPokemonById(25);
    expect(data).toEqual(mockPokemon);
    expect(fetch).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/pokemon/25`, {
      signal: undefined,
    });
  });

  it("should throw an error when the API call fails", async () => {
    fetch.mockReject(new Error("API failed"));
    await expect(fetchPokemonById(999)).rejects.toThrow("API failed");
  });
});
