import React, { useEffect, useState } from 'react';
import { InputComponent } from '../InputComponent/InputComponent';
import useDebounce from '../../hooks/useDebounce';
import { searchGifs } from '../../services/api';
import { Container } from './styles';

export function SearchComponent({ setGifs, searchValue, setSearchValue }) {
  const debouncedSearch = useDebounce(searchValue, 1000);

  useEffect(() => {
    search(debouncedSearch);
  }, [debouncedSearch]);

  const search = async (searchText) => {
    try {
      const { data, pagination } = await searchGifs(searchText, 20);
      setGifs({ data, pagination });
    } catch (error) {}
  };

  return (
    <Container>
      <InputComponent
        value={searchValue}
        type='text'
        setValue={setSearchValue}
      />
    </Container>
  );
}
