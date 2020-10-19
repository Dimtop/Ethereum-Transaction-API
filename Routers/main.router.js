
const Router = require("@koa/router");
const mainRouter = new Router({prefix:"/addresses"});
import addressRouter from './address.router';

mainRouter.get("/",addressRouter.routes());
mainRouter.get("/",addressRouter.allowedMethods());

export default mainRouter;