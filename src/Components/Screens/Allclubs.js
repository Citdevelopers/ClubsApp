import React,{useEffect} from 'react'
import '../../Styles/Allclubs.css'
import Navbar from '../Navbar'
import clublogo from  '../../assets/clublogo.png'
import { useHistory } from 'react-router-dom'
function Allclubs() {
    const history =useHistory()
    useEffect(() => {
        document.body.style.background="#181818"
        return()=>{
            document.body.style.background="none"
        }
    },[])
    return (
        <div>
            <Navbar bg="#181818" brandcolor="#24B47E" search />
            <div className="joined-clubs-container" style={{marginTop:"100px"}}>
                <div className="clubs-joined-card" onClick={()=>history.push("Viewclub/:National Sevice Scheme")}>
                    <div>
                        <img src={clublogo} alt="club-logo" className="clublogo"/>
                    </div>
                    <div >
                        <div  className="clubname">NSS</div>
                        <div className="clubfullname">National Service Scheme</div>
                    </div>
                </div>
                <div className="clubs-joined-card">
                    <div>
                        <img src={clublogo} alt="club-logo" className="clublogo"/>
                    </div>
                    <div>
                        <div  className="clubname">NSS</div>
                        <div className="clubfullname">National Service Scheme</div>
                    </div>
                </div>
                <div className="clubs-joined-card">
                    <div>
                        <img src={clublogo} alt="club-logo" className="clublogo"/>
                    </div>
                    <div>
                        <div  className="clubname">NSS</div>
                        <div className="clubfullname">National Service Scheme</div>
                    </div>
                </div>
                <div className="clubs-joined-card">
                    <div>
                        <img src={clublogo} alt="club-logo" className="clublogo"/>
                    </div>
                    <div>
                        <div  className="clubname">NSS</div>
                        <div className="clubfullname">National Service Scheme</div>
                    </div>
                </div>
                <div className="clubs-joined-card">
                    <div>
                        <img src={clublogo} alt="club-logo" className="clublogo"/>
                    </div>
                    <div>
                        <div  className="clubname">NSS</div>
                        <div className="clubfullname">National Service Scheme</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Allclubs
