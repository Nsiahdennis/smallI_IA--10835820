


// patient.js

// Import mongoose
const mongoose = require('mongoose');

// Define the patient schema
const patientSchema = new mongoose.Schema({
  patientId: {
    type: String,
    required: true,
    unique: true
  },
  surname: {
    type: String,
    required: true
  },
  othernames: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other']
  },
  phoneNumber: {
    type: String,
    required: true
  },
  residentialAddress: {
    type: String,
    required: true
  },
  emergencyName: {
    type: String,
    required: true
  },
  emergencyContact: {
    type: String,
    required: true
  },
  emergencyRelation: {
    type: String,
    required: true
  }
});

// Export the patient model
module.exports = mongoose.model('Patient', patientSchema);


JavaScript

// encounter.js

// Import mongoose
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

// Export the encounter model
module.exports = mongoose.model('Encounter', encounterSchema);
 


