//importing different components,hooks and packages
import useCustomLoader from "../CustomLoader.js";

import Images from "./Images.jsx";
import Loading from "./Loading.jsx";
import '../../styling/imagelist.css'
//imageLIst function to be rendered
function ImageList(){

    //impemented custom hook for loading of the data.
   const{isloading,offset,prevHandleClick,nextHandleClick,ImageList}=useCustomLoader();

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
       <br />
        {(isloading)?"":
        <div className="controls">
            {/* when prev button clicks method calls to change the offset value*/}
            <button className="btn" onClick={()=>prevHandleClick()} disabled={offset==0}>
                prev
            </button>
            {/* when next button clicks method calls to change the offset value */}
            <button className="btn" onClick={()=>nextHandleClick()}>
                next
            </button>
            </div>
        }
        
    </div>
    </>
    )
}
export default ImageList