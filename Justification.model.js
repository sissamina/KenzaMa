const mongoose = require('mongoose');

const justificationSchema = new mongoose.Schema({
    title: String,
    description: String,
  });
  
  const Justification = mongoose.model('Justification', justificationSchema);
