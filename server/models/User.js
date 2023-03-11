import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    nik: {
      type: Number,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    telp: {
      type: Number,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timmestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;
