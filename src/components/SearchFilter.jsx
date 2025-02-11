import '../index.css'

const SearchFilter = ({ categories, setCategory, setSearchQuery }) => {
    return (
      <div className="sticky top-0 bg-white dark:bg-gray-900 p-3 z-10 shadow-md">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <input
            type="text"
            placeholder="Search products..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
    );
  };
  
  export default SearchFilter;
  