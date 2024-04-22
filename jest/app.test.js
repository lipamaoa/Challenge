import App from "../src/App";
import {
  fetchAllPokemons,
  fetchPokemonByName,
  fetchPokemonById,
} from "../src/services/pokemon";
import userEvent from "@testing-library/user-event";
import { render, waitFor } from "@testing-library/react";

jest.mock("./services/pokemon", () => ({
  fetchAllPokemons: jest.fn(),
  fetchPokemonByName: jest.fn(),
  fetchPokemonById: jest.fn(),
}));

describe("App Component", () => {
  beforeEach(() => {
    fetchAllPokemons.mockResolvedValue([
      { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
      { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
      { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
    ]);
    fetchPokemonByName.mockResolvedValue({ id: 1, name: "bulbasaur" });
    fetchPokemonById.mockResolvedValue({ id: 2, name: "ivysaur" });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("searches pokemons and displays the results", async () => {
    const { getByRole, findByText } = render(<App />);

    const input = getByRole("textbox");
    userEvent.type(input, "bul");

    await waitFor(() =>
      expect(fetchPokemonByName).toHaveBeenCalledWith(
        "bulbasaur",
        expect.any(AbortSignal)
      )
    );

    const displayedPokemon = await findByText("Name: bulbasaur");
    expect(displayedPokemon).toBeInTheDocument();

    const previousButton = getByRole("button", { name: "Previous" });
    const nextButton = getByRole("button", { name: "Next" });

    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();

    expect(previousButton).toBeDisabled();
    expect(nextButton).not.toBeDisabled();
  });

  it("handles 'Next' button click correctly", async () => {
    const { getByRole, findByText } = render(<App />);

    const input = getByRole("textbox");
    userEvent.type(input, "bul");

    await waitFor(() =>
      expect(fetchPokemonByName).toHaveBeenCalledWith(
        "bulbasaur",
        expect.any(AbortSignal)
      )
    );

    const displayedPokemon = await findByText("Name: bulbasaur");
    expect(displayedPokemon).toBeInTheDocument();

    const nextButton = getByRole("button", { name: "Next" });
    expect(nextButton).not.toBeDisabled();

    userEvent.click(nextButton);

    await waitFor(() =>
      expect(fetchPokemonById).toHaveBeenCalledWith(2, expect.any(AbortSignal))
    );

    const nextPokemon = await findByText("Name: ivysaur");
    expect(nextPokemon).toBeInTheDocument();
  });
});
