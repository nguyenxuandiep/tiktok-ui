import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleXmark, faCloudUpload, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faMagnifyingGlass, faSignOut, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import Tippy from '@tippyjs/react'; // different import path!

import images from '~/assets/images';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '../../../components/AccountItem';
import Button from '../../../components/Button';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon = {faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data:[
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },{
                    type: 'language',

                    code: 'vi',
                    title: 'Tiếng việt'
                },{
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon = {faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon = {faKeyboard} />,
        title: 'KEyboard shortcuts'
    }
]

function Header() {
    const [searchResult,setSearchResult] = useState([])
    
    const currentUser = true ;
 
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        },0);
    },[]);

    // Handle logic 
    const handleMenuChange = (menuItem) => {
        switch(menuItem.type) {
            case 'language':
            //Handle change language
                break;
            default:
        }
    };


    const userMenu = [
        {
            icon: <FontAwesomeIcon icon = {faUser} />,
            title: 'View profile',
            to: '/@hoaa'
        },
        {
            icon: <FontAwesomeIcon icon = {faCoins} />,
            title: 'Get coins',
            to: '/coin'
        },{
            icon: <FontAwesomeIcon icon = {faGear} />,
            title: 'Settings',
            to: '/setting'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon = {faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and video" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            {/* <button className={cx('action-btn')}> 
                                <FontAwesomeIcon icon={faMessage} />
                            </button> */}
                        </>
                    ) : (
                        <>
                            <Button text> Upload</Button>
                            <Button primary> Log in </Button>
                        </>
                    )}

                    <Menu items={ currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                className={cx('user-avtar')}
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/47c280c157241558ffbba6c0da095733~c5_100x100.jpeg?lk3s=a5d48078&nonce=75632&refresh_token=06acd95d2cb62f2e2d5bf3eff4fd8044&x-expires=1722618000&x-signature=F18%2BQbIHlGQ84C69AWArDrb%2BbCg%3D&shp=a5d48078&shcp=81f88b70"
                                alt="Nguyễn Văn A"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
