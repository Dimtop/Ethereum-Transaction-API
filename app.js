const Koa = require("koa");
const dotenv = require("dotenv");

const app = new Koa();

import addressRouter from "./Routers/address.router.js";

dotenv.config();

app.use(addressRouter.routes());
app.use(addressRouter.allowedMethods());

app.listen(process.env.PORT,(err)=>{
    err?console.log(err):console.log("Running on "+ process.env.PORT);
});