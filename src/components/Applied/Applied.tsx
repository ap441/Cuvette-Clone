import "./Applied.css";
import { useNavigate } from "react-router-dom";
import { FiBriefcase } from "react-icons/fi";
import { IoDocumentOutline } from "react-icons/io5";
import { useState } from "react";
import { TfiThought } from "react-icons/tfi";

function Applied() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("internships");

  return (
    <div className="Applied-main">
      <div className="Applied-leftmenu">
        <ul>
          <li className="Applied-ft" onClick={() => navigate("/fulltime")}>
            {" "}
            <FiBriefcase className="ap-leftfticon" /> Fulltime Jobs
          </li>
          <li className="Applied-oj" onClick={() => navigate("/otherjobs")}>
            <FiBriefcase className="ap-leftojicon" /> Other Jobs{" "}
            <label className="ojlabel">New</label>
          </li>
          <li className="Applied-ap">
            <IoDocumentOutline className="ap-leftapicon" /> Applied
          </li>
        </ul>
      </div>

      <div className="applied-maincontent">
        <div className="ap-mcnav">
          <h3
            className={activeTab === "internships" ? "active-tab" : ""}
            onClick={() => setActiveTab("internships")}
          >
            Applied Internships (0)
          </h3>
          <h3
            className={activeTab === "jobs" ? "active-tab" : ""}
            onClick={() => setActiveTab("jobs")}
          >
            Applied Jobs (0)
          </h3>
        </div>
        {activeTab === "internships" && (
          <div className="ap-mcinternships">
            <div className="ap-mcinternleft">
              <p>
                Once the internship is closed, it will be removed after 90 days
                from the list
              </p>
              <div className="ap-mcinternshipsmaincontent">
                <TfiThought className="ap-cloudicon" />
                <h2>No Applied internships</h2>
                <p>You have not applied to any internships yet.</p>
                <button type="submit" className="applyinternbtn">
                  Search Internship
                </button>
              </div>
            </div>
            <div className="ap-mcinternright">
              <h3>How Cuvette Works?</h3>
            </div>
          </div>
        )}

        {activeTab === "jobs" && (
          <div className="ap-mcjobs">
            <p>
              Once the job is closed, it will be removed after 90 days from this
              list
            </p>
            <div className="ap-mcjobmaincontent">
              <TfiThought className="ap-cloudicon" />
              <h2>No Applied jobs</h2>
              <p>You have not applied to any job yet.</p>
              <button
                type="submit"
                className="applyjobbtn"
                onClick={() => navigate("/fulltime")}
              >
                Search Job
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Applied;
