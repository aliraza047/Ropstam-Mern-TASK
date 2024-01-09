import mongoose, { Schema, Document, Model } from "mongoose";

export interface Car extends Document {
  color: string;
  model: string;
  maker: string;
  registrationNo: string;
  category: mongoose.Types.ObjectId;
  createdBy: mongoose.Types.ObjectId;
}

const carSchema: Schema<Car> = new Schema(
  {
    color: String,
    model: String,
    maker: String,
    registrationNo: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const CarModel: Model<Car> = mongoose.model<Car>("Car", carSchema);

export default CarModel;
