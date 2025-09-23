export default function FilterBar({ categories, category, setCategory, sortBy, setSortBy }) {
  return (
    <div style={{ marginTop: "10px" }}>
      <select value={category} onChange={e => setCategory(e.target.value)} style={{ marginRight: "10px" }}>
        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
      </select>

      <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
        <option value="none">Sort By</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="priceHighLow">Price: High to Low</option>
      </select>
    </div>
  )
}
