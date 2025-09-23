export default function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  )
}
