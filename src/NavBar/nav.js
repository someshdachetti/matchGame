
import './nav.css'

const NavBar = (props) =>{
    
    const {time} = props
    
    return (
      
        <>
        <nav className='navbar-container'>
            <div className='logo-container'>
                <img className='logo' src='https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png' alt = 'logo'/>
                <div className='score-container'>
                    <p className='score'>Score : 0</p>
                    <div className='time-container'>
                        <img className='img' sr='https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png' alt ='timer'/>
                        <p className='time'>{time}</p>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}
export default  NavBar