import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import More from '../More/More';
import Services from '../Services/Services';
import TotalService from '../TotalService/TotalService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <More></More>
            <Services></Services>
        </div>
    );
};

export default Home;