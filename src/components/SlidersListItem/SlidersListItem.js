import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Pagination, Navigation } from "swiper";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './SliderListItem.scss';

import ethereum from '../../assets/img/ethereum.png';


function SlidersListItem({title, high}) {
    const pagination = {
        clickable: true
    }

    return(
        <div className="sliders__list-item">
            <h3>{title}</h3>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                pagination={pagination}
                navigation={true}
                loop={true}
                modules={[Pagination, Navigation]}
                breakpoints={{
                    768: {
                        allowTouchMove: true
                    },
                    320: {
                        allowTouchMove: false
                    }
                }}
                >
                <SwiperSlide className='SwiperSlide'>
                    <ul className="slider__list">
                        <li className="slider__list-item">
                            <p className="slider__list-num">1.</p>
                            <div className="slider__list-name sli">
                                <img src={ethereum} alt="" />
                                <p>
                                    KATA <span>/WBNB</span>
                                </p>
                            </div>
                            <p className="slider__list-price">$1.83M</p>
                            <p className={`slider__list-percent ${high ? 'plus' : 'minus'}`}>+9.48%</p>
                        </li>
                        <li className="slider__list-item">
                            <p className="slider__list-num">2.</p>
                            <div className="slider__list-name slim">
                                <img src={ethereum} alt="" />
                                <p>
                                    HYPER <span>/WBNB</span>
                                </p>
                            </div>
                            <p className="slider__list-price">$380.97K</p>
                            <p className={`slider__list-percent ${high ? 'plus' : 'minus'}`}>+12.06%</p>
                        </li>
                        <li className="slider__list-item">
                            <p className="slider__list-num">3.</p>
                            <div className="slider__list-name sli">
                                <img src={ethereum} alt="" />
                                <p>
                                    KATA <span>/WBNB</span>
                                </p>
                            </div>
                            <p className="slider__list-price">$540.6K</p>
                            <p className={`slider__list-percent ${high ? 'plus' : 'minus'}`}>+4.51%</p>
                        </li>
                    </ul>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'>
                    <ul className="slider__list">
                        <li className="slider__list-item">
                            <p className="slider__list-num">4.</p>
                            <div className="slider__list-name sli">
                                <img src={ethereum} alt="" />
                                <p>
                                    KATA <span>/WBNB</span>
                                </p>
                            </div>
                            <p className="slider__list-price">$1.83M</p>
                            <p className={`slider__list-percent ${high ? 'plus' : 'minus'}`}>+9.48%</p>
                        </li>
                        <li className="slider__list-item">
                            <p className="slider__list-num">5.</p>
                            <div className="slider__list-name slim">
                                <img src={ethereum} alt="" />
                                <p>
                                    HYPER <span>/WBNB</span>
                                </p>
                            </div>
                            <p className="slider__list-price">$380.97K</p>
                            <p className={`slider__list-percent ${high ? 'plus' : 'minus'}`}>+12.06%</p>
                        </li>
                        <li className="slider__list-item">
                            <p className="slider__list-num">6.</p>
                            <div className="slider__list-name sli">
                                <img src={ethereum} alt="" />
                                <p>
                                    KATA <span>/WBNB</span>
                                </p>
                            </div>
                            <p className="slider__list-price">$540.6K</p>
                            <p className={`slider__list-percent ${high ? 'plus' : 'minus'}`}>+4.51%</p>
                        </li>
                    </ul>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'>
                    <ul className="slider__list">
                        <li className="slider__list-item">
                            <p className="slider__list-num">7.</p>
                            <div className="slider__list-name sli">
                                <img src={ethereum} alt="" />
                                <p>
                                    KATA <span>/WBNB</span>
                                </p>
                            </div>
                            <p className="slider__list-price">$1.83M</p>
                            <p className={`slider__list-percent ${high ? 'plus' : 'minus'}`}>+9.48%</p>
                        </li>
                        <li className="slider__list-item">
                            <p className="slider__list-num">8.</p>
                            <div className="slider__list-name slim">
                                <img src={ethereum} alt="" />
                                <p>
                                    HYPER <span>/WBNB</span>
                                </p>
                            </div>
                            <p className="slider__list-price">$380.97K</p>
                            <p className={`slider__list-percent ${high ? 'plus' : 'minus'}`}>+12.06%</p>
                        </li>
                        <li className="slider__list-item">
                            <p className="slider__list-num">9.</p>
                            <div className="slider__list-name sli">
                                <img src={ethereum} alt="" />
                                <p>
                                    KATA <span>/WBNB</span>
                                </p>
                            </div>
                            <p className="slider__list-price">$540.6K</p>
                            <p className={`slider__list-percent ${high ? 'plus' : 'minus'}`}>+4.51%</p>
                        </li>
                    </ul>
                </SwiperSlide>
                

            </Swiper>
        </div>
    )
}

export default SlidersListItem;