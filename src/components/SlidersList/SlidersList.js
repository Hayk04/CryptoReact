
import SlidersListItem from '../SlidersListItem/SlidersListItem';

import './SlidersList.scss';


function SlidersList() {
    return(
        <div className='sliders__list'>
            <SlidersListItem title="Most Viewed Pools" high={true}/>
            <SlidersListItem title="Top Gainers" high={true}/>
            <SlidersListItem title="Top Losers" high={false}/>
        </div>
    )
}

export default SlidersList;