import React from 'react';
import HeaderMenu from '../component/HeaderMenu';
import Mainbanner from '../component/Mainbanner';
import IntroduceCardWrapper from '../component/IntroduceCardWrapper';
import Footer from '../component/Footer';

const Home = () => {
    return (
        <div>
            <HeaderMenu/>
            <Mainbanner/>
            <IntroduceCardWrapper/>
            <Footer/>
        </div>
    );
};

export default Home;