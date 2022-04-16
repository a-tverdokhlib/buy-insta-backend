import express from "express";
import categoryRoute from "./category.route.js";
import slugRoute from "./slug.route.js";
import serviceRoute from "./service.route.js";
import config from '../../config/config.js'

const router = express.Router();


const defaultRoutes = [
{
    path: "/category",
    route: categoryRoute
},
{
    path: "/slugs",
    route: slugRoute
},
{
    path: "/service",
    route: serviceRoute
}
];

const devRoutes = [
    // routes available only in development mode
    // {
    //   path: '/docs',
    //  route: docsRoute,
    // },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
    devRoutes.forEach((route) => {
        router.use(route.path, route.route);
    });
}

export default router;