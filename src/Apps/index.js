import { Component } from 'react'
import NavBar from '../NavBar/nav'
import TabItem from '../TabItem/Tab'
import AppStore from '../Apps Store/app'
import DisplayImage from '../Display Image'
import './index.css'

const tab = [
  { tabId: 'FRUIT', displayText: 'Fruits' },
  { tabId: 'ANIMAL', displayText: 'Animals' },
  { tabId: 'PLACE', displayText: 'Places' },
]

class Apps extends Component {
  state = { time: 60, activeTab: tab[0], img: [] } // Changed 'imgs' to 'img' for consistency

  componentDidMount = () => {
    this.TimerId = setInterval(this.updatetime, 1000)
  }

  componentWillUnmount = () => {
    clearInterval(this.TimerId)
  }

  clearTime = () => {
    const { time } = this.state
    if (time === 0) {
      clearInterval(this.TimerId)
    }
  }

  updatetime = () => {
    this.setState((prevState) => ({
      time: prevState.time - 1
    }))
  }

  getTime = () => {
    return this.state.time
  }

  getFilteredApps = () => {
    const { imagesList } = this.props
    const { activeTab } = this.state
    const filteredApps = imagesList.filter((each) => activeTab.tabId === each.category)
    return filteredApps
  }

  renderAllImages = () => {
    const filteredApps = this.getFilteredApps()
    return (
      filteredApps.map(each => (
        <div key={each.id} className='img-container'>
          <div>
            <AppStore thumbnails={each}  />
          </div>
        </div>
      ))
    );
  };
  

  TABitems = () => {
    const { tabsList } = this.props
    return tabsList
  }

  renderTabItem = () => {
    const TABitems = this.TABitems()
    const { activeTab } = this.state
    return (
      TABitems.map(each => (
        <div key={each.tabId}>
          <TabItem eachTab={each} onClickTab={this.onClickTab} isActiveTab={activeTab} />
        </div>
      ))
    )
  }

  onClickTab = (TabId) => {
    this.setState({ activeTab: TabId, img: [] }); // Reset img when changing tabs
  }
  
  onClickImgs = (each) =>{
  
    const  imgs = [
    {
       
        imageUrl :each.imageUrl,
        thumbnailUrl : each.thumbnailUrl,
        category : each.category
    }
  ]
  this.setState({img : [imgs]})
}
  renderDisplayImage = () => {
   const imgs = this.onClickImgs()
   
    return (
      <>
        <DisplayImage  onClickImgs = {imgs}/>
      </>
    )
  };

  render() {
    const time = this.getTime()
    return (
      <>
        <NavBar time={time} />
        {this.renderDisplayImage()}
        {this.renderTabItem()}
        {this.renderAllImages()}
      </>
    )
  }
}

export default Apps
