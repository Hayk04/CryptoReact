import './PoolsListItem.scss';

import ethereum from '../../assets/img/ethereum.png';

function PoolsListItem(props) {

    return(
        <div className="pool__item">
            <div className="pool__item-num">{props.id}.</div>
            <div className="pool__item-info">
                <img src={ethereum} alt="" />
                <p>{props.name}</p>
            </div>
            <div className="pool__item-price">{props.price}</div>
            <div className="pool__item-txns">{props.txns}</div>
            <div className="pool__item-5m">{props["5m"]}</div>
            <div className="pool__item-1h">{props["1h"]}</div>
            <div className="pool__item-6h">{props["6h"]}</div>
            <div className="pool__item-24h">{props["24h"]}</div>
            <div className="pool__item-volume">{props.volume}</div>
            <div className="pool__item-liquidity">{props.liquidity}</div>
        </div>
    )
}

export default PoolsListItem;