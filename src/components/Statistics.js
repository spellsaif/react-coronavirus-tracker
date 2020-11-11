import React, { useState } from 'react';
import Country from './Country';
import ShowChart from './ShowChart';
import NumberFormat from 'react-number-format';

const Statistics = ({ countries, global }) => {
    const country=[...countries.sort((a,b)=>b.TotalConfirmed-a.TotalConfirmed)];
    const [chartData, setChartData] = useState(country[0]);
    const handleData= (country) => {
        setChartData(country);
    }
    const data = country.map(c => {
        return(
            <Country key={ c.CountryCode } country= { c }  handleData= { handleData } />
        )
    })


    return ( 
        <div className="statistics">
            <div className="showcase">
                <div className="showcase-global">
                    <div className="global-data">
                        <h4>Global</h4>
                        <h4><NumberFormat value={global.TotalConfirmed} displayType={'text'} thousandSeparator={true} /></h4>
                    </div>
                </div>
                { data }
            </div>
            <div className="chart">
                <ShowChart  chartData = { chartData } />
            </div>
        </div>
     );
}
 
export default Statistics;