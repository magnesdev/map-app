import './searchHistory.scss';

interface SeSearchHistoryListProps {
  historyList: { name: string; id: string }[];
}

const SearchHistoryList = ({ historyList }: SeSearchHistoryListProps) => {
  return (
    <ul className='search-history-list'>
      {historyList.map(({ name, id }) => (
        <li className='search-history-list__item' key={id}>
          {name}
        </li>
      ))}
    </ul>
  );
};

export default SearchHistoryList;
