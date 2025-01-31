
const SearchResults = ({ results, isLoading }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!results || results.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <div className="results-container">
      <table className="results-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Picture</th>
            <th>Summary</th>
            <th>Sample Music</th>
          </tr>
        </thead>
        <tbody>
          {results.map((actor) => (
            <tr key={actor.id}>
              <td>
                <a
                  href={`https://voice123.com/${actor?.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {actor?.name}
                </a>
              </td>
              <td>
                <img src={actor?.picture} alt={actor?.name} className="actor-img" />
              </td>
              <td>{actor?.summary}</td>
              <td>
                <audio controls>
                  <source src={actor?.sampleMusic} type="audio/mpeg" />
                </audio>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
