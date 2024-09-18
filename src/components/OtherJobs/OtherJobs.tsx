import "./OtherJobs.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FiBriefcase } from "react-icons/fi";
import { IoDocumentOutline } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";

interface otherJob {
  title: string;
  company: string;
  location: string;
  technologies: string[];
  salaryRange: string;
  experience: string;
  mode: string;
  applicationLink: string;
}

function OtherJobs() {
  const navigate = useNavigate();
  const [otherjobs, setotherJobs] = useState<otherJob[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/otherjobs")
      .then((response) => {
        setotherJobs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);

  const filteredotherJobs = otherjobs.filter(
    (otherjob) =>
      otherjob.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      otherjob.technologies.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="Other-main">
      <div className="Other-leftmenu">
        <ul>
          <li className="Other-ft" onClick={() => navigate("/fulltime")}>
            <FiBriefcase className="oj-leftfticon" /> Fulltime Jobs
          </li>
          <li className="Other-oj">
            <FiBriefcase className="oj-leftojicon" /> Other Jobs </li>
          <li className="Other-ap" onClick={() => navigate("/applied")}>
            <IoDocumentOutline className="oj-leftapicon" /> Applied
          </li>
        </ul>
      </div>

      <div className="otherjobcontent">
        <div className="other-searchmenu">
          <input
            className="other-searchbar"
            type="text"
            placeholder="Type any Skill & press Enter button to search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="other-job-list">
          {filteredotherJobs.map((otherJob, index) => (
            <div key={index} className="otherjob-card">
              <div className="oj-jcleftcontent">
                <div className="oj-jobinfo">
                  <h3>{otherJob.company}</h3>
                  <h3>{otherJob.title}</h3>
                  <p>{otherJob.location}</p>
                </div>
                <p className="oj-jobtechs">
                  {otherJob.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`othertech-item tech-${index}`}
                    >
                      {tech}
                    </span>
                  ))}
                </p>
              </div>
              <div className="oj-jcrightcontent">
                  <p>{otherJob.mode}</p>
                  <p>{otherJob.salaryRange}</p>
                  <p>Year of experience - {otherJob.experience}</p>
                  <button type="submit" className="oj-applybtn">Apply <FaExternalLinkAlt /></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="other-rightcontent">
        <p>
          These opportunities were not
          <br />
          posted on our platform and are
          <br />
          from the official career page of
          <br />
          their respective companies
          <br />
          <br />
          We have filtered these jobs for you
          <br />
          so that you get everything at one
          <br />
          place on our platform. Share these
          <br />
          opportunities with your friends as
          <br />
          well to let them know
          <br />
          <br />- Team Cuvette
        </p>
      </div>
    </div>
  );
}

export default OtherJobs;
