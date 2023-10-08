import Home from "../pages/home/Home";

export const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        auth: true,
    },
    // {
    //     path: '/profile/:id',
    //     exact: false,
    //     // component: Profile,
    //     auth: true,
    // },
    // {
    //     path: '/messages',
    //     exact: true,
    //     // component: Messages,
    //     auth: true,
    // },
    // {
    //     path: '/messages/:id',
    //     exact: false,
    //     // component: Message,
    //     auth: true,
    // },
    // {
    //     path: '/friends/:id',
    //     exact: false,
    //     // component: Home,
    //     auth: true,
    // },
    // {
    //     path: '/auth',
    //     exact: true,
    //     // component: Home,
    //     auth: false,
    // },
]