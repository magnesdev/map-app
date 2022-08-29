import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';
import { LocationSearchData } from '../../types/types';
import './map.scss';

interface MapLocationData
  extends Pick<LocationSearchData, 'longitude' | 'latitude'> {
  searchInput: string;
  id: string;
}

interface MapProps {
  mapShape: {
    geoUrl: string;
    fillColor: string;
    borderColor: string;
  };
  location: MapLocationData;
}

const Map = ({ location, mapShape }: MapProps) => {
  const { borderColor, fillColor, geoUrl } = mapShape;
  const { id, latitude, longitude, searchInput } = location || {};

  return (
    <ComposableMap className='map'>
      <ZoomableGroup center={[longitude, latitude]} zoom={5}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={fillColor}
                stroke={borderColor}
              />
            ))
          }
        </Geographies>
        {location && (
          <Marker key={id} coordinates={[longitude, latitude]}>
            <circle r={5} fill='#F00' stroke='#fff' strokeWidth={1} />
            <text
              textAnchor='middle'
              y={-8}
              style={{
                fontFamily: 'system-ui',
                fontSize: 10,
                fill: '#5D5A6D',
              }}
            >
              {searchInput}
            </text>
          </Marker>
        )}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default Map;
