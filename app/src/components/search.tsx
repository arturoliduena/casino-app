import React, { useState } from 'react';
import Select from 'react-select';
import './components.css';
import { Option } from '../types';
import { connect } from 'react-redux';
import { getCountriesRequest } from '../store/actions/data';

interface Props {
  options: Option[],
  getCountriesRequest: (options: Option[]) => {};
}

const Search = (props: Props) => {
  const [selected, setSelected] = useState<Option[] | null >(null);

  const handleChange = (values: Option[] | null) => {
    setSelected(values);
  }

  const searchCountries = () => {
    if(selected){
      props.getCountriesRequest(selected)
    }
  }
  return (
    <div className="search-container">
      <div className="select-container">
        <Select
          isMulti
          name="countries"
          options={props.options}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={(e: any) => handleChange(e)}
        />
      </div>
      <button className="button-search" onClick={searchCountries}> Search </button>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  countries: state.data.countries,
})
export default connect(mapStateToProps, { getCountriesRequest })(Search)