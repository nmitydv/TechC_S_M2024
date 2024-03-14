import mongoose from 'mongoose';

const { Schema } = mongoose;

const contactSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  websiteUrl: {
    type: String
  },
  services: {
    type: [String],
    required: true
  },
  projectType: {
    type: String,
    enum: ['one-time project', 'ongoing maintenance', 'Both'],
    required: true
  },
  budget: {
    type: String,
    enum: ['$100-$500', '$200 - $1000', '$1000+'],
    required: true
  },
  deadline: {
    type: String,
    enum: ['ASAP', '1 month', '2-3 months', '3+ months'],
    required: true
  },
  message: String
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
