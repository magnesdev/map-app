import { useEffect, useState } from 'react';
import { apiCall } from '../../api/api';
import { LocationSearchData } from '../../types/types';

export const useLocationData = () => {
  const [locations, setLocations] = useState<LocationSearchData[]>([]);
  const [userLocation, setUserLocation] = useState<LocationSearchData>();

  const getLocation = (value: string) => {
    apiCall(value, (data) =>
      setLocations((prevLocations) => [data, ...prevLocations])
    );
  };

  useEffect(() => {
    if (!locations.length) return;
    sessionStorage.setItem(`locations`, JSON.stringify(locations));
  }, [locations]);

  useEffect(() => {
    apiCall(null, (data) => setUserLocation(data));

    const hitoryLocation = sessionStorage.getItem('locations');
    if (hitoryLocation) {
      setLocations(JSON.parse(hitoryLocation) as LocationSearchData[]);
    }
  }, []);

  return { locations, userLocation, getLocation };
};
