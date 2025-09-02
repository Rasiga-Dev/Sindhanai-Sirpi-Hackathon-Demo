// models/DPM.js
import mongoose from 'mongoose';
const DPM = new mongoose.Schema({
  username: String,
  password: String, // hashed preferred
  district: String, // Tenkasi, Tirunelveli, etc.
});
const DPMModel = mongoose.model('dpm', DPM);

export default DPMModel;
