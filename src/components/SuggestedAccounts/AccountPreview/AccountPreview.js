import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5a36566de7d25ed20a77f15e0bfc74da~c5_100x100.jpeg?lk3s=a5d48078&nonce=46275&refresh_token=a90c8683d4027002a73e2a29cc2362d1&x-expires=1724605200&x-signature=2iW%2Fa2Sx6CXXJjNbpiTxR%2Ft69q0%3D&shp=a5d48078&shcp=81f88b70"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div classNamme={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>diepdeptrai</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}> Nguyễn Xuân Điệp</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}> 8.2M </strong>
                    <span className={cx('label')}> Followers</span>
                    <strong className={cx('value')}> 8.2M </strong>
                    <span className={cx('label')}> Like</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
