
import './index.css'

const DisplayImage = (props) =>{
    const {img}=props
    return (
        <>
      
        <img src={img.imageUrl} alt ={img.category}/>
        </>
    )
}
export default DisplayImage




