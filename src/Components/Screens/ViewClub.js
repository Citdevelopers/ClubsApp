import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import '../../Styles/Viewclub.css'
import clublogo from '../../assets/clublogo.png'
function ViewClub() {
    useEffect(() => {
        document.body.style.background = "#181818"
        return () => {
            document.body.style.background = "none"
        }
    }, [])
    return (
        <div>
            <Navbar bg="#181818" brandcolor="#24B47E" />
            <div className="vc-container">
                <div className="vc-topbar">
                    <div>
                        <img src={clublogo} className="logo-view-profile" />
                    </div>
                    <div className="view-club-details">
                        <div className=" club-name-view-club" >NSS</div>
                        <div className="white-text club-full-name-view-club" >National Service Sscheme</div>
                        <div>
      
                            <p className="about-content-view-club">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.</p>
                        </div>
                    </div>
                </div>
            <div className="secretaries-content">
                <div className="green-text large-text ">Secretaries</div>
                <div className="secretaries-grid">
                    <div className="grid-contents-secretaries">
                        <img src={clublogo} className="secretaries-logo"/>
                        <div className="secretaries-details">
                            <div className="white-text" >Naveenkumar M</div>
                            <div className="white-text" style={{fontSize:"14px"}}>IV year</div>
                        </div>
                    </div>
                    <div className="grid-contents-secretaries">
                        <img src={clublogo} className="secretaries-logo"/>
                        <div className="secretaries-details">
                            <div className="white-text" >Naveenkumar M</div>
                            <div className="white-text" style={{fontSize:"14px"}}>IV year</div>
                        </div>
                    </div>
                    <div className="grid-contents-secretaries">
                        <img src={clublogo} className="secretaries-logo"/>
                        <div className="secretaries-details">
                            <div className="white-text" >Naveenkumar M</div>
                            <div className="white-text" style={{fontSize:"14px"}}>IV year</div>
                        </div>
                    </div>
                    <div className="grid-contents-secretaries">
                        <img src={clublogo} className="secretaries-logo"/>
                        <div className="secretaries-details">
                            <div className="white-text" >Naveenkumar M</div>
                            <div className="white-text" style={{fontSize:"14px"}}>IV year</div>
                        </div>
                    </div>

                   
                </div>
            </div>
            </div>
        </div>
    )
}

export default ViewClub
