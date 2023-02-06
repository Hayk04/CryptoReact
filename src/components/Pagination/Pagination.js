import './Pagination.scss';

import pagPrev from '../../assets/img/pag-prev.svg';
import pagNext from '../../assets/img/pag-next.svg';

function Pagination() {
    return(
        <div className="pagination">
            <button className="prev">
                <img src={pagPrev} alt="" />
                Назад
            </button>
            <button className="number active">1</button>
            <button className="number">2</button>
            <button className="number">3</button>
            <button className="number">4</button>
            <button className="number">...</button>
            <button className="number">414</button>
            <button className="next">
                Вперед
                <img src={pagNext} alt="" />
            </button>
        </div>
    )
}

export default Pagination;