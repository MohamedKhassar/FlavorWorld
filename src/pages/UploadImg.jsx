import axios from 'axios';
import React , { useState} from 'react'



const UploadImg = () => {
  const [image, setImage] = useState("")
  const imgUploaded =  () => {
   const formData = new FormData();
   formData.append("file", image)
   formData.append("upload_preset","osag4mph")
   formData.append("cloud_name","dpklloyz5")
   let data = ""
    axios.post(
    "https://api.cloudinary.com/v1_1/dpklloyz5/image/upload"
    ,formData).then(((response) => {
           data = response.data["secure_url"]
           console.log(data)
    }))
     return data;
  }

    
  return (
    <div className="flex flex-row justify-center items-center h-[70px]">
      <input type="file" onChange={(evt)=> setImage(evt.target.files[0])} />
      <button className="bg-blue-700 rounded-md text-white p-4" onClick={imgUploaded}>Uploaded Image</button>
     
    </div>
    
  )
}

export default UploadImg