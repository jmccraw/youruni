import { useEffect, useState } from 'react';
import Card from '../card';

import useFetchUniList, { UniList } from '../../apis/useFetchUniList';
import { UNI_CSV_URL } from './constants';
import './index.css';

const Search = () => {
  const [search, setSearch] = useState<string>('');
  const [filteredList, setFilteredList] = useState<UniList[]>([]);
  const { hasError, isLoading, uniList } = useFetchUniList({ uniUrl: UNI_CSV_URL });

  useEffect(() => {
    const searchResults = uniList.filter(({
        city, id, name, state, url
      }: UniList) => {
        const query = `${city} ${id} ${name} ${state} ${url}`.toLowerCase();
        const terms = search.toLowerCase().trim();
        // This search was a little too loose
        // const terms = search.toLowerCase().trim().split(' ');
        // return terms.some(term => query.includes(term));
        return query.includes(terms);
      });
    setFilteredList(searchResults);
  }, [uniList, search]);

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  return (
    <section className="container search">
      <input
        className="search__input"
        onChange={handleOnChange}
        placeholder="Search…"
        type="text"
        value={search}
        aria-label="Search for the university you wish to find"
      />
      <div className="search__container">
        {hasError && <p>ERROR</p>}
        {isLoading && <p>Loading…</p>}
        {!isLoading && !hasError && (
          filteredList.map(({ city, id, name, state, url }: UniList) => (
            <Card key={id} city={city} id={id} name={name} state={state} url={url} />
          ))
        )}
      </div>
    </section>
  );
};

export default Search;