import mongoose from "mongoose";

// import { toJSON, paginate } from "./plugins/index.js";
const { Schema } = mongoose;

const growPackSchema = mongoose.Schema(
{
    name: String,
    isMostPopular: Boolean,
    isShownInActiveTab: Boolean,
    categoryId: String,
    isInstagramSaves: Boolean,
    parentPackId: String,
    orderForId: String,
    coupanCode: String,
    coupanDiscount: Number,
    content: String,
    quantity: Number,
    price: Number,
    isActive: Boolean,
    sortNumber: Number,
    imageUrl: String,
    urlSlug: String,
    pageTitle: String,
    metaKeywords: String,
    metaDescription: String,
    apiType: String,
    apiProviderId: String,
    serviceItem: String,
    rate: Number,
    min: Number,
    max: Number,
    reelApiProviderId: String,
    reelServiceItem: String,
    variations: [
      { variationDays: Number, offPercent: Number, isDefaultActive: Boolean },
    ],
    offer: { type: [mongoose.Schema.Types.ObjectId], ref: 'Offer' },
},
{
    timestamps: true,
});

export const GrowPack = mongoose.models['GrowPack'] || mongoose.model('GrowPack', growPackSchema);