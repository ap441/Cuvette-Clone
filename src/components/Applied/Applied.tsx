import "./Applied.css";
import { useNavigate } from "react-router-dom";
import { FiBriefcase } from "react-icons/fi";
import { IoDocumentOutline } from "react-icons/io5";
import { useState } from "react";

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
            <FiBriefcase className="ap-leftojicon" /> Other Jobs
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
            {/* Content for Internships */}
            <p>No internships applied yet.</p>
          </div>
        )}

        {activeTab === "jobs" && (
          <div className="ap-mcjobs">
            {/* Content for Jobs */}
            <p>No jobs applied yet.</p>
          </div>
        )}
        <div className="ap-mcinternships"></div>
      </div>
    </div>
  );
}

export default Applied;
