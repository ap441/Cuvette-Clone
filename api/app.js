import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors({
  origin: "https://cuvette-clone-f7ni.vercel.app", 
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

const mongoURI = process.env.MONGO_URI; 


mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('Error connecting to MongoDB Atlas', error));

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  technologies: { type: [String], required: true },
  salaryRange: { type: String, required: true },
  startDate: { type: String, required: true },
  openings: { type: Number, required: true },
  probationDuration: { type: String, required: true },
  experience: { type: String, required: true },
  applyBy: { type: String, required: true },
  isRemote: { type: Boolean, required: true },
  mode: { type: String, required: true },
  applicationLink: { type: String, required: true },
  postedTime: { type: String },
  imgURL: { type: String, required: true }
}, { collection: 'jobListings' });

const Job = mongoose.model('Job', jobSchema);

app.get('/api/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    console.log('Fetched jobs:', jobs);
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jobs', error });
  }
});

const otherJobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  technologies: { type: [String], required: true },
  salaryRange: { type: String, required: true },
  mode: { type: String, required: true },
  applicationLink: { type: String, required: true },
  experience: { type: String, required: true },
  imgURL: { type: String, required: true },
}, { collection: 'otherJobs' });

const OtherJob = mongoose.model('OtherJob', otherJobSchema);

app.get('/api/otherjobs', async (req, res) => {
  try {
    const otherJobs = await OtherJob.find();
    console.log('Fetched jobs:', otherJobs);
    res.json(otherJobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jobs', error });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


export default app;
