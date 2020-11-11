import React from 'react';
import { useQuery } from 'react-query';
import Loading from './components/Loading';

/* Components*/
import Navbar from './components/Navbar';
import GlobalBar from './components/GlobalBar';
import HeroSection from './components/HeroSection';
import Statistics from './components/Statistics';
// import Causes from './components/Causes';
// import Symptoms from './components/Symptoms';
// import Precautions from './components/Precautions';
import Footer from './components/Footer';
import Error from './components/Error'

const fetchCovidData =  async () => {
  const res= await fetch('https://api.covid19api.com/summary');
  return res.json();
}

function App() {

  const { data, status } = useQuery('covidData', fetchCovidData);

  return (
    <div className="App">
        {status==="loading" && <Loading />}
        {status==="error" && <Error />}
        {status==="success" && (
            <div className="main">
                <Navbar />
                <HeroSection />
                  <div className="content">
                    <GlobalBar global= { data.Global } />
                    <Statistics countries = {data.Countries} global= { data.Global } />
                  </div>
                <Footer />
            </div>

        )}
    </div>
  );
}

export default App;
