import { motion } from "framer-motion";
import '../index.css'

const ProductCard = ({ product }) => {
  return (
    <motion.div
  whileTap={{ scale: 0.95 }}
  whileHover={{ scale: 1.05 }}
  className="bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-700 rounded-xl overflow-hidden transition-all"
>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover rounded-t-xl"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold dark:text-white">{product.name}</h2>
        <p className="text-gray-600 dark:text-gray-400">{product.category}</p>
        <p className="text-lg font-bold mt-2 dark:text-white">{product.price}</p>
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg text-center transition-all hover:bg-blue-700 dark:hover:bg-blue-600"
        >
          Buy Now
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;
