import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search voice actors..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;