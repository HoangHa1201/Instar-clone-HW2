import classNames from 'classnames/bind';
import NavBar from '~/components/Layout/components/NavBar';
import SideBar from './SideBar/index';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={`${'grid'}`}>
            <NavBar />
            <div className={`${cx('body')} ${'row'}`}>
                <div class={`${cx('body-center')} ${'col l-8 m-12 c-12 '}`}>
                    <div className={`${cx('body-center-1')} ${'row'}`}>
                        <div className={`${'col l-6 m-8 c-11'}`}>{children}</div>
                        <div className="col l-4 m-0 c-0">
                            <SideBar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
