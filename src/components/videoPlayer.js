import React,{useState} from "react";
import { useLocation } from "react-router";

function VideoComponent(){
    const location =useLocation();
    return(
        <div>
            <video id="clip" controls preload="auto" width="640" height="264" data-setup="{}">
            <source src={location.state.path} type='video/mp4'/>        
    </video>
        </div>
    )
}

export default VideoComponent;