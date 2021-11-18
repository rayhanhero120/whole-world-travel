import React from 'react';
import Banner from './Banner/Banner';
import OurAgencies from './OurAgencis/OurAgencies';
import Review from './Review/Review';
import TourManages from './TourManages/TourManages';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <TourManages></TourManages>
            <OurAgencies></OurAgencies>
            <Review></Review>

        </div>
    );
};

export default Home;