import mongoose, { Schema, Model, Document } from "mongoose";

interface UserDoc extends Document {
  email: string;
  password: string;
}

const userSchema = new Schema<UserDoc>(
  {
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User: Model<UserDoc> = mongoose.model<UserDoc>("User", userSchema);

export default User;
