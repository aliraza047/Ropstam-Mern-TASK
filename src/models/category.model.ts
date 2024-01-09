import mongoose, { Schema, Model, Document } from "mongoose";

interface CategoryDoc extends Document {
  title: string;
  createdBy: mongoose.Types.ObjectId;
}

const categorySchema = new Schema<CategoryDoc>(
  {
    title: {
      type: String,
      lowercase: true,
      trim: true,
    },
    createdBy: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Category: Model<CategoryDoc> = mongoose.model<CategoryDoc>(
  "Category",
  categorySchema
);

export default Category;
