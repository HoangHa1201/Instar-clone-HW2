import classNames from 'classnames/bind';
import '~/assets/fontawesome-free-6.1.0-web/css/all.min.css';
import styles from './Home.module.scss';
import avatar from '~/assets/img/avatar.jpg';
import avatar1 from '~/assets/img/avatar1.jpg';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={`${cx('body__content')} `}>
            <div className={`${cx('body__content--head')} ${cx('bgd-content')}`}>
                <div className={`${cx('body__newPost')} ${'row'}`}>
                    <div className={`${cx('body__newPost--infor')} ${''}`}>
                        <div className={`${cx('body__newPost--avatar')} ${cx('avatar__share')}`}>
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className={`${cx('body__newPost--name')} ${'name'}`}>Nhật Hạ</div>
                    </div>
                    <div className={`${cx('body__newPost--infor')} ${''}`}>
                        <div className={`${cx('body__newPost--avatar')} ${cx('avatar__share')}`}>
                            <img src={avatar1} alt="avatar" />
                        </div>
                        <div className={`${cx('body__newPost--name')} ${'name'}`}>Lê Hoàng An Bình</div>
                    </div>
                    <div className={`${cx('body__newPost--infor')} ${''}`}>
                        <div className={`${cx('body__newPost--avatar')} ${cx('avatar__share')}`}>
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className={`${cx('body__newPost--name')} ${'name'}`}>Nhật Hạ</div>
                    </div>
                    <div className={`${cx('body__newPost--infor')} ${''}`}>
                        <div className={`${cx('body__newPost--avatar')} ${cx('avatar__share')}`}>
                            <img src={avatar1} alt="avatar" />
                        </div>
                        <div className={`${cx('body__newPost--name')} ${'name'}`}>Lê Hoàng An Bình</div>
                    </div>
                    <div className={`${cx('body__newPost--infor')} ${''}`}>
                        <div className={`${cx('body__newPost--avatar')} ${cx('avatar__share')}`}>
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className={`${cx('body__newPost--name')} ${'name'}`}>Nhật Hạ</div>
                    </div>
                    <div className={`${cx('body__newPost--infor')} ${''}`}>
                        <div className={`${cx('body__newPost--avatar')} ${cx('avatar__share')}`}>
                            <img src={avatar1} alt="avatar" />
                        </div>
                        <div className={`${cx('body__newPost--name')} ${'name'}`}>Lê Hoàng An Bình</div>
                    </div>
                    <div className={`${cx('body__newPost--infor')} ${''}`}>
                        <div className={`${cx('body__newPost--avatar')} ${cx('avatar__share')}`}>
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className={`${cx('body__newPost--name')} ${'name'}`}>Nhật Hạ</div>
                    </div>
                </div>
            </div>
            <div className={`${cx('body__newContent')} ${cx('bgd-content')}`}>
                <div className={`${cx('body__newContent--head')} ${''}`}>
                    <div className={`${cx('body__newContent--head-info')}`}>
                        <div className={`${cx('body__newContent__head--avatar')} ${'avatar__share'}`}>
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className={`${cx('body__newContent__head--name')} ${'name'}`}>Nhật Hạ</div>
                    </div>
                    <div className={`${cx('body__newContent__head--menu')}`}>
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
                <div className={`${cx('body__newContent--img')}`}>
                    <img src={avatar} alt="avatar" />
                    <i className={`${cx('body__newContent--icon')} ${'fa-solid fa-angle-right '}`}></i>
                </div>
                <div className={`${cx('body__newContent--icons')}`}>
                    <div className={`${cx('body__newContent--iconFirst')}`}>
                        <i className="hover fa-regular fa-heart"></i>
                        <i className="hover fa-regular fa-comment"></i>
                        <i className="hover fa-regular fa-paper-plane"></i>
                    </div>
                    <div className={`${cx('body__newContent--iconSecond')}`}>
                        <i className=" fa-solid fa-circle blue"></i>
                        <i className=" fa-solid fa-circle"></i>
                        <i className=" fa-solid fa-circle"></i>
                    </div>
                    <div className={`${cx('body__newContent--iconThird')}`}>
                        <i className="hover fa-regular fa-bookmark"></i>
                    </div>
                </div>
                <div className={`${cx('body__newContent--like')}`}>
                    <img src={avatar} alt="avatar" />
                    <div className={`${cx('body__newContent--like-text')}`}>
                        <div className={`${cx('body__newContent__like-name')} ${'first-text'}`}>Nhật Hạ</div>
                        <div className={`${cx('body__newContent__like-and')} ${'second-text'}`}> và</div>
                        <div className={`${cx('body__newContent__like-num')} ${'first-text'}`}>
                            2,970,623 người khác
                        </div>
                        <div className={`${cx('body__newContent__liked')} ${'second-text'}`}> đã thích</div>
                    </div>
                </div>
                <div className={`${cx('body__newContent--content')}`}>
                    <div className={`${cx('body__newContent__content-name')} ${'first-text'}`}>Nhật Hạ</div>
                    <div className={`${cx('body__newContent__content-twitch')} ${'second-text'}`}>
                        Home work HTML && CSS Boot Camp Techainer
                    </div>
                </div>
                <div className={`${cx('body__newContent--comment')}`}>
                    <div class={`${cx('body__newContent-comment-head')} ${'third-text'}`}>
                        Xem tất cả 8,305 bình luận
                    </div>
                    <div className={`${cx('body__newContent-comment-body')}`}>
                        <div className={`${cx('body__newContent-comment-body-texts')}`}>
                            <div className={`${cx('body__newContent-comment-body-name')} ${'first-text'}`}>
                                Hoàng Hải
                            </div>
                            <div className={`${cx('body__newContent-comment-body-text')} ${'second-text'}`}>
                                Lập trình Front-end với ReactJS
                            </div>
                        </div>
                        <i class="hover fa-regular fa-heart"></i>
                    </div>
                    <div className={`${cx('body__newContent-comment-body')}`}>
                        <div className={`${cx('body__newContent-comment-body-texts')}`}>
                            <div className={`${cx('body__newContent-comment-body-name')} ${'first-text'}`}>
                                Hoàng Hải
                            </div>
                            <div className={`${cx('body__newContent-comment-body-text')} ${'second-text'}`}>
                                Lập trình Front-end với ReactJS
                            </div>
                        </div>
                        <i class="hover fa-regular fa-heart"></i>
                    </div>
                    <div className={`${cx('body__newContent-comment-time')} ${'third-text'}`}>2 NGÀY TRƯỚC</div>
                </div>
                <div className={`${cx('body__newContent--comment-add')}`}>
                    <div className={`${cx('body__newContent--comment-add-first')}`}>
                        <i class="hover fa-regular fa-face-smile"></i>
                        <div className={`${cx('body__newContent--comment-add-first-text')} ${'third-text'}`}>
                            {' '}
                            Thêm bình luận...
                        </div>
                    </div>
                    <div className={`${cx('body__newContent--comment-add-last')}`}>Đăng</div>
                </div>
            </div>
            <div className={`${cx('body__newContent')} ${cx('bgd-content')}`}>
                <div className={`${cx('body__newContent--head')} ${''}`}>
                    <div className={`${cx('body__newContent--head-info')}`}>
                        <div className={`${cx('body__newContent__head--avatar')} ${'avatar__share'}`}>
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className={`${cx('body__newContent__head--name')} ${'name'}`}>Nhật Hạ</div>
                    </div>
                    <div className={`${cx('body__newContent__head--menu')}`}>
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
                <div className={`${cx('body__newContent--img')}`}>
                    <img src={avatar} alt="avatar" />
                    <i className={`${cx('body__newContent--icon')} ${'fa-solid fa-angle-right '}`}></i>
                </div>
                <div className={`${cx('body__newContent--icons')}`}>
                    <div className={`${cx('body__newContent--iconFirst')}`}>
                        <i className="hover fa-regular fa-heart"></i>
                        <i className="hover fa-regular fa-comment"></i>
                        <i className="hover fa-regular fa-paper-plane"></i>
                    </div>
                    <div className={`${cx('body__newContent--iconSecond')}`}>
                        <i className=" fa-solid fa-circle blue"></i>
                        <i className=" fa-solid fa-circle"></i>
                        <i className=" fa-solid fa-circle"></i>
                    </div>
                    <div className={`${cx('body__newContent--iconThird')}`}>
                        <i className="hover fa-regular fa-bookmark"></i>
                    </div>
                </div>
                <div className={`${cx('body__newContent--like')}`}>
                    <img src={avatar} alt="avatar" />
                    <div className={`${cx('body__newContent--like-text')}`}>
                        <div className={`${cx('body__newContent__like-name')} ${'first-text'}`}>Nhật Hạ</div>
                        <div className={`${cx('body__newContent__like-and')} ${'second-text'}`}> và</div>
                        <div className={`${cx('body__newContent__like-num')} ${'first-text'}`}>
                            2,970,623 người khác
                        </div>
                        <div className={`${cx('body__newContent__liked')} ${'second-text'}`}> đã thích</div>
                    </div>
                </div>
                <div className={`${cx('body__newContent--content')}`}>
                    <div className={`${cx('body__newContent__content-name')} ${'first-text'}`}>Nhật Hạ</div>
                    <div className={`${cx('body__newContent__content-twitch')} ${'second-text'}`}>
                        Home work HTML && CSS Boot Camp Techainer
                    </div>
                </div>
                <div className={`${cx('body__newContent--comment')}`}>
                    <div class={`${cx('body__newContent-comment-head')} ${'third-text'}`}>
                        Xem tất cả 8,305 bình luận
                    </div>
                    <div className={`${cx('body__newContent-comment-body')}`}>
                        <div className={`${cx('body__newContent-comment-body-texts')}`}>
                            <div className={`${cx('body__newContent-comment-body-name')} ${'first-text'}`}>
                                Hoàng Hải
                            </div>
                            <div className={`${cx('body__newContent-comment-body-text')} ${'second-text'}`}>
                                Lập trình Front-end với ReactJS
                            </div>
                        </div>
                        <i class="hover fa-regular fa-heart"></i>
                    </div>
                    <div className={`${cx('body__newContent-comment-body')}`}>
                        <div className={`${cx('body__newContent-comment-body-texts')}`}>
                            <div className={`${cx('body__newContent-comment-body-name')} ${'first-text'}`}>
                                Hoàng Hải
                            </div>
                            <div className={`${cx('body__newContent-comment-body-text')} ${'second-text'}`}>
                                Lập trình Front-end với ReactJS
                            </div>
                        </div>
                        <i class="hover fa-regular fa-heart"></i>
                    </div>
                    <div className={`${cx('body__newContent-comment-time')} ${'third-text'}`}>2 NGÀY TRƯỚC</div>
                </div>
                <div className={`${cx('body__newContent--comment-add')}`}>
                    <div className={`${cx('body__newContent--comment-add-first')}`}>
                        <i class="hover fa-regular fa-face-smile"></i>
                        <div className={`${cx('body__newContent--comment-add-first-text')} ${'third-text'}`}>
                            {' '}
                            Thêm bình luận...
                        </div>
                    </div>
                    <div className={`${cx('body__newContent--comment-add-last')}`}>Đăng</div>
                </div>
            </div>
        </div>
    );
}

export default Home;
