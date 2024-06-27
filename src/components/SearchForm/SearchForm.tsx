const SearchForm = ({
  formData,
  handleSubmit,
  handleClear,
  handleChange,
}: SearchFormPropTypes): JSX.Element => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center max-w-lg mx-auto"
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search by name..."
          required
          minLength={3}
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center text-white py-4 px-3 ms-2 font-medium rounded-lg text-sm px-4 py-2 text-white dark:bg-yellow-500 dark:bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700"
      >
        Search
      </button>
      <button
        type="button"
        disabled={!formData.name}
        onClick={handleClear}
        className="inline-flex items-center text-white py-4 px-3 ms-2 font-medium rounded-lg text-sm px-4 py-2 text-white dark:bg-gray-400 dark:bg-gray-400 hover:bg-gray-600 active:bg-gray-700"
      >
        Clear
      </button>
    </form>
  );
};

type SearchFormPropTypes = {
  formData: any;
  handleSubmit: (e: { preventDefault: () => void }) => void;
  handleClear: () => void;
  handleChange: (e: { target: { name: any; value: any } }) => void;
};

export default SearchForm;
