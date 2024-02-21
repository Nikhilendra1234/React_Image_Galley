//import the style sheet
import '../../styling/images.css'
import { Link } from 'react-router-dom'
function Images({id,image}){
    return(
        <Link to={`/image/${id}`}>
        <div className="image">
            {/* render img with the src coming from  ImageList */}
            <img src={image} alt="" />
        </div>
        </Link>
    )
}
//export the default images component
export default Images