const Pagination = ({
  count,
  pages,
  currentPage,
  handlePageChange,
}: PaginationPropTypes): JSX.Element => {
  const firstPage = () => {
    if (currentPage > 1) {
      handlePageChange(1);
    }
  };

  const LastPage = () => {
    if (currentPage < pages) {
      handlePageChange(pages);
    }
  };
  const nextPage = () => {
    if (currentPage < pages) {
      currentPage++;
      handlePageChange(currentPage);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      currentPage--;
      handlePageChange(currentPage);
    }
  };

  return (
    <nav aria-label="Page navigation" className="py-5">
      <ul className="flex justify-center -space-x-px h-10 text-sm">
        <li>
          <button
            onClick={firstPage}
            className="flex items-center justify-center px-3 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span>First</span>
          </button>
        </li>
        <li>
          <button
            onClick={previousPage}
            className="flex items-center justify-center px-3 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300   hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span>Previous</span>
          </button>
        </li>

        <li>
          <button
            onClick={nextPage}
            className="flex items-center justify-center px-3 h-10 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span>Next</span>
          </button>
        </li>
        <li>
          <button
            onClick={LastPage}
            className="flex items-center justify-center px-3 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span>Last</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

type PaginationPropTypes = {
  count: number;
  currentPage: number;
  pages: number;
  handlePageChange: (page: number) => void;
};

export default Pagination;
