import './OtherJobs.css'
import { useNavigate } from 'react-router-dom';

function OtherJobs(){
    const navigate = useNavigate();

    return(
        <div className="Other-main">
            <div className="Other-leftmenu">
                <ul>
                    <li className='Other-ft' onClick={() => navigate('/fulltime')}>Fulltime Jobs</li>
                    <li className='Other-oj'>Other Jobs</li>
                    <li className='Other-ap' onClick={() => navigate('/applied')}>Applied</li>
                </ul>
            </div>
        </div>
    )
}

export default OtherJobs