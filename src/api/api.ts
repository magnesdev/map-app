import { v4 as uuidv4 } from 'uuid';
import { LocationApiData, LocationSearchData } from '../types/types';

const key = process.env.REACT_APP_IPSTACK_API_KEY;
const url = process.env.REACT_APP_IPSTACK_URL;

export const apiCall = async (
  value: string | null,
  callback: (location: LocationSearchData) => void
) => {
  try {
    const respone = await fetch(`${url}${value || 'check'}?access_key=${key}`);

    const data: LocationApiData = await respone.json();
    const location: LocationSearchData = {
      searchInput: value || data.ip,
      id: uuidv4(),
      ...data,
    };
    callback(location);
  } catch (error) {
    console.log('error', error);
  }
};
