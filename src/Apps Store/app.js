import './app.css'


const AppStore = (props) =>{
    const {thumbnails,onClickImgs}=props
    
    return (
        <>
        <div className='img-container'>
            <button className='button-container' onClick={ () => onClickImgs(thumbnails)}>
            <img className='each-img' src={thumbnails.thumbnailUrl} alt={thumbnails.category}/>
            </button>
        </div>
        </>
    )
}
export default AppStore