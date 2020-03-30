import React, { useState, useEffect } from 'react';
import Search from './components/search';
import List from './components/list';
import { Country, Option } from './types';

import { connect } from 'react-redux';
import { getAllCountriesRequest } from './store/actions/data';

interface Props {
  countries: Country[],
  result_countries: Country[],
  getAllCountriesRequest: () => {};
}

const Countries = (props: Props) => {
  const [options, setOptions] = useState<Option[]>([]);
  useEffect(() => {
    props.getAllCountriesRequest();
  }, []);

  useEffect(() => {
    const newOptions: Option[] = props.countries.map(country => ({ value: country.name, label: country.name, code: country.alpha3Code}))
    setOptions(newOptions)
  }, [props.countries]);

  return (
    <div className="main">
      <Search options={options} />
      <List list={props.result_countries} />
    </div>
  )
};

const mapStateToProps = (state: any) => ({
  countries: state.data.countries,
  result_countries: state.data.result_countries,
})
export default connect(mapStateToProps, { getAllCountriesRequest })(Countries)
