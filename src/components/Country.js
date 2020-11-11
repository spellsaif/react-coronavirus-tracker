import React from 'react';
import NumberFormat from 'react-number-format';

const Country = ({ country, handleData }) => {
    return ( 
        <div className="country" onClick= { ()=>handleData(country) } >
            <h4 className="flags"><img src={`https://www.countryflags.io/${country.CountryCode}/flat/24.png`} alt={country.CountryCode}/> {`${country.Country}`}</h4>
            <h4><NumberFormat value={country.TotalConfirmed} displayType={'text'} thousandSeparator={true} /></h4>
        </div>
     );
}
 
export default Country;