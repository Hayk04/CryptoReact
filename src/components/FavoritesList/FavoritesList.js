
import FavoritesListItem from '../FavoritesListItem/FavoritesListItem';

import './FavoritesList.scss';


function FavoritesList() {

    const favoritesData = [
        {name: 'Bitcoin', price: '32,482.44', high: true, id: "1"},
        {name: 'Ethereum', price: '1,021.49', high: false, id: "2"},
        {name: 'BNB', price: '9,589.55', high: true, id: "3"},
        {name: 'Polygon', price: '1.20', high: true, id: "4"},
        {name: 'XRP', price: '9,589.55', high: false, id: "5"},
    ];


    const favoritesList = favoritesData.map(item => {
        return <FavoritesListItem name={item.name} price={item.price} high={item.high} key={item.id}/>
    });

    return(
        <>
            <h2 className='favorites__title'>My favorites</h2>
            <div className="favorites__list">
                {favoritesList}
            </div>
        </>
    )
}

export default FavoritesList;