const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // Add other settings fields as needed in the future
}, { timestamps: true });

module.exports = mongoose.model('Settings', settingsSchema);
