
import './Sidebar.scss';

import analyzer from '../../assets/img/sidebar/analyzer.svg';
import barChart from '../../assets/img/sidebar/bar-chart.svg';
import home from '../../assets/img/sidebar/home.svg';
import homeActive from '../../assets/img/sidebar/home-active.svg';
import imageIndentLeft from '../../assets/img/sidebar/image-indent-left.svg';
import pieChart from '../../assets/img/sidebar/pie-chart.svg';
import presentation from '../../assets/img/sidebar/presentation.svg';
import refresh from '../../assets/img/sidebar/refresh.svg';
import search from '../../assets/img/sidebar/search.svg';


function Sidebar({page}) {
    return(
        <div className="sidebar">
            <ul className="sidebar__list">
                <li className={`sidebar__list-item ${page === 'home' ? 'active' : ''}`}>
                    <a href="#">
                        <img src={`${page === 'home' ? homeActive : home}`} alt="" />
                        <span>Home</span>
                    </a>
                </li>
                <li className="sidebar__list-item">
                    <a href="#">
                        <img src={analyzer} alt="" />
                        <span>Dex analizer</span>
                    </a>
                </li>
                <li className="sidebar__list-item">
                    <a href="#">
                        <img src={refresh} alt="" />
                        <span>Swap</span>
                    </a>
                </li>
                <li className="sidebar__list-item">
                    <a href="#">
                        <img src={presentation} alt="" />
                        <span>Social Analizer</span>
                    </a>
                </li>
                <li className="sidebar__list-item">
                    <a href="#">
                        <img src={pieChart} alt="" />
                        <span>Presale Analizer</span>
                    </a>
                </li>
                <li className="sidebar__list-item">
                    <a href="#">
                        <img src={barChart} alt="" />
                        <span>Ai Top Ranking</span>
                    </a>
                </li>
                <li className="sidebar__list-item">
                    <a href="#">
                        <img src={search} alt="" />
                        <span>Explore</span>
                    </a>
                </li>
                <li className="sidebar__list-item">
                    <a href="#">
                        <img src={imageIndentLeft} alt="" />
                        <span>Media</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;