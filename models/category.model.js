import mongoose from "mongoose";

// import { toJSON, paginate } from "./plugins/index.js";
const { Schema } = mongoose;

const categorySchema = mongoose.Schema(
{
    // pickup: {
    //     type: Schema.Types.Mixed,
    //     required: true
    // },
    // shipping: {
    //     type: Schema.Types.Mixed,
    //     required: true
    // },
    // url: {
    //     type: String,
    //     required: false
    // },
    // images: {
    //     type: [String]
    // },
    // userId: {
    //     type: Schema.Types.ObjectId
    // },
    // status: {
    //     type: String,
    //     required: false,
    //     enum: ["Submitted", 'Booked', 'PickedUp', 'Cancelled', "Paused", 'Delivered', 'Rejected'],
    //     default: "Submitted"
    // },
    // pickupTime: {
    //     type: [new Schema({ from: Schema.Types.Mixed, to: Schema.Types.Mixed, available: Boolean })]
    // },
    // routes: {
    //     type: [Schema.Types.ObjectId]
    // }
    name: String,
    content: String,
    checkoutCode: String,
    requiredField: String,
    socialNetwork: String,
    defaultSortingNumber: Number,
    isActive: Boolean,
    offerDiscount: Number,
    urlSlug: String,
    pageTitle: String,
    metaKeywords: String,
    metaDescription: String,
},
{
    timestamps: true,
}
);

// bookingSchema.plugin(toJSON);
// bookingSchema.plugin(paginate);
// bookingSchema.statics.findAvailable = async function () {
    // const proxy = this.findOne();
    // return proxy;
// }
export const Category = mongoose.models['Category'] || mongoose.model('Category', categorySchema);