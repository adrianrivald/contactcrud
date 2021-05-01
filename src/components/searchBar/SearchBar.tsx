import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import './SearchBar.scss';

interface SearchBarProps {
    value: string;
    placeHolder: string;
    onChange: (e: any) => void;
}

const SearchBar: FC<SearchBarProps> = (props) => {
  const { value, placeHolder, onChange } = props;

  return (
    <div className='search-container-product'>
    <FontAwesomeIcon icon={faSearch} style={{width: '30px', opacity: '0.5'}}/>
      <input
        type='text'
        name='search_query'
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default SearchBar;
