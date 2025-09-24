import { useState, useEffect } from "react"
import ProductList from "../components/ProductList.jsx"
import ProductDetail from "../components/ProductDetail.jsx"
import SearchBar from "../components/SearchBar.jsx"
import FilterBar from "../components/FilterBar.jsx"
import "../App.css"

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

  let filteredProducts = displayProducts.filter(
    p => category === "all" || p.category === category
  )

  if (sortBy === "priceLowHigh") filteredProducts.sort((a, b) => a.price - b.price)
  else if (sortBy === "priceHighLow") filteredProducts.sort((a, b) => b.price - a.price)

  return (
    <div className="main-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1>My Market</h1>
        {!selectedProduct && (
          <>
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              onSearch={handleSearch}
            />
            <FilterBar
              categories={categories}
              category={category}
              setCategory={setCategory}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </>
        )}
        {prevProducts && (
          <button onClick={handleBack} className="back-btn">
            Back to All Products
          </button>
        )}
      </aside>

      {/* Product Section */}
      <section className="product-section">
        {selectedProduct ? (
          <div>
            <button onClick={() => setSelectedProduct(null)} className="back-btn">
              Back
            </button>
            <ProductDetail product={selectedProduct} />
          </div>
        ) : (
          <ProductList products={filteredProducts} onProductClick={setSelectedProduct} />
        )}
      </section>
    </div>
  )
}
