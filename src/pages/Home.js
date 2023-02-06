
import Header from '../components/Header/Header';
import FavoritesList from '../components/FavoritesList/FavoritesList';
import SlidersList from '../components/SlidersList/SlidersList';
import PoolsList from '../components/PoolsList/PoolsList';
import Sidebar from '../components/Sidebar/Sidebar';


function Home() {
    return(
        <div className="App">
            <Sidebar page="home"/>
            <div className="content">
                <Header/>
                <FavoritesList/>
                <SlidersList/>
                <PoolsList/>
            </div>
        </div>
    )
}

export default Home;