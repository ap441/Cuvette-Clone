import { useState } from "react";
import { FiBriefcase } from "react-icons/fi";
import { IoDocumentOutline } from "react-icons/io5";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Applied.css";

function Applied() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("internships");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

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
                <p className="ap-cloudicon">💭</p>
                <h2>No Applied internships</h2>
                <p>You have not applied to any internships yet.</p>
                <button type="submit" className="applyinternbtn">
                  Search Internship
                </button>
              </div>
            </div>

            <div
              className={`ap-mcinternright ${isDropdownOpen ? "expanded" : ""}`}
            >
              <h3 onClick={() => setDropdownOpen(!isDropdownOpen)}>
                How Cuvette Works?{" "}
                {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </h3>

              <div className="cuvette-steps">
                <div className="step">
                  <p className="step-number">01</p>
                  <h4>Apply in Jobs/ Internships</h4>
                  <p className="step-description">
                    Your Jobs/ Internships will display in “Applied” section
                  </p>
                  <p className="step-time">~ 3 to 4 days</p>
                </div>

                <div className="step">
                  <p className="step-number">02</p>
                  <h4>Cuvette Profile Review</h4>
                  <p className="step-description">
                    Recommended <br />
                    (Profile shared to company with “Recommended” tag)
                    <br />
                    Less Chances <br />
                    (Profile is shared with company without any tag)
                  </p>
                  <p className="step-time">~ 3 to 4 days</p>
                </div>

                <div className="step">
                  <p className="step-number">03</p>
                  <h4>Company Process</h4>
                  <p className="step-description">
                    Shortlisted / Maybe Relevant <br />
                    (May contact you for assignments & interviews)
                    <br />
                    Rejected <br />
                    (Profile rejected by company)
                  </p>
                  <p className="step-time">~ 7 to 10 days</p>
                </div>

                <div className="step">
                  <p className="step-number">04</p>
                  <h4>Offer Letter</h4>
                  <p className="step-description">
                    Once all the rounds are done, company can give you an offer
                    & get you onboard.
                  </p>
                </div>
              </div>
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
              <p className="ap-cloudicon">💭</p>
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
