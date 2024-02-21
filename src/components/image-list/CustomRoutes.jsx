import { Route,Routes } from "react-router-dom"
import ImageList from "./ImageList"
import ImageDetails from "./ImageDetails"
function CustomRoutes(){

    return(
        <Routes>
            <Route path="/" element={<ImageList />}/>
            <Route path="/image/:id" element={<ImageDetails />}/>
        </Routes>
    )

}
export default CustomRoutes