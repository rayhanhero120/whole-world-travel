import React from 'react';
import Banner from './Banner/Banner';
import OurAgencies from './OurAgencis/OurAgencies';
import TourManages from './TourManages/TourManages';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <TourManages></TourManages>
            <OurAgencies></OurAgencies>

        </div>
    );
};

export default Home;