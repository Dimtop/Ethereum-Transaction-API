
const Router = require("@koa/router");
const adressRouter = new Router({prefix:"/addresses"});
import addressController from '../Controllers/address.controller';

adressRouter.get("/",addressController.getAddresses);


export default adressRouter;