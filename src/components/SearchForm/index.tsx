import { useState } from 'react';
import { urlRegex } from '../../constant/regex';
import SearchInput from '../SearchInput';
import './searchForm.scss';

interface SearchFormProps {
  sendData: (value: string) => void;
}

const SearchForm = ({ sendData }: SearchFormProps) => {
  const [error, setError] = useState<string | null>(null);

  const validURL = (value: string) => {
    const pattern = new RegExp(urlRegex, 'i');
    return !!pattern.test(value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!validURL((e.currentTarget[0] as HTMLInputElement).value)) {
          setError('Not valid URL');
          return;
        }
        sendData((e.currentTarget[0] as HTMLInputElement).value);
      }}
      className='search-form'
    >
      <SearchInput error={error} />
      <button className='search-form__button'>Search</button>
    </form>
  );
};

export default SearchForm;
