export default function FilterBar({ categories, category, setCategory, sortBy, setSortBy }) {
  return (
    <div className="filter-bar">
      <select value={category} onChange={e => setCategory(e.target.value)}>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
        <option value="none">Sort By</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="priceHighLow">Price: High to Low</option>
      </select>
    </div>
  )
}
