import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
      trim: true,
    },
    propertyType: {
      type: String,
      enum: ["HOTEL", "RESORT", "VILLA", "HOSTEL", "OTHER"],
      default: "HOTEL",
    },
    unitType: {
      type: String,
      required: true,
      trim: true,
    },

    description: { type: String, maxlength: 1500 },
    reviews: { type: String, maxlength: 1500 },
    rating: { type: Number, min: 1, max: 5 },
    city: { type: String, required: [true, "City is required"], trim: true },
    state: { type: String, required: true, trim: true },
    country: {
      type: String,
      required: [true, "Country is required"],
      trim: true,
    },
    phone: [{ type: String, trim: true }],
    email: [
      {
        type: String,
        lowercase: true,
        trim: true,
      },
    ],
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    status: {
      type: String,
      enum: ["ACTIVE", "CLOSED"],
      default: "ACTIVE",
    },
  },
  { timestamps: true },
);

const Property = mongoose.model("Property", PropertySchema);
export default Property;
