import React,{useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { Audio } from 'react-loader-spinner'

function TextForm(){
    const navigate =useNavigate();
    const [data, setData] = useState({
        firstName:"",
        lastName:""
      });
      const [file, setFile] = useState();
      const [fileName, setFileName] = useState("");
      const [loading,setLoading]=useState(false);

      useEffect(()=>{

      },[loading])
    const handleSubmit = async(event) => {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData();
            formData.append("file", file);
            formData.append("fileName", fileName);
            formData.append("firstName",data.firstName);
            formData.append("lastName",data.lastName);
            try{
                const res = await axios.post(
                    "http://3.84.35.229:5000/upload",
                    formData
                );
                const res1= await axios.post(
                    "http://3.84.35.229:5000/uploadtos3",
                    res.data
                )
                
                // const res2= await axios.post(
                //     "http://localhost:5000/download",
                //     res.data
                // )
            navigate('/video', {state: res1.data})
            }catch(err){
                console.log(err);
            }
            
        setLoading(false);

      };
    return(
    <div className="App">
       {loading?<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>:<form
       encType="multipart/form-data"
       onSubmit={handleSubmit}>
        <label>First Name</label>
      <input type="text" value={data.firstName} placeholder="Enter Your First Name" id="fname" name="firstName" required
        onChange={e =>{
          setData({...data,firstName:e.target.value})
        }}
      />
      
      <label >Last Name</label>
      <input type="text" value={data.lastName} placeholder="Enter Your Last Name" id="lname" name="lastName" required
        onChange={e =>{
          setData({...data,lastName:e.target.value})
        }}
      />
      
      <label>Select Video File</label>
      <br></br>
      <input type="file" name="videoFile" required
      onChange={e =>{
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
      }}
      />

      <input type="submit" value="Submit"></input>
    </form>}
    </div>
    )
}

export default TextForm;