function Search({ query, setQuery }) {
  return (
    <div className="flex items-center justify-center gap-2 border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <label className="tracking-widest text-md">Pokemon Database</label>
      <input
        className=" w-29 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all
        duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        type="text"
        placeholder="Search pokemon..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </div>
  );
}

export default Search;
