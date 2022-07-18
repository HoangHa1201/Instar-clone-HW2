// Layouts
import { NavbarOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
const publicRoutes = [
    // dùng cho những router ko cần đăng nhập
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: NavbarOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [
    // dùng cho những router cần đăng nhập
];

export { publicRoutes, privateRoutes };
