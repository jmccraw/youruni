import React from 'react';

import useFetchUniList from '../../apis/useFetchUniList';

import { UNI_CSV_URL } from './constants';

const Search = () => {
  const { hasError, isLoading, uniList } = useFetchUniList({ uniUrl: UNI_CSV_URL });

  return (
    <div>
      {hasError && <p>ERROR</p>}
      {isLoading && <p>IS LOADING</p>}
      {uniList && uniList.map(val => <div key={val.id}>{val.name}</div>)}
    </div>
  );
};

export default Search;