import express from "express";
// import validate from "../../middlewares/validate.js";
// import userValidation from "../../validations/user.validation.js";
import serviceController from "../../controllers/service.controller.js";
import auth from "../../middlewares/auth.js";

const serviceRoute = express.Router();

serviceRoute
    .route("/")
    .get(auth("getServices"), serviceController.getServices);
serviceRoute
    .route("/:slug")
    // .post(auth("createCalendar"), serviceController.createDate)
    .get(auth("getServiceData"), serviceController.getService)
// serviceRoute
//     .route("/hour")
//     .post(auth("createCalendar"), serviceController.createHour)
// serviceRoute
//     .route("/hour/:id")
//     .delete(auth("createCalendar"), serviceController.deleteHour)
export default serviceRoute;