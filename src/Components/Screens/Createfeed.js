import React, { createRef, useEffect, useState } from 'react'
import Navbar from '../Navbar'
import poster from '../../assets/tet.png'
import logo from '../../assets/clublogo.png'
import ShowMoreText from 'react-show-more-text';
import like from '../../assets/Heart.svg'
import comment from '../../assets/comment.svg'
import share from '../../assets/share.svg'
import { useHistory } from 'react-router-dom'
import add from '../../assets/add.svg'
import '../../Styles/Createfeed.css'
import firebase from 'firebase'
import {v4 as uuid} from 'uuid'

function Createfeed() {
    const [poster, setposter] = useState("")
    const descriptionref = createRef()
    useEffect(() => {
        document.body.style.background = "#181818"
        return () => {
            document.body.style.background = "none"
        }
    }, [])
    const showfiledialog = () => {
        const fileIcon = document.getElementById('file-input')
        fileIcon.click()
    }
    const handleimagechange = (e) => {
        setposter(e.target.files[0])
        const imagetag = document.getElementById('file-icon')
        imagetag.src = URL.createObjectURL(e.target.files[0])
    }
    const submit = () => {
        const description = descriptionref.current.innerHTML
        const uploadtask = firebase.storage().ref(`/images/${uuid() + poster.name}`).put(poster)
        uploadtask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            (snapshot) => {
                
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                uploadtask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    firebase.firestore().collection('posts').add({
                        image:downloadURL,
                        description:description
                    }).then(res=>{
                        console.log("done")
                    }).catch(err=>{
                        console.log(err)
                    })
                })
            }
        )
    }
    return (
        <div>
            <Navbar bg="#181818" brandcolor="#24B47E" />
            <div className="card-contents-create-feed">
                <div className="event-card">
                    <div className="card-head">
                        <img src={logo} alt="logo" className="club-logo" />
                        <div >
                            <div className="person-name">Naveenkumar M</div>
                            <div className="club-name">NSS</div>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "300px" }}>
                            <img id="file-icon" src={add} alt="poster" className="poster-image" onClick={showfiledialog} />
                            <input id="file-input" type="file" onChange={handleimagechange} />
                        </div>

                    </div>
                    <div className="icons-bar">
                        <div>
                            <img src={like} alt="like" className="sh-icon" />
                            <img src={comment} alt="comment" className="sh-icon" />
                        </div>
                        <div>
                            <img src={share} alt="share" className="sh-icon" />
                        </div>
                    </div>
                    <div className="bottom-feed white-text" style={{ backgroundColor: "#1F1F1F", marginBottom: "20px", paddingBottom: "20px" }}>
                        <div style={{ margin: "20px" }} contentEditable suppressContentEditableWarning={true} className="description" id="description" onClick={(e) => {
                            document.getElementById('description').innerHTML = ""
                        }} ref={descriptionref}>
                            Edit this to Add description
                        </div>
                    </div>
                    <div className="btn-bar">
                        <button className="discard-button">Discard</button>
                        <button className="green-solid-button" onClick={submit}>Done</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Createfeed
