import './Applied.css'
import { useNavigate } from 'react-router-dom';

function Applied(){
    const navigate = useNavigate();

    return(
        <div className="Applied-main">
            <div className="Applied-leftmenu">
                <ul>
                    <li className='Applied-ft' onClick={() => navigate('/fulltime')}>Fulltime Jobs</li>
                    <li className='Applied-oj' onClick={() => navigate('/otherjobs')}>Other Jobs</li>
                    <li className='Applied-ap'>Applied</li>
                </ul>
            </div>
        </div>
    )
}

export default Applied