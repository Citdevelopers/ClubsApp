import React, { useEffect,useState } from 'react'
import '../../Styles/Profilestyles/viewprofile.css'
import Navbar from '../Navbar'
import logo from '../../assets/clublogo.png'
import whatsapp from '../../assets/whatsapp.svg'
import down from '../../assets/down.png'
import call from '../../assets/call.png'
import firebase from 'firebase'
function Viewprofile(props) {
    const [data,setdata]=useState({})
    useEffect(() => {
        const mail=props.match.params.username
        document.body.style.background = "#181818"
        document.getElementById('call').setAttribute("href", `tel:${+918870499146}`)
        document.getElementById('whatsapp').setAttribute('href', `https://wa.me/${8870499146}`)
        firebase.firestore().collection('users').where("email","==",mail).onSnapshot(snapshot=>{
            let arr=[]
            snapshot.forEach(res=>{
                console.log(res.data())
                arr.push(res.data())
            })
            setdata(arr[0])
        })
        return () => {
            document.body.style.background = "none"
        }
    }, [])
    return (
        <div>
            <Navbar bg="#181818" brandcolor="#24B47E" />
            <div className="main-container-view-profile">
                <div className="view-profile-top">
                    <div className="view-profile-img-container">
                        <img src={logo} slt="logo" className="view-profile-profile" />
                    </div>
                    <div className="view-profile-container1">
                        <div className="white-text view-profile-name">{data.name ?? "NIL"}</div>
                        <div className="white-text view-profile-mail">{data.email ?? "NIL"}</div>
                        <div className="contact-icons">
                            <div className="whatsapp-button">
                                <img src={whatsapp} style={{ paddingLeft: "10px", paddingRight: "10px" }} />
                                <a id="whatsapp">Whatsapp</a>
                            </div>
                            <div className="whatsapp-btn-mobile">
                            <img src={whatsapp} style={{ paddingLeft: "10px", paddingRight: "10px" }} />
                            </div>
                            <div className="call-btn-mobile">
                            <img src={call} style={{ paddingLeft: "10px", paddingRight: "10px", width: "24px" }} /> 
                            </div>
                            <div className="call-button">
                                <img src={call} style={{ paddingLeft: "10px", paddingRight: "10px", width: "24px" }} />
                                <a id="call" >Call</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="profile-info-head">Other Info</div>

                    <div className="data-profile">
                    <div className="datum-profile">
                        <label >Department:</label><br />
                        <div>{data.department ?? "NIL"}</div>
                    </div>
                    <div className="datum-profile">
                        <label >Year:</label><br />
                        <div>{data.year ?? "NIL"}</div>
                    </div>
                    <div className="datum-profile">
                        <label >Section:</label><br />
                        <div>{data.section ?? "NIL"}</div>
                    </div>
                    <div className="datum-profile">
                        <label >Hosteler/dayscholar:</label><br />
                        <div>{data.type ?? "NIL"}</div>
                    </div>


                </div>
                </div>
            </div>
        </div>
    )
}

export default Viewprofile
