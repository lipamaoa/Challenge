function Button({ onNavigate, isPrevDisabled }) {
  const style =
    "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 px-4 py-3 md:px-4 md:py-2";

  return (
    <div className="flex justify-center gap-5">
      <button
        id="previous-button"
        className={
          style +
          (isPrevDisabled ? " bg-gray-400 disabled:pointer-events-none" : "")
        }
        onClick={() => onNavigate("prev")}
        disabled={isPrevDisabled}
      >
        Previous
      </button>
      <button
        id="next-button"
        className={style}
        onClick={() => onNavigate("next")}
      >
        Next
      </button>
    </div>
  );
}

export default Button;
