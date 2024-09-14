import './FulltimeJobs.css'

function FulltimeJobs(){
    return(
        <div className="main">
            <div className="leftmenu">
                <ul>
                    <li>Fulltime Jobs</li>
                    <li>Other Jobs</li>
                    <li>Applied</li>
                </ul>
            </div>

            <div className="fulltimecontent">
                <div className="searchmenu">
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
        </div>
    )
}

export default FulltimeJobs