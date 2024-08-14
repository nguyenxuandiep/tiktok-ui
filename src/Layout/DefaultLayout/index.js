import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Sidebar/DefaultLayout.module.scss';
import Header from '~/Layout/components/Header';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    childrent: PropTypes.node.isRequired,
};
export default DefaultLayout;
