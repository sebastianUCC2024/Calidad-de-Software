import { useState } from 'react';

const NAMES = ['Ana', 'Luis', 'Carlos', 'María', 'Lucía', 'Pedro', 'Sofía', 'Miguel'];

export default function SearchList() {
  const [query, setQuery] = useState('');
  const filtered = NAMES.filter(name => name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar nombre..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        data-testid="search-input"
      />
      <ul data-testid="search-list">
        {filtered.length === 0 ? (
          <li>No encontrado</li>
        ) : (
          filtered.map(name => <li key={name}>{name}</li>)
        )}
      </ul>
    </div>
  );
}
