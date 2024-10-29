import React, { useState } from 'react';

const mockData = [
    'Argentina',
    'Brazil',
    'Canada',
    'Denmark',
    'Egypt',
    'France',
    'Indonesia',
    'Germany',
    'Hungary',
    'India',
    'Japan',
    'Kenya',
    'Luxembourg',
    'Mexico',
    'Netherlands',
    'Oman',
    'Portugal',
    'Qatar',
    'Russia',
    'Sweden',
    'Turkey',
    'United Kingdom',
    'Vietnam'
];

const DebouncePage: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<string[]>(mockData);
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

  const [requestCountWithoutDebounce, setRequestCountWithoutDebounce] = useState(0);
  const [requestCountWithDebounce, setRequestCountWithDebounce] = useState(0);
  

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    
    // Increment request count without debounce
    setRequestCountWithoutDebounce((prevCount) => prevCount + 1);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout); // Clear the previous timeout
    }
    
    const timeoutId = setTimeout(() => {
      setFilteredItems(
        mockData.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
      );
      // Increment request count with debounce
      setRequestCountWithDebounce((prevCount) => prevCount + 1);
    }, 500); // debounce to 0.5 seconds

    setDebounceTimeout(timeoutId);
  };

  return (
    <div>
      <h2>Debounce Demo</h2>

      <div style={{ marginTop: '20px', marginBottom: '40px' }}>
        <h3>Request Count:</h3>
        <p>Without Debounce: {requestCountWithoutDebounce}</p>
        <p>With Debounce: {requestCountWithDebounce}</p>
      </div>

      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search items..."
        style={{ padding: '8px', width: '300px' }}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    
    </div>
  );
}

export default DebouncePage;
