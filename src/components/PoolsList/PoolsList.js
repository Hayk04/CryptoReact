import PoolsListItem from '../PoolsListItem/PoolsListItem';

import './PoolsList.scss';

function PoolsList() {

    let num = 1;

    const poolsData = [
        {name: 'ETH/WBNB', slug: 'ethereum', price: "$0.9981", txns: "61,287", "5m": "+0.02%", "1h": "-0.44%", "6h": "-0.42%", "24h": "-0.45%", volume: "$18M", liquidity: "$137.6M", id: num++},
        {name: 'ETH/WBNB', slug: 'ethereum', price: "$0.9981", txns: "61,287", "5m": "+0.02%", "1h": "-0.44%", "6h": "-0.42%", "24h": "-0.45%", volume: "$18M", liquidity: "$137.6M", id: num++},
        {name: 'ETH/WBNB', slug: 'ethereum', price: "$0.9981", txns: "61,287", "5m": "+0.02%", "1h": "-0.44%", "6h": "-0.42%", "24h": "-0.45%", volume: "$18M", liquidity: "$137.6M", id: num++},
        {name: 'ETH/WBNB', slug: 'ethereum', price: "$0.9981", txns: "61,287", "5m": "+0.02%", "1h": "-0.44%", "6h": "-0.42%", "24h": "-0.45%", volume: "$18M", liquidity: "$137.6M", id: num++},
        {name: 'ETH/WBNB', slug: 'ethereum', price: "$0.9981", txns: "61,287", "5m": "+0.02%", "1h": "-0.44%", "6h": "-0.42%", "24h": "-0.45%", volume: "$18M", liquidity: "$137.6M", id: num++},
        {name: 'ETH/WBNB', slug: 'ethereum', price: "$0.9981", txns: "61,287", "5m": "+0.02%", "1h": "-0.44%", "6h": "-0.42%", "24h": "-0.45%", volume: "$18M", liquidity: "$137.6M", id: num++},
        {name: 'ETH/WBNB', slug: 'ethereum', price: "$0.9981", txns: "61,287", "5m": "+0.02%", "1h": "-0.44%", "6h": "-0.42%", "24h": "-0.45%", volume: "$18M", liquidity: "$137.6M", id: num++},
        {name: 'ETH/WBNB', slug: 'ethereum', price: "$0.9981", txns: "61,287", "5m": "+0.02%", "1h": "-0.44%", "6h": "-0.42%", "24h": "-0.45%", volume: "$18M", liquidity: "$137.6M", id: num++},
        {name: 'ETH/WBNB', slug: 'ethereum', price: "$0.9981", txns: "61,287", "5m": "+0.02%", "1h": "-0.44%", "6h": "-0.42%", "24h": "-0.45%", volume: "$18M", liquidity: "$137.6M", id: num++},
        {name: 'ETH/WBNB', slug: 'ethereum', price: "$0.9981", txns: "61,287", "5m": "+0.02%", "1h": "-0.44%", "6h": "-0.42%", "24h": "-0.45%", volume: "$18M", liquidity: "$137.6M", id: num++},
    ];

    const elements = poolsData.map(item => {
        return <PoolsListItem {...item} />
    })


    return(
        <div className="pools__table">
            <h2>BNB Chain Pools (Etherium pools, Polygon pools)</h2>
            <div className="pools__list">
                <div className="pools__list-titles">
                    <div className="pools__list-pool">Pool</div>
                    <div className="pools__list-price">Price</div>
                    <div className="pools__list-txns">24h TXNS</div>
                    <div className="pools__list-5m">5m</div>
                    <div className="pools__list-1h">1h</div>
                    <div className="pools__list-6h">6h</div>
                    <div className="pools__list-24h">24h</div>
                    <div className="pools__list-volume">24h volume</div>
                    <div className="pools__list-liquidity">Liquidity</div>
                </div>
                {elements}
            </div>
        </div>
    )
}

export default PoolsList;