import axios from 'axios';
import { Option } from './types';

export const getAllCountries = () => {
  return axios.get('http://localhost:8080/countries/all');
};

export const getCountries = (countries: Option[]) => {
  const codes = countries.reduce((codes, country) => `${codes}${country.code};`, '')
  return axios.get('http://localhost:8080/countries/codes', { params: { codes } })
}

export const getSpin = () => {
  return axios.get('http://localhost:8080/slotMachine/spin');
};