import mongoose from "mongoose";

// import { toJSON, paginate } from "./plugins/index.js";
const { Schema } = mongoose;

const AutoLikePackSchema = new mongoose.Schema({
    name: String,
    coupanCode: String,
    coupanDiscount: Number,
    content: String,
    checkoutCode: String,
    keyFeatures: String,
    price: Number,
    isActive: Boolean,
    imageUrl: String,
    urlSlug: String,
    pageTitle: String,
    metaKeywords: String,
    metaDescription: String,
    newPost: Number,
    apiProviderId: String,
    serviceItems: [
      { serviceItem: String, minQuantity: Number, maxQuantity: Number },
    ],
    updatedAt: {
      type: Date,
      default: Date.now,
    },
});

export const AutoLikePack = mongoose.models['AutoLikePack'] || mongoose.model('AutoLikePack', AutoLikePackSchema);