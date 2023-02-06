
import './FavoritesListItem.scss';

import Bitcoin from '../../assets/img/bitcoin.png';
import Ethereum from '../../assets/img/ethereum.png';
import BNB from '../../assets/img/bnb.png';
import Polygon from '../../assets/img/polygon.png';
import XRP from '../../assets/img/xrp.png';
import triPlus from '../../assets/img/tri_plus.svg';
import triMinus from '../../assets/img/tri_minus.svg';

function FavoritesListItem({name, price, high}) {

    let coinImg = null;

    switch(name){
        case 'Bitcoin':
            coinImg = Bitcoin;
            break;
        case 'Ethereum':
            coinImg = Ethereum;
            break;
        case 'BNB':
            coinImg = BNB;    
            break;
        case 'Polygon':
            coinImg = Polygon;
            break;
        case 'XRP':
            coinImg = XRP;     
            break;   
    }

    return(
        <div className={`favorites__list-item ${high ? 'plus' : 'minus'}`}>
            <div className="favorites__list-item_top">
                <img src={coinImg} alt="" />
                <p>{name} (24h)</p>
                <div className="favorites__list-item_per">
                    <img src={high ? triPlus : triMinus} alt="" />
                    <p>{high ? '+' : '-'}2,3%</p>
                </div>
            </div>
            <p className='favorites__list-item_price'>
                <span>$</span>{price}
            </p>
        </div>
    )
}

export default FavoritesListItem;