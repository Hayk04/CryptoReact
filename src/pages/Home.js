import { useState } from 'react';


import Header from '../components/Header/Header';
import FavoritesList from '../components/FavoritesList/FavoritesList';
import SlidersListItem from '../components/SlidersListItem/SlidersListItem';
import PoolsList from '../components/PoolsList/PoolsList';
import Sidebar from '../components/Sidebar/Sidebar';
import Pagination from '../components/Pagination/Pagination';
import Footer from '../components/Footer/Footer';

import tabStar from '../assets/img/tab-star.svg';
import tabStarActive from '../assets/img/tab-star-active.svg';
import tabEye from '../assets/img/tab-eye.svg';
import tabEyeActive from '../assets/img/tab-eye-active.svg';
import tabGain from '../assets/img/tab-gain.svg';
import tabGainActive from '../assets/img/tab-gain-active.svg';
import tabLose from '../assets/img/tab-lose.svg';
import tabLoseActive from '../assets/img/tab-lose-active.svg';
import tabPools from '../assets/img/tab-pools.svg';
import tabPoolsActive from '../assets/img/tab-pools-active.svg';



function Home() {

    let [activeTab, setActiveTab] = useState(1);

    return(
        <div className="App">
            {/* <Sidebar page="home"/> */}
            <div className="content">
                <Header page="home"/>
                <div className="tabs__container">
                    <div className="tabs__content">
                        <div className={`tabs__content-item ${activeTab === 1 ? 'active' : ''}`}>
                            <FavoritesList/>
                        </div>
                        <div className='sliders__list'>
                            <div className={`tabs__content-item ${activeTab === 2 ? 'active' : ''}`}>
                                <SlidersListItem title="Most Viewed Pools" high={true}/>
                            </div>
                            <div className={`tabs__content-item ${activeTab === 3 ? 'active' : ''}`}>
                                <SlidersListItem title="Top Gainers" high={true}/>
                            </div>
                            <div className={`tabs__content-item ${activeTab === 4 ? 'active' : ''}`}>
                                <SlidersListItem title="Top Losers" high={false}/>
                            </div>
                        </div>
                        <div className={`tabs__content-item ${activeTab === 5 ? 'active' : ''}`}>
                            <PoolsList/>
                        </div>
                    </div>
                    <Pagination/>
                    <div className="desk">
                        <Footer/>
                    </div>
                    <div className="tabs__buttons">
                        <button
                            className={`tabs__btn ${activeTab === 1 ? 'active' : ''}`}
                            onClick={() => setActiveTab(1)}>
                            <img src={activeTab === 1 ? tabStarActive : tabStar} alt="" />
                            Favourites
                        </button>
                        <button
                            className={`tabs__btn ${activeTab === 2 ? 'active' : ''}`}
                            onClick={() => setActiveTab(2)}>
                            <img src={activeTab === 2 ? tabEyeActive : tabEye} alt="" />
                            Viewed
                        </button>
                        <button
                            className={`tabs__btn ${activeTab === 3 ? 'active' : ''}`}
                            onClick={() => setActiveTab(3)}>
                            <img src={activeTab === 3 ? tabGainActive : tabGain} alt="" />
                            Gainers
                        </button>
                        <button
                            className={`tabs__btn ${activeTab === 4 ? 'active' : ''}`}
                            onClick={() => setActiveTab(4)}>
                            <img src={activeTab === 4 ? tabLoseActive : tabLose} alt="" />
                            Losers
                        </button>
                        <button
                            className={`tabs__btn ${activeTab === 5 ? 'active' : ''}`}
                            onClick={() => setActiveTab(5)}>
                            <img src={activeTab === 5 ? tabPoolsActive : tabPools} alt="" />
                            Losers
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;