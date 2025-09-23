import { useState, useEffect } from "react"
import ProductList from "../components/ProductList.jsx"
import ProductDetail from "../components/ProductDetail.jsx"
import SearchBar from "../components/SearchBar.jsx"
import FilterBar from "../components/FilterBar.jsx"

export default function Home() {
  const [products, setProducts] = useState([])
  const [displayProducts, setDisplayProducts] = useState([])
  const [prevProducts, setPrevProducts] = useState(null)

  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("all")
  const [sortBy, setSortBy] = useState("none")
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
        setDisplayProducts(data.products)
      })
  }, [])

  const categories = ["all", ...new Set(products.map(p => p.category))]

  const handleSearch = () => {
    setPrevProducts(displayProducts)
    const results = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setDisplayProducts(results)
  }

  const handleBack = () => {
    if (prevProducts) {
      setDisplayProducts(prevProducts)
      setPrevProducts(null)
      setSearchTerm("")
    }
  }

  // Filter by category
  let filteredProducts = displayProducts.filter(p => category === "all" || p.category === category)

  // Sort by price
  if (sortBy === "priceLowHigh") filteredProducts.sort((a, b) => a.price - b.price)
  else if (sortBy === "priceHighLow") filteredProducts.sort((a, b) => b.price - a.price)

  return (
    <div>
      <h1>{selectedProduct ? selectedProduct.title : "My Market"}</h1>


      {selectedProduct ? (
        <div>
          <button onClick={() => setSelectedProduct(null)} style={{ marginBottom: "20px" }}>Back</button>
          <ProductDetail product={selectedProduct} />
        </div>
      ) : (
        <>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch} />
          <FilterBar categories={categories} category={category} setCategory={setCategory} sortBy={sortBy} setSortBy={setSortBy} />

          {prevProducts && (
            <button onClick={handleBack} style={{ margin: "10px 0" }}>
              Back to All Products
            </button>
          )}

          <ProductList products={filteredProducts} onProductClick={setSelectedProduct} />
        </>
      )}
    </div>
  )
}
