import httpStatus from "http-status";
import ApiError from "../utils/ApiError.js";
import catchAsync from "../utils/catchAsync.js";
import categoryService from "../services/category.service.js";
import serviceService from "../services/service.service.js";

const getSlugs = catchAsync(
    async (req, res) => {
        const categorySlugs = await categoryService.slugs({urlSlug: {$ne: ''}});
        const serviceSlugs = await serviceService.slugs({urlSlug: {$ne: ''}});
        const results = [...categorySlugs, ...serviceSlugs];
        res.status(httpStatus.CREATED).send(results);
    }
)

const slugController = {
    getSlugs
}

export default slugController;