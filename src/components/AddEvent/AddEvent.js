import React, { useState } from 'react';
import './AddEvent.css';
import logo from '../../logos/Group 1329.png';
import userIcon from '../../logos/cloud-upload-outline 1.png';
import plusIcon from '../../logos/plus 1.png';
import uploadIcon from '../../logos/cloud-upload-outline 1.png';

const AddEvent = () => {

    const [ event, setEvent] = useState({
        title:'',
        description: '',
        date: '',
    });
    const [ selectedFile, setSelectedFile] = useState(null);

    const handleChange = (e) => {
        const newEventInfo = {...event};
        newEventInfo[e.target.name] = e.target.value;
        setEvent(newEventInfo);
        console.log(event)
    }


    return (
        <div className="addEvent">
            <div className="eventHeader">
                <img className="logo" src={logo} alt=""/>
                <h3> Add event</h3>
            </div>
            <div className="eventOptions">
                <div className="eventOptionLeft">
                    <p> <img src={userIcon} className="icon" alt=""/> Volunteer register list </p>
                    <p style={{color: "#207FEE", fontWeight: '600'}}> <img src={plusIcon} className="icon" alt=""/> Add event </p>
                </div>

                <div className="eventOptionRight">

                    <form className="form" action="">
                        <div className="formLeft">
                            <h3>Event Title </h3>
                            <input type="text" name="title" 
                                placeholder="Enter title" id=""
                                onChange={handleChange}
                                />

                            <h3> Description </h3>
                            <input type="text" name="description" 
                                placeholder="Enter Description " id=""
                                onChange={handleChange}
                                />
                        </div>

                        <div className="formRight">
                            <h3>Event Date </h3>
                            <input type="date" name="date" 
                                placeholder="Enter title" id=""
                                onChange={handleChange}
                                />

                            <h3> Banner </h3>
                            <div className="uploadFile">
                                <img className='uploadImage' src={uploadIcon} alt=""/>
                                <input 
                                    type="file" 
                                    class="custom-file-input" 
                                    value={selectedFile}
                                    onChange={(e)=> setSelectedFile(e.target.files[0])}
                                    />
                            </div>
                        </div>

                    </form>
                </div>
                
            </div>
            
        </div>
    );
};

export default AddEvent;