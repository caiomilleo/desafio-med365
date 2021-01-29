import React, { useEffect, useState } from 'react';
import { InputComponent } from '../InputComponent/InputComponent';
import useDebounce from '../../hooks/useDebounce';
import { searchGifs } from '../../services/api';

export function SearchComponent({ setGifs }) {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearch = useDebounce(searchValue, 1000);

  useEffect(() => {
    search(debouncedSearch, 10);
  }, [debouncedSearch]);

  const search = async (searchText) => {
    try {
      const { data } = await searchGifs(searchText, 20);
      setGifs(data);
    } catch (error) {}
  };

  return (
    <InputComponent value={searchValue} type='text' setValue={setSearchValue} />
  );
}
