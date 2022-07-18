import classNames from 'classnames/bind';
import '~/assets/fontawesome-free-6.1.0-web/css/all.min.css';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import avatar from '~/assets/img/avatar-trang.webp';
const cx = classNames.bind(styles);
function NavBar() {
    return (
        <header className={`${cx('navbar')} ${cx('header')} ${'row'}`}>
            <div className="col l-8 m-10 c-12">
                <div class="row">
                    <div className={`${cx('navbar__element')} ${cx('navbar__instar--img')} ${'col l-4 m-4 c-4'}`}>
                        <Link to="/">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
                                alt="Instagram_logo"
                            />
                        </Link>
                    </div>
                    <div className={`${cx('navbar__element')} ${cx(' navbar_search')} ${'col l-4 m-4 c-0'}`}>
                        <div className={cx('navbar_search--box')}>
                            <Link to="/search">
                                <i className={`${cx('navbar_search--icon')} ${'fa-solid fa-magnifying-glass'}`}></i>
                            </Link>
                            <input type="search" placeholder="Tìm kiếm" class={cx('navbar_search--input')} />
                        </div>
                    </div>
                    <div className={`${cx('navbar__element')} ${cx('navbar__icons')} ${'col l-4 m-4 c-8'}`}>
                        <div className={`${cx('navbar__icons-father')} ${'row'}`}>
                            <i className={`${cx('navbar__icon')} ${'col l-2 m-2 c-2  fa-solid fa-house'}`}></i>
                            <i
                                className={`${cx(
                                    'navbar__icon',
                                )} ${'col l-2 m-2 c-2  fa-brands fa-facebook-messenger'}`}
                            ></i>

                            <i className={`${cx('navbar__icon')} ${'col l-2 m-2 c-2  fa-regular fa-square-plus'}`}></i>

                            <i className={`${cx('navbar__icon')} ${'col l-2 m-2 c-2  fa-regular fa-compass'}`}></i>

                            <i className={`${cx('navbar__icon')} ${'col l-2 m-2 c-2  fa-regular fa-heart'}`}></i>

                            <i className={`${cx('navbar__icon')}  ${cx('navbar__icon--avatar')} ${'col l-2 m-2 c-2 '}`}>
                                <img src={avatar} alt="avatar"></img>
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;
