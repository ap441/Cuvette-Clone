import './FulltimeJobs.css'
import { useNavigate } from 'react-router-dom';

function FulltimeJobs(){
    const navigate = useNavigate();

    return(
        <div className="fulltime-main">
            <div className="fulltime-leftmenu">
                <ul>
                    <li className='fulltime-ft'>Fulltime Jobs</li>
                    <li className='fulltime-oj' onClick={() => navigate('/otherjobs')}>Other Jobs</li>
                    <li className='fulltime-ap' onClick={() => navigate('/applied')}>Applied</li>
                </ul>
            </div>

            <div className="fulltimecontent">
                <div className="fulltime-searchmenu">
                    <input className="fulltime-searchbar" type="text" placeholder="Search by Role / Skills"/>
                </div>
            </div>

            <div className="fulltime-filters">
                <h3>Apply Filters</h3>
                <div className="officetype">
                    <label>Office Type:</label>
                    <div className="fulltime-otoptions">
                        <input type="radio" name="office" value="remote"/>
                        <label>Remote</label>

                        <input className="inofficeradio" type="radio" name="office" value="in-office"/>
                        <label>In-Office</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FulltimeJobs