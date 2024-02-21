import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading.jsx";
import '../../styling/imagelist.css'
function ImageDetails(){


    const {id}=useParams();
    const[Image,setImage]=useState({});
    const[isLoading,setIsLoading]=useState(true);

    async function downloadImage(){
        setIsLoading(true);
        const response=await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
        // console.log(response);
        const details=response.data.photo;
        console.log(details);

        setImage({
            id:details.id,
            description:details.description,
            title:details.title,
            imgurl:details.url
        });

        setIsLoading(false);
    }

    useEffect(()=>{
        downloadImage();
    },[]);

    return (<>
    <div className="heading"><h1>Image Details</h1></div>
    {(isLoading)?<Loading />:
        <div className="details">
            <div className="img">
                    <img src={Image.imgurl} alt="" />
            </div>
            <div className="data">
                 <p className="title">{Image.title}</p>
                 <p className="desc">{Image.description}</p>
            </div>
        </div>
    }
    {(isLoading)?"":
    <Link style={{textDecoration: 'none'}} to="/">
    <button className="controls">Home</button>
    </Link>
    }
        </>
    )
}
export default ImageDetails