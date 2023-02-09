import './Footer.scss';

import telegram from '../../assets/img/telegram.svg';
import discord from '../../assets/img/discord.svg';
import twitter from '../../assets/img/twitter.svg';
import apple from '../../assets/img/apple.svg';
import play from '../../assets/img/play.svg';


function Footer() {
    return(
        <div className="footer">
            <div className="footer__icons">
                <a href="#">
                    <span>
                        <img src={telegram} alt="" />
                    </span>
                </a>
                <a href="#">
                    <span>
                        <img src={discord} alt="" />
                    </span>
                </a>
                <a href="#">
                    <span>
                        <img src={twitter} alt="" />
                    </span>
                </a>
            </div>
            <div className="footer__info">
                <p>Copyright © 2023, All Rights Reserved by Dex.ai | Ads & Marketing: info@dex.ai</p>
            </div>
            <div className="footer__stores">
                <div className="footer__stores-flipper">
                    <div className="footer__stores-flipper_inner">
                        <div className="front">
                            <img src={apple} alt="" />
                            <div className="front__txt apple">
                                <span>Download on the</span>
                                <p>App Store</p>
                            </div>
                        </div>
                        <div className="back">
                            <p>soon</p>
                        </div>
                    </div>
                </div>
                <div className="footer__stores-flipper">
                    <div className="footer__stores-flipper_inner">
                        <div className="front">
                            <img src={play} alt="" />
                            <div className="front__txt play">
                                <span>GET IN ON</span>
                                <p>Google Play</p>
                            </div>
                        </div>
                        <div className="back">
                            <p>soon</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;