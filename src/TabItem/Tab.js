import './Tab.css'
const TabItem = (props) =>{
            
    const {eachTab,onClickTab,isActiveTab} =props
    //const {tabId}=eachTab
    
    const onclickTab = () =>{
        onClickTab(eachTab)
    }
 const activeTab = isActiveTab.tabId === eachTab.tabId ? 'activeTab' : ''
    return (
        <>
        <div>
            <button className='each-tabItem-container'  onClick ={onclickTab}>
            <p className={ `each-tab ${activeTab}`}>{eachTab.displayText}</p>
            </button>
        </div>
        </>
    )
}

export default TabItem