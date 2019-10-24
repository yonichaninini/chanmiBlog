import React from 'react';
import HeaderMenu from '../component/HeaderMenu';
import Mainbanner from '../component/Mainbanner';
import IntroduceCardWrapper from '../component/IntroduceCardWrapper';

const Home = () => {
    return (
        <div>
            <HeaderMenu/>
            <Mainbanner/>
            <IntroduceCardWrapper/>
        </div>
    );
};

export default Home;