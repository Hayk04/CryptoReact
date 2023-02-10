import { useState } from 'react';

import Sidebar from '../Sidebar/Sidebar';

import './Header.scss';

import connectWallet from '../../assets/img/connect_wallet.svg';
import search from '../../assets/img/header_search.svg';
import bnb from '../../assets/img/bnb.png';
import ethereum from '../../assets/img/ethereum.png';
import polygon from '../../assets/img/polygon.png';
import menu from '../../assets/img/menu.svg';
import closeMenuImg from '../../assets/img/close.svg';



function Header({page}) {

    const [cryptoList, setCryptoList] = useState(false);

    const [activeCrypto, setActiveCrypto] = useState({name: 'BNB Chain', img: bnb});

    let num = 1;

    let cryptoButtonsData = [
        {name: 'Ethereum', img: ethereum},
        {name: 'BNB Chain', img: bnb},
        {name: 'Polygon', img: polygon}
    ];

    let changeCrypto = (e) => {
        cryptoButtonsData.forEach(active => {
            if(active.name === e.target.textContent){
                setCryptoList(false);
                return (
                    setActiveCrypto({name: active.name, img: active.img})
                )
            };
        })
    } 


    let cryptoButtons = cryptoButtonsData.map(item => {
        return (
            <button data={item.name} key={num++} onClick={(e) => changeCrypto(e)}>
                <img src={item.img} alt="" />
                {item.name}
            </button>
        )
    })

    
    let [menuActive, setMenuActive] = useState(false);

    window.menu = menuActive;
    

    return(
        <div className="header">
            <div className="header__coins" id="headerCoins">
                <button className={`header__coins-active ${cryptoList ? 'active' : ''}`} onClick={() => {
                    setCryptoList(!cryptoList)
                }}>
                    <img src={activeCrypto.img} alt="" />
                    {activeCrypto.name}
                </button>
                <div className={`header__coins-list ${cryptoList ? 'active' : ''}`}>
                    {cryptoButtons}
                </div>
            </div>
            <p className="header__balance desk">BNB: $311.45</p>
            <div className="header__search">
                <img src={search} alt="" />
                <input type="text" placeholder='Search network, dex or tokens' />
            </div>
            <button className='header__search-btn'>
                <img src={search} alt="" />
            </button>
            <button className="header__button desk">
                <img src={connectWallet} alt="" />
                Connect Wallet
            </button>
            <button className="menu" onClick={() => setMenuActive(!menuActive)}>
                <img src={menuActive ? closeMenuImg : menu} alt="" />
            </button>
            <Sidebar page={page} open={menuActive}/>
        </div>
    )
}

export default Header;