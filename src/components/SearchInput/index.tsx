import './searchInput.scss';

interface SearchProps {
  error: string | null;
}

const SearchInput = ({ error }: SearchProps) => {
  return (
    <div className='input-container'>
      <input
        className='input-container__input'
        name='search'
        placeholder='Search by IP or URL'
      />
      {error && <span className='input-container__error'>{error}</span>}
    </div>
  );
};

export default SearchInput;
