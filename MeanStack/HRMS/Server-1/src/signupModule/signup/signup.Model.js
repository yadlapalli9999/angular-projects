import mongoose from 'mongoose';
const { Schema } = mongoose;
const signupSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
})

export default mongoose.model('SignUp', signupSchema)