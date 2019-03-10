import index from "./components/index/index.vue";
import intro from "./components/intro.vue";

export default {
    // base: process.env.NODE_ENV === "production" ? '/' : '/web/',
    mode: "history",
    routes: [
        {
            path: "/",
            component: intro
        },
        {
            path: "/index",
            component: index
        },
        {
            path: "/album",
            component: () =>
                import(/* webpackChunkName: "album" */ "./components/album/album.vue")
        },
        {
            path: "/async",
            component: () =>
                import(/* webpackChunkName: "async" */ "./components/async.vue")
        }
    ]
};
