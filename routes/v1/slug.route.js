import express from "express";
import slugController from "../../controllers/slug.controller.js";
import auth from "../../middlewares/auth.js";

const categoryRoute = express.Router();


categoryRoute
    .route("/")
    .get(auth("getSlugs"), slugController.getSlugs)

export default categoryRoute;