import './DataEntry.css'
import { useNavigate } from 'react-router-dom'

export default function DataEntry(){
    const navigate = useNavigate()
    return (
        <div>
        <button onClick={() => navigate('/recommendation')}>
        Click to go to Recommendation
        </button>
        <p> This is the DataEntry page</p>
        </div>
    )
}