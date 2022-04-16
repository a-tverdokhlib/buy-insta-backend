import httpStatus from "http-status";
import ApiError from "../utils/ApiError.js";
import catchAsync from "../utils/catchAsync.js";
import categoryService from "../services/category.service.js";
import serviceService from "../services/service.service.js";

const getServices = catchAsync(
    async (req, res) => {
        const results = await serviceService.list({});
        res.status(httpStatus.CREATED).send(results);
    }
)

const getService = catchAsync(
    async (req, res) => {
        const item = await serviceService.getBySlug(req.params.slug);
        if (!item) {
            throw new ApiError(httpStatus.NOT_FOUND, 'NOT_FOUND_SERVICE');
        }
        res.send(item);
    }
)

const serviceController = {
    getServices, getService
}

export default serviceController;