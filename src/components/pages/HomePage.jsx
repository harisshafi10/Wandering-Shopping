import { useState } from "react";
import products from "../../data/productData";
import ProductCard from "../Productcard";
import SearchFilter from "../SearchFilter";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const categories = [...new Set(products.map((product) => product.category))];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (category === "" || product.category === category)
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Shop Now</h1>
      </div>

      <SearchFilter
        categories={categories}
        setCategory={setCategory}
        setSearchQuery={setSearchQuery}
      />

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
    {paginatedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
    ))}
    </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 space-x-2">
  <button
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    className="px-6 py-3 text-sm md:text-base bg-gray-300 dark:bg-gray-700 rounded-lg disabled:opacity-50"
  >
    ⬅ Prev
  </button>
  <span className="px-4 py-3 text-sm md:text-base">{currentPage} / {totalPages}</span>
  <button
    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
    disabled={currentPage === totalPages}
    className="px-6 py-3 text-sm md:text-base bg-gray-300 dark:bg-gray-700 rounded-lg disabled:opacity-50"
  >
    Next ➡
  </button>
</div>
    </div>
  );
};

export default HomePage;
