import classNames from 'classnames/bind';
import '~/assets/fontawesome-free-6.1.0-web/css/all.min.css';
import styles from './SideBar.module.scss';
import avatar from '~/assets/img/avatar-trang.webp';
import avatar2 from '~/assets/img/avatar2.jpg';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <div className={`${cx('body__infor')} ${'col l-4 m-0 c-0'}`}>
            <div className={`${cx('body__infor--head')}`}>
                <div className={`${cx('body__infor--head-infor')}`}>
                    <img src={avatar} alt="" />
                    <div className={`${cx('body__infor--head-name')}`}>
                        <div className={`${cx('body__infor--head-pryname')} ${'first-text'}`}>BootCamp2022</div>
                        <div className={`${cx('body__infor--head-secondname')} ${'third-text'}`}>
                            BootCamp Techainer
                        </div>
                    </div>
                </div>
                <div className={`${cx('body__infor--head-transfer')} ${'first-text blue'}`}>Chuyển</div>
            </div>
            <div className={`${cx('body__infor--container')}`}>
                <div className={`${cx('body__infor--container-head')}`}>
                    <div className={`${cx('body__infor--container-exm')} ${'first-text'}`}>Gợi ý cho bạn</div>
                    <div className={`${cx('body__infor--container-seeAll')} ${'second-text'}`}>Xem tất cả</div>
                </div>
                <div className={`${cx('body__infor--container-body')}`}>
                    <div className={`${cx('body__infor--container-offer')}`}>
                        <img src={avatar2} alt="" />
                        <div className={`${cx('body__infor--container-name')}`}>
                            <div className={`${cx('body__infor--container-pryname')} ${'first-text'}`}>
                                React Native
                            </div>
                            <div className={`${cx('body__infor--container-sencondname')} ${'third-text'}`}>
                                Phổ biến
                            </div>
                        </div>
                    </div>
                    <div className={`${cx('body__infor--container-follow')} ${'first-text blue'}`}>Theo dõi</div>
                </div>
                <div className={`${cx('body__infor--container-body')}`}>
                    <div className={`${cx('body__infor--container-offer')}`}>
                        <img src={avatar2} alt="" />
                        <div className={`${cx('body__infor--container-name')}`}>
                            <div className={`${cx('body__infor--container-pryname')} ${'first-text'}`}>
                                React Native
                            </div>
                            <div className={`${cx('body__infor--container-sencondname')} ${'third-text'}`}>
                                Phổ biến
                            </div>
                        </div>
                    </div>
                    <div className={`${cx('body__infor--container-follow')} ${'first-text blue'}`}>Theo dõi</div>
                </div>
                <div className={`${cx('body__infor--container-body')}`}>
                    <div className={`${cx('body__infor--container-offer')}`}>
                        <img src={avatar2} alt="" />
                        <div className={`${cx('body__infor--container-name')}`}>
                            <div className={`${cx('body__infor--container-pryname')} ${'first-text'}`}>
                                React Native
                            </div>
                            <div className={`${cx('body__infor--container-sencondname')} ${'third-text'}`}>
                                Phổ biến
                            </div>
                        </div>
                    </div>
                    <div className={`${cx('body__infor--container-follow')} ${'first-text blue'}`}>Theo dõi</div>
                </div>
                <div className={`${cx('body__infor--container-body')}`}>
                    <div className={`${cx('body__infor--container-offer')}`}>
                        <img src={avatar2} alt="" />
                        <div className={`${cx('body__infor--container-name')}`}>
                            <div className={`${cx('body__infor--container-pryname')} ${'first-text'}`}>
                                React Native
                            </div>
                            <div className={`${cx('body__infor--container-sencondname')} ${'third-text'}`}>
                                Phổ biến
                            </div>
                        </div>
                    </div>
                    <div className={`${cx('body__infor--container-follow')} ${'first-text blue'}`}>Theo dõi</div>
                </div>
                <div className={`${cx('body__infor--container-body')}`}>
                    <div className={`${cx('body__infor--container-offer')}`}>
                        <img src={avatar2} alt="" />
                        <div className={`${cx('body__infor--container-name')}`}>
                            <div className={`${cx('body__infor--container-pryname')} ${'first-text'}`}>
                                React Native
                            </div>
                            <div className={`${cx('body__infor--container-sencondname')} ${'third-text'}`}>
                                Phổ biến
                            </div>
                        </div>
                    </div>
                    <div className={`${cx('body__infor--container-follow')} ${'first-text blue'}`}>Theo dõi</div>
                </div>
            </div>
            <div className={`${cx('body__infor--footer')}`}>
                <div className={`${cx('body__infor--footer-contact')} ${'third-text'}`}>
                    <a href="#">Giới thiệu</a>
                    <a href="#">Trợ giúp</a>
                    <a href="#">Báo chí</a>
                    <a href="#">API</a>
                    <a href="#">Việc Làm</a>
                    <a href="#">Quyền Riêng tư</a>
                    <a href="#">Điều khoản</a>
                    <a href="#">Vị trí</a>
                    <a href="#">Ngôn ngữ</a>
                </div>
                <div className={`${cx('body__infor--footer-license')} ${'third-text'}`}>© 2022 INSTAGRAM FROM META</div>
            </div>
        </div>
    );
}

export default SideBar;
