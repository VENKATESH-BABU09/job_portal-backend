const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: Number, required: true },
    type: { type: String, required: true },
    employer: { type: mongoose.Schema.Types.ObjectId, ref: 'Employer', required: true },
    applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'JobSeeker' }], 
    approved: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;