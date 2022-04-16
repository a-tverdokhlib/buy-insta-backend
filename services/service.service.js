import httpStatus from "http-status";
import { Service } from "../models/service.model.js";
import ApiError from "../utils/ApiError.js";

const create = async (body) => {
    return Service.create(body)
}

const list = async (filter) => {
    const items = await Service.find(filter);
    return items;
}

const slugs = async (filter) => {
    const items = await Service.find(filter).select('urlSlug');
    return items;
}

const getById = async (id) => {
    const record = Service.findById(id);
    if (!record) {
        throw new ApiError(httpStatus.NOT_FOUND, 'RECORD_NOT_FOUND');
    }
    return record;
}

const getBySlug = async (slug) => {
    const record = Service.findOne({urlSlug: {$eq: slug}});
    if (!record) {
        throw new ApiError(httpStatus.NOT_FOUND, 'RECORD_NOT_FOUND');
    }
    return record;
}

const serviceService = {
    create, list, slugs, getById, getBySlug
}


export default serviceService;