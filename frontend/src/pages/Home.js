import { useState } from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import Pagination from "../components/Pagination";
import { searchVoiceActors } from "../services/api";

const Home = () => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);  

  const handleSearch = async (newQuery) => {
    setIsLoading(true);
    setQuery(newQuery);
    setPage(1);
    const actors = await searchVoiceActors(newQuery, 1);
    setResults(actors);
    setIsLoading(false);
  };

  const handlePageChange = async (newPage) => {
    setPage(newPage);
    const actors = await searchVoiceActors(query, newPage);
    setResults(actors);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={results} isLoading={isLoading} />
      <Pagination page={page} setPage={handlePageChange} />
    </div>
  );
};

export default Home;