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
  imgURL: string;
}

function FulltimeJobs() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [tempOfficeType, setTempOfficeType] = useState("");
  const [tempExperience, setTempExperience] = useState("");
  const [tempMinSalary, setTempMinSalary] = useState(0);

  const [officeType, setOfficeType] = useState("");
  const [experience, setExperience] = useState("");
  const [minSalary, setMinSalary] = useState(0);

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

  const handleOfficeTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempOfficeType(e.target.value);
  };

  const handleExperienceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTempExperience(e.target.value);
  };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempMinSalary(parseInt(e.target.value, 10));
  };

  const applyFilters = () => {
    setOfficeType(tempOfficeType);
    setExperience(tempExperience);
    setMinSalary(tempMinSalary);
  };

  const clearFilters = () => {
    setTempOfficeType("");
    setTempExperience("");
    setTempMinSalary(0);
    setOfficeType("");
    setExperience("");
    setMinSalary(0);
  };

  const filteredJobs = jobs
    .filter((job) => {
      return (
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.technologies.some((skill) =>
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    })
    .filter((job) => {
      if (officeType === "remote") {
        return job.isRemote;
      } else if (officeType === "in-office") {
        return !job.isRemote;
      }
      return true;
    })
    .filter((job) => {
      if (experience) {
        return job.experience.toLowerCase().includes(tempExperience.toLowerCase());
      }
      return true;
    })
    .filter((job) => {
      const salaryMin = parseInt(
        job.salaryRange.split("-")[0].replace(/[^\d]/g, ""),
        10
      );
      return salaryMin >= minSalary;
    });

  return (
    <div className="fulltime-main">
      <div className="fulltime-leftmenu">
        <ul>
          <li className="fulltime-ft">
            <FiBriefcase className="ft-leftfticon" /> Fulltime Jobs
          </li>
          <li className="fulltime-oj" onClick={() => navigate("/otherjobs")}>
            <FiBriefcase className="ft-leftojicon" /> Other Jobs{" "}
            <label className="ojlabel">New</label>
          </li>
          <li className="fulltime-ap" onClick={() => navigate("/applied")}>
            <IoDocumentOutline className="ft-leftapicon" /> Applied
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
            <fieldset className="ft-jobcardborder" key={index}>
              <legend className="jclegend">{job.mode}</legend>
              <div className="job-card">
                <div className="ft-compinfo">
                  <div className="ft-companylogo">
                    {job.imgURL ? (
                      <img
                        src={job.imgURL}
                        alt="logo"
                        className="ft-complogo"
                      />
                    ) : (
                      <FiBriefcase className="ft-complogo-icon" />
                    )}
                  </div>
                  <div className="ft-comptitloc">
                    <h3>{job.title}</h3>
                    <div className="ft-comploc">
                      <p className="ft-company">{job.company}&nbsp;|&nbsp;</p>
                      <p>{job.location}</p>
                    </div>
                  </div>
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
            <input
              type="radio"
              name="office"
              value="remote"
              checked={tempOfficeType === "remote"}
              onChange={handleOfficeTypeChange}
            />
            <label>Remote</label>

            <input
              className="inofficeradio"
              type="radio"
              name="office"
              value="in-office"
              checked={tempOfficeType === "in-office"}
              onChange={handleOfficeTypeChange}
            />
            <label>In-Office</label>
          </div>
        </div>

        <div className="fulltime-workexp">
          <label>Work Experience</label>
          <select
            className="workexpselect"
            name="Work Experience"
            value={tempExperience}
            onChange={handleExperienceChange}
          >
            <option value="">Select Experience</option>
            <option value="0-3 years">0-3 years</option>
            <option value="3+ years">3+ years</option>
          </select>
        </div>

        <div className="fulltime-minsalary">
          <label>Min Salary</label>
          <div className="minsalary-container">
            <input
              type="range"
              className="minsalaryrange"
              name="minsalary"
              min="0"
              max="12"
              value={tempMinSalary}
              onChange={handleSalaryChange}
            />
            <div className="minsalary-output">
              <span>₹ {tempMinSalary} LPA</span>
            </div>
          </div>
          <div className="minsalarybuttons">
            <button className="minsalaryclear" onClick={clearFilters}>
              Clear
            </button>
            <button className="minsalaryapply" onClick={applyFilters}>
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FulltimeJobs;
