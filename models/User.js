import mongoose from "mongoose";

const SongSchema = new mongoose.Schema({
  name: String,
  spotifyLink: String,
});

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
      max: 50,
      validate: {
        validator: function(v) {
          return /^(?=.*\d).+$/.test(v);
        },
        message: "Password must contain at least one number",
      },
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    favoriteSong: SongSchema,
    notifications: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);
UserSchema.index({ firstName: 'text', lastName: 'text' });

const User = mongoose.model("User", UserSchema);
export default User;