import express from "express";
import categoryController from "../../controllers/category.controller.js";
import auth from "../../middlewares/auth.js";

const categoryRoute = express.Router();


categoryRoute
    .route("/")
    .get(auth("getCategories"), categoryController.getCategories)
// .get(auth("getBookings"), categoryController.getBookings)
// .put(auth("updateBooking"), categoryController.updateBooking)
categoryRoute
    .route("/:slug")
    .get(auth("getCategory"), categoryController.getCategory)
//     .put(auth("updateBooking"), categoryController.updateBooking)
//     .delete(auth("deleteBooking"), categoryController.deleteBooking);
// categoryRoute
//     .route("/:bookingId/pickup")
//     .put(auth("updateBooking"), categoryController.updateBookingPickup);
// categoryRoute
//     .route("/:bookingId/shipping")
//     .put(auth("updateBooking"), categoryController.updateBookingShipping)
categoryRoute
    .route("/services/:id")
    .get(auth("getCategoryServices"), categoryController.getCategoryServices)

// categoryRoute
//     .route("/services_by_slug/:slug")
//     .get(auth("getCategoryServices"), categoryController.getCategoryServicesBySlug)

export default categoryRoute;