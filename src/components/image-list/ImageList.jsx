//importing different components,hooks and packages

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import Images from "./Images.jsx";
import Loading from "./Loading.jsx";
import '../../styling/imagelist.css'
//imageLIst function to be rendered
function ImageList(){

    //declaring useSate hook for the url
    const[imageUrl,setImageUrl]=useState("https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20");
    //declaring useState hook for the offset value
    const[offset,setOffset]=useState(0);
    //declaring an array of images using useState hook initialized with the empty array
    const [ImageList,setImageList]=useState([]);
    //declared isoading to know the it is loading or not for the better user interaction
    const[isloading,setIsLoading]=useState(true);
//function to load the image urls
    async function downloadImage(){
         setIsLoading(true);
//fetching data bhy using axios
        const response=await axios.get(imageUrl); 
        // console.log(response.data.photos);
        const imagePromise=response.data.photos;
        // console.log(imagePromise[0]);
//mapping over each element and extracting value from it an stored in the ImageList
        const result= await imagePromise.map((image)=>{
            // console.log(`details with index ${index}: ${image.url}`);
            return{
                id:image.id,
                description:image.description,
                title:image.title,
                imgurl:image.url,
                user:image.user
            }
        });
        // console.log(result);
        //set the ImageList array
        setImageList(result);
        
        //after loading all the element set isloading as false
        setIsLoading(false);        
        // console.log(ImageList[0].imgurl);
    }  
//useEffect hook calling the method to load data having dependency imageUrl whenever yhe imageUrl changes then the component rerenders itself again
    useEffect(()=>{
        downloadImage();
    },[imageUrl]);

    //method called when we go to previous images and it decreces the offset value and set the new imageUrl so that the page rerender with the new url
    const prevHandleClick=()=>{
        if(offset>0){
            setOffset((prev)=>prev-20);
        }
        let url=`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=20`;
        setImageUrl(url);
    }
//method called when we go to next images and it decreces the offset value and set the new imageUrl so that the page rerender with the new url
    const nextHandleClick=()=>{
        setOffset((prev)=>prev+20);
        let url=`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=20`;
        setImageUrl(url);
    }

    return (
     
        <>
      <div className="heading"><h1>Image Gallery</h1></div>
     <div className="image-wrapper">
        {/* checking if the isloading is true then render the loading element else render the images */}
        { (isloading) ? <Loading />:   
        // use map method to render each image component   
            ImageList.map((image)=>
               
                <Images key={image.id} id={image.id} image={image.imgurl}  /> 
            )  
        }
        {/* checking if the isloading is true then render the loading element else render the control button */}
       
        {(isloading)?"":
        <div className="controls">
            <button className="btn" onClick={prevHandleClick} disabled={offset==0}>
                prev
            </button>
            <button className="btn" onClick={nextHandleClick}>
                next
            </button>
            </div>
        }
        
    </div>
    </>
    )
}
export default ImageList