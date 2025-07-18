import '../App.css'





let BottomNavbar = (props) => {
    let url = window?.location?.href?.split('/')[3] == '' ? null : window?.location?.href?.split('/')[3][0]?.toUpperCase() + window?.location?.href?.split('/')[3]?.substring(1)
    
    // console.log(window?.location?.href?.split('/')[3])
    const Selected = props.Selected
    let Menu = (props) => {
        
        let isActive = () => {
            if ((props.Text === 'Dashboard' && Selected === null) || (Selected === props.Text)) {
                // console.log('activate ==> ',props.Text)
                return true
            }
            else return false
        }

        return(
            <div className='col-6 text-center links_navbottom' onClick={props.onClick}>
                <span className={`navbar-icons material-symbols-outlined text-center ${isActive()? 'active' : ''}`}>{props.Icon}</span>
                <p className="mb-0" style={{textDecoration:'none'}}>{props.Text}</p>
            </div>
        )
    }
    
    return (
        
        <div className="mynavbar mobile" Selected = {props.Selected}>               
            <div className="row w-100" style={{marginLeft:'1%',marginTop:'1%'}}>

                
                
                <Menu Icon='search' Text='Search' Active={true} onClick={props.onClick1}/>

                <Menu Icon='favorite' Text='Favorites' onClick={props.onClick2} />
                
                {/* <Menu Icon='settings' Text='Settings' onClick={props.onClick3}/> */}
      
            </div>

            <img 
                src='https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png'
                className='navlogo'
            />
        </div>
    
    )
}

export default BottomNavbar