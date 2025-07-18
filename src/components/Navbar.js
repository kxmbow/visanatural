
const Navbar = (props) => {
    let url = window?.location?.href?.split('/')[3] == '' ? null : window?.location?.href?.split('/')[3][0]?.toUpperCase() + window?.location?.href?.split('/')[3]?.substring(1)
    
    // console.log(window?.location?.href?.split('/')[3])
    const Selected = props.Selected
    let Menu = (props) => {
        
        const isActive = () => {
            if ((props.Text === 'Dashboard' && Selected === null) || (Selected === props.Text)) {
                // console.log('activate ==> ',props.Text)
                return true
            }
            else return false
        }

        return(
            <div className='col-12 text-center links' onClick={props.onClick}>
                <span className={`navbar-icons material-symbols-outlined text-center ${isActive()? 'active' : ''}`}>{props.Icon}</span>
                <p className="mb-0" style={{textDecoration:'none'}}>{props.Text}</p>
            </div>
        )
    }
    
    return (
        
        <div className="mynavbar animate__animated animate__fadeInLeft" Selected = {props.Selected}>               
            <div className="row" >

                <div style={{marginBottom:'10%',marginTop:'5%'}} />
                
                <Menu to='/' Icon='search' Text='Search' Active={true} onClick={props.onClick1}/>

                <Menu to='/favorites' Icon='favorite' Text='Favorites' onClick={props.onClick2} />
                
                {/* <Menu to='/settings' Icon='settings' Text='Settings' onClick={props.onClick3} /> */}

                <div className="d-flex" style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
                    <p
                        style={{color:'#9E9E9E',marginTop:'10px'}}
                    >
                        History
                    </p>
                    <hr className="w-100" style={{marginLeft:15}}/>

                    
                </div>

                <div class="card-inside mb-3" onClick={() => alert('Leads to a page with the components generated. Last 10 history')}>
                    <div class="row">
                        <div class="col-12 text-center">
                            <p className="mb-0 ellipsis">Create a login button with a purple background</p>
                        </div>
                    </div>
                </div>

                <div class="card-inside mb-3" onClick={() => alert('Leads to a page with the components generated. Last 10 history')}>
                    <div class="row">
                        <div class="col-12 text-center">
                            <p className="mb-0 ellipsis">Can you help me build a React component for a login form? I want it to have email and password inputs, and a submit button that turns blue when hovered</p>
                        </div>
                    </div>
                </div>

                <div class="card-inside mb-3" onClick={() => alert('Leads to a page with the components generated. Last 10 history')}>
                    <div class="row">
                        <div class="col-12 text-center">
                            <p className="mb-0 ellipsis">I need a responsive card component with an image at the top, a title, some text, and a button at the bottom. Can you write the JSX and CSS for it?</p>
                        </div>
                    </div>
                </div>
                
      
            </div>

            <img 
                // className='animate__animated rubberBand animate__infinite	infinite'
                src='https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png'
                className='navlogo'
            />
        </div>
    
    )
}

export default Navbar