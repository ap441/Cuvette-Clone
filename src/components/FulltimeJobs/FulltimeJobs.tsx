import "./FulltimeJobs.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FiBriefcase } from "react-icons/fi";
import { IoDocumentOutline } from "react-icons/io5";

interface Job {
  title: string;
  company: string;
  location: string;
  technologies: string[];
  salaryRange: string;
  startDate: string;
  openings: number;
  probationDuration: string;
  experience: string;
  applyBy: string;
  isRemote: boolean;
  mode: string;
  applicationLink: string;
  postedTime: string;
}

function FulltimeJobs() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isRemote, setIsRemote] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jobs")
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.technologies.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const modeFilteredJobs = jobs.filter(
    (job) =>
      job.isRemote
  );

  return (
    <div className="fulltime-main">
      <div className="fulltime-leftmenu">
        <ul>
          <li className="fulltime-ft"><FiBriefcase className="ft-leftfticon"/> Fulltime Jobs</li>
          <li className="fulltime-oj" onClick={() => navigate("/otherjobs")}>
          <FiBriefcase className="ft-leftojicon"/> Other Jobs <label className="ojlabel">New</label>
          </li>
          <li className="fulltime-ap" onClick={() => navigate("/applied")}>
            <IoDocumentOutline className="ft-leftapicon"/> Applied
          </li>
        </ul>
      </div>

      <div className="fulltimecontent">
        <div className="fulltime-searchmenu">
          <input
            className="fulltime-searchbar"
            type="text"
            placeholder="Search by Role / Skills"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="fulltime-job-list">
          {filteredJobs.map((job, index) => (
            <fieldset className="ft-jobcardborder">
              <legend className="jclegend">{job.mode}</legend>
              <div key={index} className="job-card">
                <h3>{job.title}</h3>
                <div className="ft-comploc">
                  <p className="ft-company">{job.company}&nbsp;|&nbsp;</p>
                  <p>{job.location}</p>
                </div>
                <p className="ft-jobtechs">
                  {job.technologies.map((tech, index) => (
                    <span key={index} className={`tech-item tech-${index}`}>
                      {tech}
                    </span>
                  ))}
                </p>

                <div className="ft-jobinfo">
                  <p>
                    <label>Job Offer</label>
                    {job.salaryRange}
                  </p>
                  <p>
                    <label>Start Date</label>
                    {job.startDate}
                  </p>
                  <p>
                    <label>#Openings</label>
                    {job.openings}
                  </p>
                  <p>
                    <label>Experience</label>
                    {job.experience}
                  </p>
                </div>
                <div className="ft-jobappli">
                  <div className="jobappli-left">
                    <label>100+ applicants</label>
                    <p>
                      Apply by {job.applyBy} | Posted {job.postedTime}
                    </p>
                  </div>
                  <div className="jobappli-right">
                    <button className="viewdbtn">View Details</button>
                    <button className="jobappliapplybtn">Apply Now</button>
                  </div>
                </div>
              </div>
            </fieldset>
          ))}
        </div>
      </div>

      <div className="fulltime-filters">
        <h3>Apply Filters</h3>
        <div className="officetype">
          <label>Office Type</label>
          <div className="fulltime-otoptions">
            <input type="radio" name="office" value="remote" />
            <label>Remote</label>

            <input
              className="inofficeradio"
              type="radio"
              name="office"
              value="in-office"
            />
            <label>In-Office</label>
          </div>

          <div className="fulltime-workexp">
            <label>Work Experience</label>
            <select className="workexpselect" name="Work Experience">
              <option value="Select Experience">Select Experience</option>
              <option value="Intern">Intern</option>
              <option value="2+ Years">2+ Years</option>
              <option value="4+ Years">4+ Years</option>
            </select>
          </div>

          <div className="fulltime-minsalary">
            <label>Min Salary</label>
            <input
              type="range"
              className="minsalaryrange"
              name="minsalary"
              min="0"
              max="12"
            />
            <div className="minsalarybuttons">
              <button className="minsalaryclear" type="submit" >
                Clear
              </button>
              <button className="minsalaryapply" type="submit">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FulltimeJobs;
