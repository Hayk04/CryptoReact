import './Footer.scss';

import telegram from '../../assets/img/telegram.svg';
import discord from '../../assets/img/discord.svg';
import twitter from '../../assets/img/twitter.svg';
import appStore from '../../assets/img/app-store.png';
import googlePlay from '../../assets/img/google-play.png';
import soon from '../../assets/img/soon.svg';

function Footer() {
    return(
        <div className="footer">
            <div className="footer__icons">
                <a href="#">
                    <img src={telegram} alt="" />
                </a>
                <a href="#">
                    <img src={discord} alt="" />
                </a>
                <a href="#">
                    <img src={twitter} alt="" />
                </a>
            </div>
            <div className="footer__info">
                <p>Copyright © 2023, All Rights Reserved by Dex.ai | Ads & Marketing: info@dex.ai</p>
            </div>
            <div className="footer__stores">
                <div className="footer__stores-flipper">
                    <div className="footer__stores-flipper_inner">
                        <div className="front">
                            <img src={appStore} alt="" />
                        </div>
                        <div className="back">
                            <img src={soon} alt="" />
                        </div>
                    </div>
                </div>
                <div className="footer__stores-flipper">
                    <div className="footer__stores-flipper_inner">
                        <div className="front">
                            <img src={googlePlay} alt="" />
                        </div>
                        <div className="back">
                            <img src={soon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;