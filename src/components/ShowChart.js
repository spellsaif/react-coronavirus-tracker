import React from 'react';
import { Bar } from 'react-chartjs-2'

import NumberFormat from 'react-number-format';


const ShowChart = ({ chartData }) => {


    const { TotalConfirmed, TotalRecovered, TotalDeaths, Country } = chartData;
    const data={
        labels: [
            'Total Cases',
            'Total Recovered',
            'Total Deaths'
        ],

        datasets: [
            {
                label: 'Coronavirus Statistics',
                data:[TotalConfirmed,TotalRecovered,TotalDeaths],
                borderColor: ['rgba(256,206,86,1'],
                backgroundColor: ['rgb(247, 109, 59)','rgba(6, 169, 20,1)','rgba(199, 61, 61,1)'],

            }
        ]
    }

    const options = {
        title: {
            display:true,
            text: Country
        }
    }
    return ( 
        <div>
            <Bar data={data} options={options} /> 
            <div className="showresults">
                <div className="orange">
                    <div className="squarebox o"></div>
                    <h3>Cases: <NumberFormat value={TotalConfirmed} displayType={'text'} thousandSeparator={true} /></h3>
                </div>

                <div className="green">
                    <div className="squarebox g"></div>
                    <h3>Recovered: <NumberFormat value={TotalRecovered} displayType={'text'} thousandSeparator={true} /></h3>
                </div>

                <div className="red">
                    <div className="squarebox r"></div>
                    <h3>Deaths: <NumberFormat value={TotalDeaths} displayType={'text'} thousandSeparator={true} /></h3>
                </div>

            </div>


        </div>   
    
    
    
    );
}
 
export default ShowChart;