export default function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  )
}
