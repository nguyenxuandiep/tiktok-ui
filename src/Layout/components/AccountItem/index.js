import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function AccountItem() {
    return (  
        <div className={cx('wrapper')}>
            <img className={cx('avatar')}src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4b85df94ddbc913a995d4d721e417580.jpeg?lk3s=a5d48078&nonce=21245&refresh_token=9b67a36fcbc053909b653f51fb14eb7a&x-expires=1719828000&x-signature=t2zhH89IAqwKKe3EhvP6NHgv0OU%3D&shp=a5d48078&shcp=81f88b70" alt ="Hoa"></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}> 
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx('check')}icon ={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;