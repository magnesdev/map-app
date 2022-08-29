import { LocationSearchData } from '../../types/types';
import './searchDetails.scss';

interface SearchDetailsProps {
  data: LocationSearchData;
}

const SearchDetails = ({ data }: SearchDetailsProps) => {
  const { searchInput, ip, latitude, longitude, city, zip } = data;
  return (
    <ul className='search-details-list'>
      <li className='search-details-list__item'>Name: {searchInput}</li>
      <li className='search-details-list__item'>IP: {ip}</li>
      <li className='search-details-list__item'>Longitude: {longitude}</li>
      <li className='search-details-list__item'>Latitude: {latitude}</li>
      <li className='search-details-list__item'>City: {city}</li>
      <li className='search-details-list__item'>Zip code: {zip}</li>
    </ul>
  );
};

export default SearchDetails;
