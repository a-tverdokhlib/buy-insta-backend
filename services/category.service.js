import httpStatus from "http-status";
import { Category } from "../models/category.model.js";
import { OtherService } from "../models/otherService.model.js";
import ApiError from "../utils/ApiError.js";

const create = async (body) => {
    return Category.create(body)
}

const list = async (filter) => {
    const categories = await Category.find(filter);
    return categories;
}

const slugs = async (filter) => {
    const categories = await Category.find(filter).select('urlSlug');
    return categories;
}

const getById = async (id) => {
    const record = Category.findById(id);
    if (!record) {
        throw new ApiError(httpStatus.NOT_FOUND, 'RECORD_NOT_FOUND');
    }
    return record;
}

const getBySlug = async (slug) => {
    const record = Category.findOne({urlSlug: {$eq: slug}});
    if (!record) {
        throw new ApiError(httpStatus.NOT_FOUND, 'RECORD_NOT_FOUND');
    }
    return record;
}

const storyViews = async () => {
    const record = OtherService.findOne({});
    if (!record) {
        throw new ApiError(httpStatus.NOT_FOUND, 'RECORD_NOT_FOUND');
    }
    return record;
}

const categoryService = {
    create, list, slugs, storyViews, getById, getBySlug
}


export default categoryService;