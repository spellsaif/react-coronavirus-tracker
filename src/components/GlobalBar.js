import React from 'react';
import NumberFormat from 'react-number-format';
 
const GlobalBar = ({ global }) => {
    const data = [
        {img: 'imgs/totalcases.svg', value: global.TotalConfirmed, title:'Total Coronavirus Cases'},
        {img: 'imgs/totalrecover.svg', value: global.TotalRecovered, title:'Total Recovered'},
        {img: 'imgs/totaldeath.svg', value: global.TotalDeaths, title:'Total Deaths'},

    ];

    const stats=data.map(d=> {
        return(
            <div className="box" key={ d.title }>
                <img src={ d.img } alt={ d.title }/>
                <div className="box-contents">
                    <p>{ d.title }</p>
                    <h1><NumberFormat value={ d.value } displayType={'text'} thousandSeparator={true} /></h1>
                </div>
            </div>
        )
    })
    return ( 
        <div className="global">
            <div className="box">
                <img src="imgs/globe.svg" alt="globe" />
                <div className="box-contents">
                    <p>Stats Overview</p>
                    <h1>Global</h1>
                </div>
            </div>

            { stats }
        </div>
     );
}
 
export default GlobalBar;