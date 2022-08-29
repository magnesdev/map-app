import BoxContainer from './components/BoxContainer';
import Map from './components/Map';
import SearchDetails from './components/SearchDetails';
import SearchForm from './components/SearchForm';
import SearchHistoryList from './components/SearchHistoryList';
import { useLocationData } from './hooks/useLocationData';
import './App.scss';

const geoUrl = process.env.REACT_APP_SHAPE_GEO_URL as string;

const mapShape = {
  geoUrl,
  fillColor: '#EAEAEC',
  borderColor: '#D6D6DA',
};

function App() {
  const { locations, getLocation, userLocation } = useLocationData();

  const currentLocations = locations.map(({ searchInput, id }) => ({
    id,
    name: searchInput,
  }));

  return (
    <div className='App'>
      <BoxContainer width='20%' height='100%'>
        <SearchHistoryList historyList={currentLocations} />
      </BoxContainer>
      <BoxContainer width='80%' height='100%'>
        <BoxContainer border width='100%' height='400px'>
          <BoxContainer width='60%' height='100%'>
            {userLocation && (
              <Map location={userLocation} mapShape={mapShape} />
            )}
          </BoxContainer>
          <BoxContainer border width='40%' height='100%'>
            {userLocation && <SearchDetails data={userLocation} />}
          </BoxContainer>
        </BoxContainer>
        <BoxContainer width='100%' height='20%'>
          <SearchForm sendData={getLocation} />
        </BoxContainer>
        <BoxContainer border width='100%' height='400px'>
          <BoxContainer width='60%' height='100%'>
            <Map location={locations[0]} mapShape={mapShape} />
          </BoxContainer>
          <BoxContainer border width='40%' height='100%'>
            {locations[0] && <SearchDetails data={locations[0]} />}
          </BoxContainer>
        </BoxContainer>
      </BoxContainer>
    </div>
  );
}

export default App;
