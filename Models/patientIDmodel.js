//Import mongoose
const mongoose = require('mongoose');

// Define the encounter schema
const encounterSchema = new mongoose.Schema({
  patientId: {
    type: String,
    required: true,
    ref: 'Patient'
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['Emergency', 'OPD', 'Specialist Care']
  },
  vitals: {
    bloodPressure: {
      type: String,
      required: true
    },
    temperature: {
      type: Number,
      required: true
    },
    pulse: {
      type: Number,
      required: true
    },
    sp02: {
      type: Number,
      required: true
    }
  }
});


module.exports = mongoose.model('Encounter', encounterSchema);