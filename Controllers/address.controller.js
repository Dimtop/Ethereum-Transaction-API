const addressController = {

    getAddresses : async (ctx,next) => {
        ctx.response.status = 200;
        ctx.response.body = "text";
        next();
    }
}



export default addressController;